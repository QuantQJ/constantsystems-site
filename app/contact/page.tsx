"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Turnstile } from "react-turnstile";
import GridArt from "@/components/GridArt";

const serviceOptions = [
  "AI Systems & Infrastructure",
  "Formal Verification & Proofs",
  "Trading & Financial Systems",
  "Web & Application Development",
  "Security & Air-Gapped Solutions",
  "Other / Not Sure",
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          service: data.get("service"),
          message: data.get("message"),
          website: data.get("website"),
          turnstileToken,
        }),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("sent");
      form.reset();
      setTurnstileToken("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  return (
    <>
      {/* Header */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden">
        <GridArt />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Get in touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-4 text-lg text-muted max-w-2xl leading-relaxed"
          >
            Tell us about your project or ask a question. We respond to every
            message.
          </motion.p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="lg:col-span-3"
            >
              {status === "sent" ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
                  <h2 className="text-xl font-semibold text-white">
                    Message sent!
                  </h2>
                  <p className="mt-2 text-muted">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-sm text-accent hover:text-accent-hover font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot — hidden from humans, traps bots */}
                  <div className="absolute opacity-0 -z-10" aria-hidden="true" tabIndex={-1}>
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white/80 mb-1.5"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-border bg-surface-card px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white/80 mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-border bg-surface-card px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-white/80 mb-1.5"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-lg border border-border bg-surface-card px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-colors"
                    >
                      <option value="">Select a service area</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white/80 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full rounded-lg border border-border bg-surface-card px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-colors resize-none"
                      placeholder="Describe your project or question..."
                    />
                  </div>

                  <Turnstile
                    sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                    onVerify={(token: string) => setTurnstileToken(token)}
                    onExpire={() => setTurnstileToken("")}
                    theme="dark"
                  />

                  {status === "error" && (
                    <p className="text-sm text-red-400">
                      {errorMsg || "Something went wrong."} You can also email{" "}
                      <a href="mailto:admin@constantqj.com" className="underline">
                        admin@constantqj.com
                      </a>{" "}
                      directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending" || !turnstileToken}
                    className="w-full sm:w-auto bg-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/20 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-surface-card rounded-2xl p-8 border border-border">
                <h2 className="text-lg font-semibold text-white">
                  Contact Info
                </h2>
                <div className="mt-6 space-y-5">
                  <div>
                    <h3 className="text-sm font-medium text-muted">Email</h3>
                    <a
                      href="mailto:admin@constantqj.com"
                      className="mt-1 text-base text-white hover:text-accent transition-colors"
                    >
                      admin@constantqj.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted">
                      Location
                    </h3>
                    <p className="mt-1 text-base text-white">
                      CityPlex Towers, Suite 3725
                      <br />
                      2488 E 81st St
                      <br />
                      Tulsa, OK 74137
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted">
                      Availability
                    </h3>
                    <p className="mt-1 text-base text-white">
                      Remote worldwide. On-site in Tulsa area.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="text-sm font-medium text-muted">
                    Prefer email?
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    Send a direct email to{" "}
                    <a
                      href="mailto:admin@constantqj.com"
                      className="text-accent hover:text-accent-hover font-medium"
                    >
                      admin@constantqj.com
                    </a>{" "}
                    with a description of what you need. You&apos;ll hear back
                    within 24 hours.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
