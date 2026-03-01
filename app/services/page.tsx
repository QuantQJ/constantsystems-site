"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GridArt from "@/components/GridArt";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const serviceAreas = [
  {
    title: "AI Systems & Infrastructure",
    description:
      "We design, build, and deploy AI systems that run on your hardware — not someone else's cloud. From single-GPU workstations to multi-node clusters, we handle the full stack.",
    items: [
      "Local LLM deployment and optimization",
      "GPU cluster setup and management",
      "Model fine-tuning and training pipelines",
      "RAG systems and knowledge bases",
      "AI-powered automation workflows",
      "On-premise GPU infrastructure at any scale",
    ],
  },
  {
    title: "Formal Verification & Mathematical Proofs",
    description:
      "We write machine-checked mathematical proofs and formally verify software correctness. Published work across multiple proof assistants — when it has to be right, we prove it.",
    items: [
      "Formal proofs in Lean 4, Coq, and Isabelle/HOL",
      "Software correctness verification",
      "Published mathematical proofs and theorems",
      "Algorithm verification and certified programs",
      "Type theory and dependent type systems",
      "Cross-verification across 9 proof assistants",
    ],
  },
  {
    title: "Trading & Financial Systems",
    description:
      "Algorithmic trading infrastructure built for speed, reliability, and compliance. We integrate with major brokers and exchanges to build systems that execute your strategy.",
    items: [
      "Algorithmic trading system development",
      "Multi-broker integration (IBKR, Alpaca, Coinbase, Robinhood, TradeStation, TradingView, Tradovate)",
      "Backtesting engines and strategy optimization",
      "Real-time market data pipelines",
      "Webhook-driven execution systems",
      "Risk management and monitoring dashboards",
    ],
  },
  {
    title: "Web & Application Development",
    description:
      "Modern, performant web applications and APIs. We build with the same frameworks used by the best teams in the industry — fast delivery, clean code, no bloat.",
    items: [
      "Full-stack web applications (Next.js, React, Node.js)",
      "REST and GraphQL API development",
      "Real-time dashboards and data visualization",
      "Mobile-responsive progressive web apps",
      "Database design and optimization",
      "CI/CD pipelines and deployment automation",
    ],
  },
  {
    title: "Security & Air-Gapped Solutions",
    description:
      "For organizations that can't afford data leaks. We build systems that operate in complete isolation — no internet, no external dependencies, fully self-contained.",
    items: [
      "Air-gapped AI system deployment",
      "Network security hardening",
      "Secure infrastructure architecture",
      "On-premise-only deployments",
      "Compliance-ready system design",
      "Encrypted communication and storage",
    ],
  },
];

export default function Services() {
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
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-4 text-lg text-muted max-w-2xl leading-relaxed"
          >
            We build complete systems — from infrastructure to production
            software. Every engagement is tailored to your exact needs, whether
            you&apos;re an individual, a small team, or a large institution.
          </motion.p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {serviceAreas.map((area, areaIdx) => (
            <motion.div
              key={area.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              custom={areaIdx}
              className="bg-surface-card rounded-2xl p-8 md:p-12 border border-border hover:border-accent/20 transition-colors"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                {area.title}
              </h2>
              <p className="mt-3 text-muted max-w-2xl leading-relaxed">
                {area.description}
              </p>
              <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                {area.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-2xl px-8 py-14 md:px-16 text-center border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-surface-card to-cyan-900/5" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                Not sure what you need?
              </h2>
              <p className="mt-3 text-muted max-w-md mx-auto">
                Reach out and describe your situation. We&apos;ll recommend the
                right approach — no obligation.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center bg-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/20 text-base"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
