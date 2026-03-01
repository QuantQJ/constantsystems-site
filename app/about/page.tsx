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

const stats = [
  { value: "59+", label: "Projects delivered" },
  { value: "8+", label: "Broker integrations" },
  { value: "Local", label: "Private infrastructure" },
  { value: "9", label: "Proof assistants" },
  { value: "3", label: "Published proof languages" },
];

const capabilities = [
  {
    title: "AI & Machine Learning",
    items: [
      "Large language model deployment and fine-tuning",
      "Reinforcement learning systems",
      "Computer vision and NLP pipelines",
      "Proprietary models that beat public baselines",
    ],
  },
  {
    title: "Formal Verification",
    items: [
      "Published proofs in Lean 4, Coq, and Isabelle/HOL",
      "Machine-checked mathematical theorems",
      "Algorithm correctness verification",
      "Cross-verification across 9 proof assistants",
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
      "Type-safe systems with dependent types",
    ],
  },
  {
    title: "Infrastructure & Security",
    items: [
      "On-premise and local infrastructure deployment",
      "Air-gapped and on-premise deployments",
      "Network security and hardening",
      "Containerized and hybrid cloud setups",
    ],
  },
];

export default function About() {
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
            About
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-4 text-lg text-muted max-w-2xl leading-relaxed"
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i}
                className="bg-surface-card rounded-xl p-6 text-center border border-border"
              >
                <div className="text-3xl md:text-4xl font-extrabold gradient-text">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-16 md:py-20 mesh-gradient">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={0}
            className="max-w-3xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Background
            </h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              <p>
                I build AI systems, trading infrastructure, formally verified
                software, and production applications. I train and deploy
                proprietary local models that beat public baselines — running
                entirely on your hardware, not in someone else&apos;s cloud.
              </p>
              <p>
                I build the system you need, on the computer you own. Whether
                that&apos;s a single workstation or a multi-node cluster, the
                result is yours — private, self-contained, and fully
                operational without an internet connection if that&apos;s what
                you need.
              </p>
              <p>
                Every system I build is designed to be handed off. You get
                clean, documented, production-ready infrastructure that your
                team can own and operate — no long-term dependency on me.
              </p>
              <p>
                When software correctness matters, I don&apos;t just test it — I
                prove it. Published, machine-checked mathematical proofs across
                multiple proof assistants.
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
            className="text-2xl md:text-3xl font-bold tracking-tight text-white"
          >
            Capabilities
          </motion.h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i + 1}
                className="bg-surface-card rounded-xl p-6 border border-border"
              >
                <h3 className="text-lg font-semibold text-white">
                  {cap.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted">{item}</span>
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
            className="relative overflow-hidden rounded-2xl px-8 py-14 md:px-16 text-center border border-border"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-surface-card to-purple-500/5" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                Let&apos;s build something
              </h2>
              <p className="mt-3 text-muted max-w-md mx-auto">
                Direct access to the person doing the work. No sales team, no
                account managers.
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
