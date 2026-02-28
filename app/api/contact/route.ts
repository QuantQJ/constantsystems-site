import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiter: max 5 submissions per IP per 15 minutes
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT) return true;
  return false;
}

// Clean up stale entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  rateMap.forEach((entry, ip) => {
    if (now > entry.resetAt) rateMap.delete(ip);
  });
}, 5 * 60 * 1000);

// Sanitize input — strip HTML tags, trim, limit length
function sanitize(input: unknown, maxLength: number): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLength);
}

// Basic email validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export async function POST(request: Request) {
  try {
    // Rate limit by IP
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Reject oversized payloads (10KB max)
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 10240) {
      return NextResponse.json(
        { error: "Request too large." },
        { status: 413 }
      );
    }

    const body = await request.json();

    // Honeypot check — if hidden field is filled, it's a bot
    if (body.website) {
      // Silently accept but don't send — fool the bot
      return NextResponse.json({ success: true });
    }

    // Sanitize all inputs
    const name = sanitize(body.name, 200);
    const email = sanitize(body.email, 254);
    const service = sanitize(body.service, 200);
    const message = sanitize(body.message, 5000);

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Send inquiry to admin
    await resend.emails.send({
      from: "Constant Systems <onboarding@resend.dev>",
      to: "admin@constantqj.com",
      replyTo: email,
      subject: `New Inquiry${service ? ` — ${service}` : ""} from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Service: ${service || "Not specified"}`,
        `IP: ${ip}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    // Auto-reply to the sender
    await resend.emails.send({
      from: "Constant Systems <onboarding@resend.dev>",
      to: email,
      replyTo: "admin@constantqj.com",
      subject: "We've received your message — Constant Systems",
      text: [
        `Hi ${name},`,
        "",
        "Thank you for reaching out to Constant Systems. We have received your message and are working on scheduling you for a call or appointment.",
        "",
        "We typically respond within 24 hours. If your matter is urgent, feel free to reply directly to this email.",
        "",
        "Best regards,",
        "James Kerr",
        "Constant Systems",
        "admin@constantqj.com",
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please email admin@constantqj.com directly." },
      { status: 500 }
    );
  }
}

// Block all other methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
export async function PUT() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
export async function DELETE() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
export async function PATCH() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
