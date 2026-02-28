"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
      "Air-gapped AI systems, secure infrastructure, network hardening, and compliance-ready deployments for sensitive environments.",
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
    title: "Local-First",
    description: "Your data stays on your hardware. No cloud dependency required.",
  },
  {
    title: "Air-Gapped Capable",
    description: "Fully functional systems that work without internet access.",
  },
  {
    title: "Full Stack",
    description: "From hardware setup to production software — one point of contact.",
  },
  {
    title: "Global Reach",
    description: "Remote consulting and deployment anywhere in the world.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]"
          >
            Build anything.
            <br />
            <span className="text-accent">Run it anywhere.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed"
          >
            AI systems for work, school, home, and business. Local. Private.
            Yours. From personal setups to enterprise infrastructure — we build
            systems that run on your terms.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent-hover transition-colors text-base"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-gray-200 text-gray-700 font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-50 transition-colors text-base"
            >
              View Services
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10" />
      </section>

      {/* Services Grid */}
      <section className="bg-[var(--bg-secondary)] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={0}
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
          >
            What we build
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={1}
            className="mt-3 text-gray-500 max-w-xl"
          >
            End-to-end systems across AI, finance, web, and security.
          </motion.p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i + 2}
                className="bg-white rounded-xl p-8 border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-accent">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
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
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
          >
            Who we serve
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={1}
            className="mt-3 text-gray-500 max-w-xl"
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
                className="bg-[var(--bg-accent)] rounded-xl px-6 py-5 text-center"
              >
                <span className="text-sm font-semibold text-gray-800">
                  {audience}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Constant Systems */}
      <section className="bg-[var(--bg-secondary)] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={0}
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
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
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {point.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {point.description}
                </p>
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
            className="bg-gray-900 rounded-2xl px-8 py-14 md:px-16 md:py-20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Ready to build?
            </h2>
            <p className="mt-4 text-gray-400 max-w-lg mx-auto">
              Tell us what you need. We&apos;ll figure out the fastest way to
              make it happen.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center bg-white text-gray-900 font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors text-base"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
