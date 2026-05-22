"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { judgingCriteria } from "@/data/judging";
import { Target, Lightbulb, Code2, Layout, Presentation, Rocket } from "lucide-react";

const getIcon = (title: string) => {
  if (title.includes("Innovation")) return <Lightbulb className="w-6 h-6 text-h4h-primary" />;
  if (title.includes("Complexity")) return <Code2 className="w-6 h-6 text-h4h-accent" />;
  if (title.includes("Design")) return <Layout className="w-6 h-6 text-h4h-primary" />;
  if (title.includes("Impact")) return <Rocket className="w-6 h-6 text-h4h-accent" />;
  if (title.includes("Presentation")) return <Presentation className="w-6 h-6 text-h4h-gold" />;
  return <Target className="w-6 h-6 text-h4h-primary" />;
};

export default function JudgingClient() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Calculate cumulative progress up to current index
  const cumulativeProgress = judgingCriteria
    .slice(0, activeIndex + 1)
    .reduce((sum, item) => sum + item.weight, 0);

  return (
    <PageTransition>
      <section className="min-h-screen pt-28 pb-32 relative">
        <div className="particle-bg" />
        <div className="section-container relative z-10">
          <SectionHeader
            kicker="Evaluation"
            title="Judging Criteria"
            description="Our panel of expert judges will evaluate your projects based on the following weighted criteria. Keep these in mind while building!"
            gradient
          />
          
          <div className="max-w-4xl mx-auto relative mt-16">
            
            {/* Sticky Progress Bar */}
            <div className="sticky top-[88px] z-50 mb-12">
              <div className="glass-nav rounded-2xl p-4 sm:p-6 shadow-xl border border-h4h-primary/30 relative overflow-hidden backdrop-blur-xl">
                
                {/* Progress Fill Background */}
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-h4h-accent to-h4h-primary z-0 border-r-2 border-white/20 shadow-[0_0_15px_rgba(0,210,255,0.4)]"
                  initial={{ width: "25%" }}
                  animate={{ width: `${cumulativeProgress}%` }}
                  transition={{ type: "spring", stiffness: 60, damping: 15 }}
                />

                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 w-full"
                  >
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <div className="p-2 bg-h4h-surface-light/80 rounded-lg border border-white/10 shadow-sm">
                        {getIcon(judgingCriteria[activeIndex].title)}
                      </div>
                      
                      <span className="font-bold text-white text-lg truncate drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        {judgingCriteria[activeIndex].title}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
                      <div className="flex items-center gap-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        <span className="text-sm font-medium text-white/90">Weight:</span>
                        <span className="text-lg font-black text-h4h-gold">
                          +{judgingCriteria[activeIndex].weight}%
                        </span>
                      </div>
                      
                      <div className="h-8 w-px bg-white/20 hidden sm:block" />

                      <div className="flex items-center gap-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        <span className="text-sm font-medium text-white/90">Total:</span>
                        <span className="text-xl font-black text-white">
                          {cumulativeProgress}%
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Criteria Cards */}
            <div className="space-y-24 pt-4">
              {judgingCriteria.map((criterion, index) => (
                <motion.div
                  key={index}
                  onViewportEnter={() => setActiveIndex(index)}
                  viewport={{ margin: "-40% 0px -40% 0px" }}
                  className="scroll-mt-40"
                >
                  <GlassCard className="p-6 md:p-10 relative overflow-hidden group shadow-lg">
                    <div className="absolute top-0 right-0 p-4 md:p-6 opacity-5 transition-opacity duration-500 pointer-events-none">
                      <span className="text-8xl md:text-9xl font-black text-white">{criterion.weight}%</span>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-h4h-surface-light/80 border border-h4h-glass-border shadow-inner">
                            {getIcon(criterion.title)}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-h4h-text">{criterion.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-lg md:text-xl text-h4h-text-muted mb-8 leading-relaxed max-w-3xl">
                        {criterion.description}
                      </p>
                      
                      <div className="bg-h4h-surface-light/50 rounded-2xl p-6 border border-h4h-glass-border">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-h4h-primary mb-4">Pro Tips</h4>
                        <ul className="space-y-3">
                          {criterion.tips.map((tip, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-base text-h4h-text-muted">
                              <span className="text-h4h-primary mt-1 shrink-0">✦</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
