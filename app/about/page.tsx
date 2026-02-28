"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const stats = [
  { value: "59+", label: "Projects delivered" },
  { value: "8+", label: "Broker integrations" },
  { value: "6", label: "Machine compute cluster" },
  { value: "9", label: "Proof assistants used" },
];

const capabilities = [
  {
    title: "AI & Machine Learning",
    items: [
      "Large language model deployment and fine-tuning",
      "Reinforcement learning systems",
      "Computer vision and NLP pipelines",
      "NVIDIA GPU infrastructure (consumer through DGX)",
    ],
  },
  {
    title: "Trading & Finance",
    items: [
      "Multi-broker algorithmic trading",
      "Strategy backtesting and optimization",
      "Real-time execution and monitoring",
      "Futures, equities, crypto, and options",
    ],
  },
  {
    title: "Software Engineering",
    items: [
      "Full-stack web development (React, Next.js, Node.js)",
      "API design and database architecture",
      "DevOps, CI/CD, and infrastructure automation",
      "Formal verification and mathematical proofs",
    ],
  },
  {
    title: "Infrastructure & Security",
    items: [
      "Multi-machine cluster orchestration",
      "Air-gapped and on-premise deployments",
      "Network security and hardening",
      "Docker, Tailscale, and hybrid cloud setups",
    ],
  },
];

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            About
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-4 text-lg text-gray-500 max-w-2xl leading-relaxed"
          >
            Constant Systems is a solo consulting practice. One person, full
            stack, no overhead. You work directly with the person building your
            system — from architecture to deployment.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i}
                className="bg-[var(--bg-secondary)] rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-accent">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-16 md:py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={0}
            className="max-w-3xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
              Background
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                I build AI systems, trading infrastructure, and production
                software. My work spans local LLM deployments on NVIDIA hardware,
                algorithmic trading systems integrated with 8+ brokers, and
                full-stack web applications.
              </p>
              <p>
                I operate a 6-machine compute cluster that includes NVIDIA DGX
                Spark, Mac Studio, and multiple GPU workstations — the same
                infrastructure I use for client work. This means I can prototype,
                test, and deploy systems at scale without waiting on cloud
                providers.
              </p>
              <p>
                My approach is direct: understand the problem, build the
                simplest system that solves it, and ship. No committees, no
                layers of management, no unnecessary abstraction. You talk to me,
                I build it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={0}
            className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900"
          >
            Capabilities
          </motion.h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i + 1}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {cap.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={0}
            className="bg-gray-900 rounded-2xl px-8 py-14 md:px-16 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Let&apos;s build something
            </h2>
            <p className="mt-3 text-gray-400 max-w-md mx-auto">
              Direct access to the person doing the work. No sales team, no
              account managers.
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
