import { Metadata } from "next";
import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Cpu, Globe, Shield, Lightbulb, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Themes | Hack4Hyd",
  description: "Explore the official themes and tracks for the Hack4Hyd hackathon.",
};

const themes = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: Cpu,
    color: "text-h4h-primary",
    bg: "bg-h4h-primary/20",
    border: "group-hover:border-h4h-primary/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,210,255,0.15)]",
    description: "Push the boundaries of artificial intelligence. Build smart systems that learn, adapt, and solve real-world problems using cutting-edge ML techniques.",
    examples: [
      "Intelligent chatbots & assistants",
      "Computer vision applications",
      "Predictive analytics tools",
      "Natural language processing"
    ]
  },
  {
    id: "social-impact",
    title: "Social Impact & Sustainability",
    icon: Globe,
    color: "text-h4h-gold",
    bg: "bg-h4h-gold/20",
    border: "group-hover:border-h4h-gold/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(236,188,76,0.15)]",
    description: "Leverage technology to bridge divides and drive sustainable change. Create solutions that empower communities and protect our planet.",
    examples: [
      "Digital inclusion platforms",
      "Environmental monitoring tools",
      "Accessible education tech",
      "Community health solutions"
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Privacy",
    icon: Shield,
    color: "text-h4h-accent",
    bg: "bg-h4h-accent/20",
    border: "group-hover:border-h4h-accent/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,82,212,0.15)]",
    description: "Defend the digital frontier. Build tools and platforms that protect data, ensure privacy, and strengthen security infrastructure.",
    examples: [
      "Privacy-first applications",
      "Threat detection systems",
      "Secure communication tools",
      "Blockchain identity solutions"
    ]
  }
];

export default function ThemesPage() {
  return (
    <PageTransition>
      <section className="min-h-screen pt-28 pb-20 relative overflow-hidden">
        <div className="particle-bg" />
        <div className="grid-bg" />
        <div className="noise-overlay" />
        
        <div className="section-container relative z-10">
          <SectionHeader 
            title="Hackathon Themes" 
            kicker="What Will You Build?" 
            description="Choose your track, push the boundaries of technology, and build solutions that create real-world impact. Here are the three core challenges for Hack4Hyd."
            gradient 
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto mb-20 relative">
            <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-h4h-primary/20 to-transparent -translate-y-1/2 hidden md:block -z-10 blur-[2px]"></div>
            
            {themes.map((theme) => (
              <GlassCard 
                key={theme.id} 
                className={`p-8 group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 ${theme.border} ${theme.glow}`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110`}></div>
                
                <div className={`w-16 h-16 rounded-2xl ${theme.bg} flex items-center justify-center mb-8 relative z-10`}>
                  <theme.icon className={`w-8 h-8 ${theme.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{theme.title}</h3>
                <p className="text-h4h-text-muted mb-8 relative z-10 leading-relaxed">
                  {theme.description}
                </p>
                
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-4 h-4 text-h4h-text-muted" />
                    <span className="text-sm font-semibold uppercase tracking-wider text-h4h-text-muted">Ideas to explore</span>
                  </div>
                  <ul className="space-y-2">
                    {theme.examples.map((example, i) => (
                      <li key={i} className="flex gap-3 text-sm text-h4h-text-muted group-hover:text-h4h-text transition-colors duration-300">
                        <Zap className={`w-4 h-4 ${theme.color} shrink-0 mt-0.5`} />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            ))}
          </div>
          
          <div className="text-center max-w-2xl mx-auto">
            <GlassCard className="p-8 inline-block border-dashed border-h4h-primary/30 bg-h4h-surface/30">
              <h3 className="text-xl font-semibold text-white mb-2">Have a different idea?</h3>
              <p className="text-sm text-h4h-text-muted">
                While these are our core themes, we welcome all innovative solutions. If your project creates meaningful impact, we want to see it!
              </p>
            </GlassCard>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
