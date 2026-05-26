import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Users, Code, Zap, Globe } from "lucide-react";

export const metadata = {
  title: "Past Event | Hack4Hyd 2.0",
  description: "A look back at the incredible innovations and projects from Hack4Hyd 1.0.",
};

const stats = [
  { label: "Hackers", value: "200+", icon: Users },
  { label: "Projects Built", value: "50+", icon: Code },
  { label: "Hours of Coding", value: "24", icon: Zap },
  { label: "Institutions", value: "15+", icon: Globe },
];

export default function PastEventPage() {
  return (
    <PageTransition>
      <section className="min-h-screen pt-28 pb-20 relative">
        <div className="particle-bg" />
        <div className="section-container relative z-10">
          <SectionHeader 
            kicker="Legacy" 
            title="Hack4Hyd 1.0 Recap" 
            description="Our inaugural hackathon brought together hundreds of brilliant minds to solve real-world problems. Here is a glimpse of what we achieved."
            gradient
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16 mb-24">
            {stats.map((stat, i) => (
              <GlassCard key={i} className="p-6 text-center group">
                <div className="w-12 h-12 mx-auto rounded-full bg-h4h-primary/10 flex items-center justify-center text-h4h-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-black text-h4h-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-h4h-text-muted uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </GlassCard>
            ))}
          </div>
          
          <div className="mt-20">
            <SectionHeader 
              title="Gallery" 
              description="Moments from our previous edition"
              centered
            />
            
            {/* Photo Gallery Placeholder Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
              <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden glass relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-h4h-surface-light to-h4h-surface flex flex-col items-center justify-center text-h4h-text-muted border border-h4h-glass-border">
                  <span className="text-4xl mb-2 opacity-50">📸</span>
                  <span className="font-medium tracking-wide">Main Event Hall</span>
                </div>
                <div className="absolute inset-0 bg-h4h-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="rounded-xl overflow-hidden glass relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-h4h-surface-light to-h4h-surface flex flex-col items-center justify-center text-h4h-text-muted border border-h4h-glass-border">
                  <span className="text-3xl mb-2 opacity-50">🏆</span>
                  <span className="font-medium tracking-wide">Prize Distribution</span>
                </div>
                <div className="absolute inset-0 bg-h4h-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="rounded-xl overflow-hidden glass relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-h4h-surface-light to-h4h-surface flex flex-col items-center justify-center text-h4h-text-muted border border-h4h-glass-border">
                  <span className="text-3xl mb-2 opacity-50">💻</span>
                  <span className="font-medium tracking-wide">Team Coding</span>
                </div>
                <div className="absolute inset-0 bg-h4h-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="rounded-xl overflow-hidden glass relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-h4h-surface-light to-h4h-surface flex flex-col items-center justify-center text-h4h-text-muted border border-h4h-glass-border">
                  <span className="text-3xl mb-2 opacity-50">🍕</span>
                  <span className="font-medium tracking-wide">Food & Networking</span>
                </div>
                <div className="absolute inset-0 bg-h4h-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="md:col-span-2 rounded-xl overflow-hidden glass relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-h4h-surface-light to-h4h-surface flex flex-col items-center justify-center text-h4h-text-muted border border-h4h-glass-border">
                  <span className="text-3xl mb-2 opacity-50">🎤</span>
                  <span className="font-medium tracking-wide">Workshops & Speakers</span>
                </div>
                <div className="absolute inset-0 bg-h4h-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
