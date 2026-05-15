import React from "react";

export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Glass frosted border frame */}
      <div className="absolute inset-x-[var(--pad)] top-28 bottom-10 rounded-[var(--radius)] border border-oakridge-teal/10 glass-frosted" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,48,87,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(0,48,87,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      
      {/* Glass circles */}
      <div className="absolute right-[8vw] top-[18vh] h-28 w-28 rounded-full border border-oakridge-teal/35 glass-frosted" />
      <div className="absolute bottom-[14vh] left-[8vw] h-20 w-20 rounded-full border border-oakridge-gold/25 glass-frosted" />
      
      {/* Additional glass accents */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-32 w-32 rounded-full border border-oakridge-teal/20 glass-frosted opacity-60" />
    </div>
  );
}
