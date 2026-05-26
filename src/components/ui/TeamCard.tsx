"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TeamMember } from "@/data/team";
import { GlassCard } from "./GlassCard";
import { X } from "lucide-react";

interface TeamCardProps {
  member: TeamMember;
  gold?: boolean;
}

export function TeamCard({ member, gold = false }: TeamCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Grid Card (Resting State) */}
      <motion.div
        layoutId={`card-${member.name}`}
        onClick={() => setIsExpanded(true)}
        className="cursor-pointer h-full"
      >
        <GlassCard gold={gold} className="team-card flex flex-col items-center h-full hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl hover:shadow-h4h-primary/10">
          <motion.div layoutId={`image-${member.name}`} className="team-avatar relative overflow-hidden flex items-center justify-center">
            {member.image ? (
              <Image 
                src={member.image} 
                alt={`${member.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 150px, 150px"
              />
            ) : (
              <span className="text-2xl font-bold">{member.initials}</span>
            )}
          </motion.div>
          
          <motion.h3 layoutId={`name-${member.name}`} className="text-xl font-heading font-bold text-h4h-text mb-1">
            {member.name}
          </motion.h3>
          
          <motion.p layoutId={`role-${member.name}`} className="text-h4h-text-muted font-medium text-center">
            {member.role}
          </motion.p>
        </GlassCard>
      </motion.div>

      {/* Expanded Modal State */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
            />
            
            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                layoutId={`card-${member.name}`}
                className="w-full max-w-lg pointer-events-auto"
              >
                <GlassCard gold={gold} className="relative p-8 md:p-12 flex flex-col items-center text-center shadow-2xl">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors text-h4h-text-muted hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <motion.div layoutId={`image-${member.name}`} className="w-40 h-40 rounded-full relative overflow-hidden flex items-center justify-center mb-6 ring-4 ring-h4h-primary/20 shadow-lg">
                    {member.image ? (
                      <Image 
                        src={member.image} 
                        alt={`${member.name}`}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    ) : (
                      <span className="text-5xl font-bold text-white/50">{member.initials}</span>
                    )}
                  </motion.div>

                  <motion.h3 layoutId={`name-${member.name}`} className="text-3xl font-heading font-bold text-white mb-2">
                    {member.name}
                  </motion.h3>
                  
                  <motion.p layoutId={`role-${member.name}`} className={`font-medium text-lg mb-8 ${gold ? 'text-h4h-gold' : 'text-h4h-primary'}`}>
                    {member.role}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="text-h4h-text-muted leading-relaxed"
                  >
                    <p>
                      Coming soon! Stay tuned to learn more about {member.name}&apos;s journey, expertise, and contribution to making Hack4Hyd a massive success.
                    </p>
                  </motion.div>
                </GlassCard>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
