import React from "react";

interface TeamCardProps {
  name: string;
  role: string;
  initials: string;
  isLegacy?: boolean;
}

export function TeamCard({ name, role, initials, isLegacy = false }: TeamCardProps) {
  return (
    <div className={`team-card ${isLegacy ? 'legacy-card' : ''}`}>
      <div className="team-avatar">{initials}</div>
      <h3 className="text-xl font-bold text-h4h-text mb-1">{name}</h3>
      <p className={`text-sm font-semibold uppercase tracking-wider ${isLegacy ? 'text-h4h-gold' : 'text-h4h-primary'}`}>
        {role}
      </p>
    </div>
  );
}
