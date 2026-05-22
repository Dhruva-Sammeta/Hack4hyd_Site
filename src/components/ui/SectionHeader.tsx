"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  description?: string;
  centered?: boolean;
  gradient?: boolean;
}

export function SectionHeader({ kicker, title, description, centered = true, gradient = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      {kicker && (
        <span className="section-kicker mb-4 inline-block">{kicker}</span>
      )}
      <h2 className={`section-header ${gradient ? "gradient-text" : ""}`}>
        {title}
      </h2>
      {description && (
        <p className={`body-large mt-4 md:mt-6 ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
