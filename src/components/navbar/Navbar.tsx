"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Venue", href: "/venue" },
  { label: "Schedule", href: "/schedule" },
  { label: "Past Event", href: "/past-event" },
  { label: "Prizes", href: "/prizes" },
  { label: "Rules", href: "/rules" },
  { label: "Judging", href: "/judging" },
  { label: "Register", href: "/register" },
  { label: "Teams", href: "/teams" },
  { label: "Contact", href: "/contact" },
];

const mobileItemVariants = {
  closed: { y: 16, opacity: 0 },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1 + i * 0.04,
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (isOpen) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Desktop + Mobile top bar ───────────────────────── */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed left-1/2 top-[calc(env(safe-area-inset-top)+0.625rem)] z-[80] w-[calc(100%-1rem)] max-w-[1320px] -translate-x-1/2 sm:top-[calc(env(safe-area-inset-top)+0.875rem)] sm:w-[calc(100%-1.75rem)]"
      >
        <div
          className={`glass-nav flex min-h-[56px] items-center justify-between gap-2 rounded-2xl px-3 py-2 transition-all duration-500 sm:min-h-[64px] sm:px-4 sm:py-2.5 lg:px-5 ${
            scrolled ? "shadow-lg shadow-black/30" : ""
          }`}
        >
          {/* Brand */}
          <Link href="/" className="group flex shrink-0 items-center gap-2">
            <Image
              src="/logo-infinity.png"
              alt="Hack4Hyd Logo"
              width={36}
              height={36}
              className="h-8 w-8 shrink-0 rounded-xl drop-shadow-md sm:h-9 sm:w-9"
              priority
            />
            <span className="text-[clamp(0.7rem,3.2vw,0.9rem)] font-extrabold uppercase tracking-[0.08em] text-h4h-text transition-colors duration-300 group-hover:text-h4h-primary">
              HACK4HYD <span className="text-h4h-primary">2.0</span>
            </span>
          </Link>

          {/* Desktop links — horizontal scrollable */}
          <div className="hidden lg:flex items-center gap-0.5 overflow-x-auto scrollbar-none">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative whitespace-nowrap px-2.5 py-2 text-[11.5px] font-semibold tracking-wide transition-colors duration-300 group ${
                    isActive
                      ? "text-h4h-text"
                      : "text-h4h-text-muted hover:text-h4h-text"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 h-[2px] w-4/5 -translate-x-1/2 rounded-full bg-h4h-primary"
                      style={{ boxShadow: "0 0 8px rgba(78,195,205,0.5)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-h4h-primary/40 transition-all duration-300 group-hover:w-4/5" />
                </Link>
              );
            })}
          </div>

          {/* Hamburger */}
          <button
            onClick={toggle}
            className="group relative z-[90] flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] rounded-xl border border-h4h-glass-border bg-h4h-surface/40 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 4, backgroundColor: "#4EC3CD" } : { rotate: 0, y: 0, backgroundColor: "#E8EDF5" }}
              transition={{ duration: 0.25 }}
              className="h-[1.5px] w-5 origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1, backgroundColor: "#E8EDF5" }}
              transition={{ duration: 0.15 }}
              className="h-[1.5px] w-5"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -4, backgroundColor: "#4EC3CD" } : { rotate: 0, y: 0, backgroundColor: "#E8EDF5" }}
              transition={{ duration: 0.25 }}
              className="h-[1.5px] w-5 origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile drawer overlay ──────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[70] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-h4h-ink/75 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: -10, clipPath: "inset(0 0 100% 0 round 20px)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0 round 20px)" }}
              exit={{ opacity: 0, y: -8, clipPath: "inset(0 0 100% 0 round 20px)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="glass-liquid absolute inset-x-2 bottom-2 top-[76px] flex flex-col overflow-y-auto rounded-2xl p-5"
            >
              {/* Mobile brand */}
              <div className="mb-6 flex items-center gap-3 border-b border-h4h-glass-border pb-5">
                <Image
                  src="/logo-infinity.png"
                  alt="Hack4Hyd"
                  width={48}
                  height={48}
                  className="h-11 w-11 shrink-0 rounded-2xl"
                />
                <div>
                  <h3 className="text-lg font-extrabold uppercase tracking-wider text-h4h-text leading-tight">
                    Hack4Hyd
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-h4h-primary">
                    Season 2.0
                  </p>
                </div>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-1">
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
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-semibold tracking-wide transition-all duration-300 ${
                        pathname === item.href
                          ? "bg-h4h-primary/10 text-h4h-primary"
                          : "text-h4h-text hover:bg-h4h-surface-light hover:text-h4h-primary"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300 ${
                          pathname === item.href
                            ? "bg-h4h-primary scale-100"
                            : "bg-h4h-text-muted scale-75 opacity-40"
                        }`}
                      />
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Event date pill */}
              <div className="mt-auto pt-5">
                <div className="rounded-xl border border-h4h-primary/15 bg-h4h-surface-light/50 p-4">
                  <p className="text-sm font-bold text-h4h-text">August 1, 2026</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.15em] text-h4h-primary">
                    Hyderabad
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
