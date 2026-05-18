import React from "react";

export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(48,205,215,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(48,205,215,0.032)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30 sm:bg-[size:72px_72px]" />
      <div className="absolute inset-x-4 bottom-8 top-[var(--nav-safe)] rounded-[2rem] border border-oakridge-teal/10 sm:inset-x-[var(--pad)] sm:bottom-10 sm:rounded-[var(--radius)]" />
      <div className="absolute left-4 top-[var(--nav-safe)] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-oakridge-teal/45 bg-oakridge-deep sm:left-[var(--pad)] sm:block" />
      <div className="absolute right-4 top-[var(--nav-safe)] hidden h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-full border border-oakridge-teal/45 bg-oakridge-deep sm:right-[var(--pad)] sm:block" />
      <div className="absolute bottom-10 left-[var(--pad)] hidden h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full border border-oakridge-gold/45 bg-oakridge-deep sm:block" />
      <div className="absolute bottom-10 right-[var(--pad)] hidden h-3 w-3 translate-x-1/2 translate-y-1/2 rounded-full border border-oakridge-gold/45 bg-oakridge-deep sm:block" />
    </div>
  );
}
