"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CommitteeModal from "@/components/ui/CommitteeModal";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import { committeesData } from "@/data/committees";

const typeOrder = [
  "General Assembly",
  "Crisis / Specialized",
  "Crisis",
  "Regional Body",
  "ECOSOC",
  "Specialized Agency",
  "Specialized",
  "Legal",
  "Press",
];

const typeGroups = committeesData.reduce((acc, committee) => {
  if (!acc[committee.type]) acc[committee.type] = [];
  acc[committee.type].push(committee);
  return acc;
}, {} as Record<string, typeof committeesData>);

export default function CommitteesContent() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const activeCommittee = activeSlug
    ? committeesData.find((committee) => committee.slug === activeSlug) ?? null
    : null;
  const filteredCommittees = activeFilter
    ? committeesData.filter((committee) => committee.type === activeFilter)
    : committeesData;

  useEffect(() => {
    if (!activeSlug) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeSlug]);

  return (
    <div className="site-section page-safe min-h-screen pb-20 sm:pb-24">
      <BackgroundGrid />

      <div className="relative z-10 mx-auto max-w-[var(--content)] px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="section-kicker">Chapter XVI / {committeesData.length} Committees</p>
              <h1 className="display-title">Conference committees.</h1>
            </div>
            <p className="body-large max-w-md md:text-right">
              From General Assembly to fast-paced crisis simulations, discover the full committee slate for this year&apos;s conference.
            </p>
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveFilter(null)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-bold transition-all hover:bg-oakridge-teal hover:border-oakridge-teal hover:text-oakridge-navy ${activeFilter === null ? "bg-oakridge-teal border-oakridge-teal text-oakridge-navy" : "border-oakridge-teal/20 bg-oakridge-paper/50 text-oakridge-muted"}`}
            >
              All
              <span className={activeFilter === null ? "text-oakridge-navy/70" : "text-oakridge-teal"}>{committeesData.length}</span>
            </button>
            {typeOrder.filter((type) => typeGroups[type]).map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(activeFilter === type ? null : type)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-bold transition-all hover:bg-oakridge-teal hover:border-oakridge-teal hover:text-oakridge-navy ${activeFilter === type ? "bg-oakridge-teal border-oakridge-teal text-oakridge-navy" : "border-oakridge-teal/20 bg-oakridge-paper/50 text-oakridge-muted"}`}
              >
                {type}
                <span className={activeFilter === type ? "text-oakridge-navy/70" : "text-oakridge-teal"}>{typeGroups[type].length}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Committee List */}
        <div className="glass-liquid overflow-hidden rounded-[28px]">
          {filteredCommittees.map((committee, index) => {
            const number = String(index + 1).padStart(2, "0");
            const isLast = index === filteredCommittees.length - 1;

            return (
              <motion.button
                key={committee.slug}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.42, delay: Math.min(index * 0.018, 0.16), ease: [0.22, 1, 0.36, 1] }}
                type="button"
                onClick={() => setActiveSlug(committee.slug)}
                className={`group teal-hover-surface relative grid w-full min-h-[132px] grid-cols-[42px_1fr] items-center gap-4 px-4 py-5 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oakridge-teal/70 sm:grid-cols-[56px_1fr_auto] sm:px-6 sm:py-6 md:grid-cols-[64px_58px_minmax(180px,0.42fr)_1fr_auto] md:gap-6 ${!isLast ? "border-b border-oakridge-teal/10" : ""}`}
              >
                <span className="font-mono text-sm font-black text-oakridge-gold transition-colors duration-300 group-hover:text-oakridge-ink">
                  {number}.
                </span>
                <span className="hidden text-lg font-black italic tracking-wide text-oakridge-teal/40 transition-colors duration-300 group-hover:text-oakridge-ink/55 md:block">
                  {committee.symbol}
                </span>

                <div className="min-w-0">
                  <p className="mb-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-oakridge-dark-teal transition-colors duration-300 group-hover:text-oakridge-ink/75">
                    {committee.type}
                  </p>
                  <h3 className="font-sans text-2xl font-black leading-none tracking-[-0.04em] text-oakridge-warm-white transition-colors duration-300 group-hover:text-oakridge-ink md:text-4xl">
                    {committee.name}
                  </h3>
                  <p className="mt-1 text-xs text-oakridge-muted transition-colors duration-300 group-hover:text-oakridge-ink/70 md:hidden">
                    {committee.fullName}
                  </p>
                </div>

                <div className="col-start-2 hidden min-w-0 md:col-start-auto md:block">
                  <p className="text-sm leading-relaxed text-oakridge-muted transition-colors duration-300 group-hover:text-oakridge-ink/78">
                    {committee.fullName}
                  </p>
                  <p className="mt-1 line-clamp-1 text-xs text-oakridge-teal/60 transition-colors duration-300 group-hover:text-oakridge-ink/70">
                    Agenda: {committee.agenda}
                  </p>
                </div>

                <span className="hidden rounded-full border border-oakridge-teal/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-oakridge-teal transition-colors duration-300 group-hover:border-oakridge-ink/30 group-hover:text-oakridge-ink sm:inline-flex">
                  View
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <CommitteeModal committee={activeCommittee} onClose={() => setActiveSlug(null)} />
    </div>
  );
}
