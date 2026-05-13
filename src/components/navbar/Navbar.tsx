"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Committees", href: "/committees" },
  { label: "Secretariat", href: "/secretariat" },
  { label: "Resources", href: "/resources" },
  { label: "Register", href: "/register" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const navbarVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 },
  },
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
  open: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const mobileItemVariants = {
  closed: { y: 20, opacity: 0 },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.15 + i * 0.06,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const pathname = usePathname();

  return (
    <>
      {/* ── Top nav bar ─────────────────────────────────────── */}
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-5 left-1/2 -translate-x-1/2 z-[60] w-[calc(100%-2rem)] max-w-5xl"
      >
        <div className="glass-liquid glass-hover rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-500">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <Image
              src="/favicon.svg"
              alt="Draft MUN Crest"
              width={32}
              height={32}
              className="drop-shadow-md"
              priority
            />
            <span className="text-oakridge-warm-white font-black text-sm tracking-[0.08em] uppercase group-hover:text-oakridge-teal transition-colors duration-300 sm:text-[15px]">
              MUN <span className="text-oakridge-teal">XVI</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-3 py-2 text-[13px] font-semibold transition-colors duration-300 group ${
                  pathname === item.href ? "text-oakridge-warm-white" : "text-oakridge-muted hover:text-oakridge-warm-white"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-oakridge-teal rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-oakridge-teal/50 group-hover:w-4/5 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          {/* Hamburger - mobile */}
          <button
            onClick={toggle}
            className="md:hidden relative w-11 h-11 flex flex-col items-center justify-center gap-1.5 group overflow-visible"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-[1.5px] bg-oakridge-warm-white/80 group-hover:bg-oakridge-teal transition-colors duration-300 origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-[1.5px] bg-oakridge-warm-white/80 group-hover:bg-oakridge-teal transition-colors duration-300"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-[1.5px] bg-oakridge-warm-white/80 group-hover:bg-oakridge-teal transition-colors duration-300 origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile fullscreen overlay ───────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[55] flex flex-col items-center justify-center md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-oakridge-navy/98 backdrop-blur-2xl" />

            {/* Nav items — centered in viewport */}
            <nav className="relative z-10 flex flex-col items-center gap-5">
              {/* Mobile brand */}
              <div className="mb-6 flex flex-col items-center gap-2">
                <Image
                  src="/favicon.svg"
                  alt="Draft MUN"
                  width={48}
                  height={48}
                  className="drop-shadow-xl"
                />
                <span className="text-oakridge-warm-white/60 font-black text-sm tracking-[0.15em] uppercase">
                  Chapter XVI
                </span>
              </div>

              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  variants={mobileItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-center text-2xl font-bold tracking-wide transition-colors duration-300 ${
                      pathname === item.href
                        ? "text-oakridge-teal"
                        : "text-oakridge-warm-white hover:text-oakridge-teal"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
