"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gold?: boolean;
}

export function GlassCard({ children, className = "", hover = true, gold = false }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`${gold ? "glass-gold" : "glass-card"} ${hover ? "" : "hover:transform-none hover:shadow-none"} ${className}`}
    >
      {children}
    </motion.div>
  );
}
