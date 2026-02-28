import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Constant Systems — AI Systems & Infrastructure Consulting",
  description:
    "Build anything. Run it anywhere. AI systems, trading infrastructure, web development, and security consulting for individuals, businesses, and institutions.",
  keywords: [
    "AI consulting",
    "infrastructure",
    "trading systems",
    "air-gapped AI",
    "local AI",
    "web development",
    "security",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
