"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GridArt from "@/components/GridArt";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const services = [
  {
    title: "AI Systems & Infrastructure",
    description:
      "Local LLM deployment, GPU clusters, model fine-tuning, and AI pipelines. On-premise or cloud. Private and self-contained.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
  {
    title: "Trading & Financial Systems",
    description:
      "Algorithmic trading systems, broker integrations, backtesting engines, and real-time market data pipelines.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Formal Verification & Proofs",
    description:
      "Machine-checked mathematical proofs and formally verified software. Published work across Lean, Coq, Isabelle, and more.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Web & Application Development",
    description:
      "Full-stack web applications, APIs, dashboards, and mobile-ready platforms. Modern frameworks, fast delivery.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Security & Air-Gapped Solutions",
    description:
      "Air-gapped AI systems, secure infrastructure, network hardening, and compliance-ready deployments.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const audiences = [
  "Home Users",
  "Schools & Education",
  "Small Business",
  "Enterprise",
  "Family Offices",
  "Banks & Financial Institutions",
];

const trustPoints = [
  {
    title: "Privacy Matters",
    description: "Your data stays yours. Local-first, air-gapped capable, no cloud dependency required.",
  },
  {
    title: "Prove It Works",
    description: "Published mathematical proofs. Machine-checked correctness — not just tested, verified.",
  },
  {
    title: "Build and Handoff",
    description: "Clean, documented systems your team can own. No long-term dependency, no lock-in.",
  },
  {
    title: "Full Stack",
    description: "From hardware setup to production software — one point of contact.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        <GridArt />
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface-card/50 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
            <span className="text-xs font-medium text-muted">Accepting new clients</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]"
          >
            Build anything.
            <br />
            <span className="gradient-text">Prove it works.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
          >
            AI systems, trading infrastructure, formally verified software, and
            secure deployments. Local. Private. Mathematically proven.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 text-base text-muted/80"
          >
            And if you just want to know how to use it —{" "}
            <a
              href="mailto:admin@constantqj.com"
              className="text-accent hover:text-accent-hover font-medium transition-colors"
            >
              reach out
            </a>
            . We teach too.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/20 text-base"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-border text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-surface-card transition-colors text-base"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 mesh-gradient">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={0}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white"
          >
            What we build
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={1}
            className="mt-3 text-muted max-w-xl"
          >
            End-to-end systems across AI, finance, formal math, web, and security.
          </motion.p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i + 2}
                className="bg-surface-card rounded-xl p-7 border border-border hover:border-accent/30 transition-all hover:shadow-lg hover:shadow-accent-glow group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={0}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white"
          >
            Who we serve
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={1}
            className="mt-3 text-muted max-w-xl"
          >
            From personal projects to institutional infrastructure.
          </motion.p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {audiences.map((audience, i) => (
              <motion.div
                key={audience}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i + 2}
                className="bg-surface-card rounded-xl px-6 py-5 text-center border border-border hover:border-accent/20 transition-colors"
              >
                <span className="text-sm font-semibold text-white/90">
                  {audience}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Constant Systems */}
      <section className="py-20 md:py-28 mesh-gradient">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={0}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white"
          >
            Why Constant Systems
          </motion.h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {trustPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i + 1}
                className="flex gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={0}
            className="relative overflow-hidden rounded-2xl px-8 py-14 md:px-16 md:py-20 text-center border border-border"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-surface-card to-cyan-900/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Ready to build?
              </h2>
              <p className="mt-4 text-muted max-w-lg mx-auto">
                Tell us what you need. We&apos;ll figure out the fastest way to
                make it happen.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center bg-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/20 text-base"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
