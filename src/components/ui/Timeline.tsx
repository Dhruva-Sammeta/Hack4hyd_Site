import React from "react";
import { motion } from "framer-motion";

export function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative pl-8 md:pl-0 py-8">
      <div className="timeline-line" />
      <div className="space-y-12 md:space-y-24">
        {children}
      </div>
    </div>
  );
}

interface TimelineItemProps {
  time: string;
  title: string;
  description: string;
  type: string;
  index: number;
}

export function TimelineItem({ time, title, description, type, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start md:items-center`}
    >
      <div className="timeline-dot mt-1.5 md:mt-0" />
      
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-12 lg:pl-16' : 'md:pr-12 lg:pr-16 md:text-right'}`}>
        <div className={`inline-block px-3 py-1 mb-3 rounded-full text-xs font-bold uppercase tracking-wider border
          ${type === 'ceremony' ? 'border-h4h-accent/30 bg-h4h-accent/10 text-h4h-accent-light' : 
            type === 'hacking' ? 'border-h4h-primary/30 bg-h4h-primary/10 text-h4h-primary' :
            type === 'judging' ? 'border-h4h-gold/30 bg-h4h-gold/10 text-h4h-gold' :
            'border-h4h-text-muted/30 bg-h4h-surface-light text-h4h-text-muted'}`}
        >
          {time}
        </div>
        <h3 className="text-xl font-bold mb-2 text-h4h-text">{title}</h3>
        <p className="text-h4h-text-muted">{description}</p>
      </div>
    </motion.div>
  );
}
