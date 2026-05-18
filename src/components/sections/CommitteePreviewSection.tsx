"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { committeesData } from "@/data/committees";

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function CommitteePreviewSection() {
  const featured = committeesData.slice(0, 8);

  return (
    <section className="site-section py-24 sm:py-28 md:py-32">
      <div className="mx-auto max-w-[var(--content)] px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <motion.div variants={itemVariants} className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker mb-2">19 Committees</p>
              <h2 className="font-sans text-3xl font-black tracking-[-0.04em] text-oakridge-warm-white md:text-5xl">
                Find your committee.
              </h2>
            </div>
            <Link
              href="/committees"
              className="inline-flex items-center gap-2 text-sm font-bold text-oakridge-teal transition-colors hover:text-oakridge-light-teal"
            >
              View all committees
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-liquid overflow-hidden rounded-[28px]">
            {featured.map((committee, index) => (
              <Link
                key={committee.slug}
                href={`/committees/${committee.slug}`}
                className={`group teal-hover-surface relative grid min-h-[116px] grid-cols-[36px_1fr_auto] items-center gap-4 px-4 py-5 transition-colors duration-300 sm:grid-cols-[48px_56px_minmax(160px,0.42fr)_1fr_auto] sm:px-6 ${index < featured.length - 1 ? "border-b border-oakridge-teal/10" : ""}`}
              >
                <span className="font-mono text-xs font-black text-oakridge-gold transition-colors duration-300 group-hover:text-oakridge-ink">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                <span className="hidden text-lg font-black italic tracking-wide text-oakridge-teal/40 transition-colors duration-300 group-hover:text-oakridge-ink/55 sm:block">
                  {committee.symbol}
                </span>
                <div className="min-w-0">
                  <p className="mb-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-oakridge-dark-teal transition-colors duration-300 group-hover:text-oakridge-ink/75">
                    {committee.type}
                  </p>
                  <h3 className="font-sans text-xl font-black leading-none text-oakridge-warm-white transition-colors duration-300 group-hover:text-oakridge-ink sm:text-2xl">
                    {committee.name}
                  </h3>
                </div>
                <p className="hidden truncate text-sm text-oakridge-muted transition-colors duration-300 group-hover:text-oakridge-ink/72 sm:block">
                  {committee.fullName}
                </p>
                <span className="text-sm font-black uppercase tracking-[0.16em] text-oakridge-teal transition-colors duration-300 group-hover:text-oakridge-ink">
                  &rarr;
                </span>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
