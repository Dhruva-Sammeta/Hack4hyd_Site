import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { rules } from "@/data/rules";
import { FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Rules | Hack4Hyd",
  description: "Official rules and guidelines for the Hack4Hyd hackathon.",
};

export default function RulesPage() {
  return (
    <PageTransition>
      <section className="min-h-screen pt-28 pb-20 relative">
        <div className="particle-bg" />
        <div className="section-container relative z-10">
          <SectionHeader
            kicker="Guidelines"
            title="Official Rules"
            description="Please read these rules carefully. By participating in Hack4Hyd, you agree to abide by all of the following guidelines."
            gradient
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {rules.map((rule, index) => (
              <GlassCard key={index} className="p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-h4h-surface-light/50 border border-h4h-glass-border shadow-inner">
                    <FileText className="w-6 h-6 text-h4h-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-h4h-text">{rule.title}</h3>
                </div>
                <ul className="space-y-4 flex-grow">
                  {rule.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-h4h-text-muted">
                      <CheckCircle2 className="w-5 h-5 text-h4h-accent shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
