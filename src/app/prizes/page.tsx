import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { prizes } from "@/data/prizes";

export const metadata = {
  title: "Prizes | Hack4Hyd",
  description: "Checkout the amazing prizes for Hack4Hyd winners.",
};

export default function PrizesPage() {
  return (
    <PageTransition>
      <section className="min-h-screen pt-28 pb-20 relative">
        <div className="particle-bg" />
        <div className="grid-bg" />
        <div className="noise-overlay" />
        <div className="section-container relative z-10">
          <SectionHeader 
            kicker="Rewards" 
            title="Prizes & Perks" 
            description="Compete for your share of the ₹35,000 prize pool."
            gradient 
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prizes.map((prize, i) => (
              <GlassCard 
                key={i} 
                className={`relative flex flex-col items-center text-center p-8 ${prize.tier === 1 ? 'md:-mt-8 border-h4h-gold/30' : ''}`}
                gold={prize.tier === 1}
              >
                {prize.tier === 1 && (
                  <div className="absolute -top-6 bg-h4h-gold text-h4h-surface font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(236,188,76,0.5)]">
                    Grand Prize
                  </div>
                )}
                
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-6 ${prize.tier === 1 ? 'bg-gradient-to-br from-h4h-gold to-yellow-600 shadow-[0_0_30px_rgba(236,188,76,0.3)]' : 'bg-h4h-surface-light border border-h4h-glass-border'}`}>
                  {prize.icon}
                </div>
                
                <h3 className={`text-2xl font-bold mb-2 ${prize.tier === 1 ? 'text-h4h-gold' : 'text-h4h-text'}`}>
                  {prize.rank}
                </h3>
                <h4 className="text-xl text-h4h-primary font-medium mb-4">{prize.title}</h4>
                <div className="text-4xl font-black mb-6 tracking-tight">{prize.amount}</div>
                <p className="text-h4h-text-muted mt-auto">
                  {prize.description}
                </p>
              </GlassCard>
            ))}
          </div>

          {/* Total Prize Pool */}
          <div className="mt-20 text-center">
            <GlassCard className="p-8 inline-block max-w-lg mx-auto">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-h4h-primary mb-2">Total Prize Pool</p>
              <p className="text-5xl font-black gradient-text">₹35,000</p>
              <p className="text-h4h-text-muted mt-3 text-sm">Plus certificates and exclusive perks for all participants</p>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
