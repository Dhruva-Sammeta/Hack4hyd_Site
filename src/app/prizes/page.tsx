import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { prizes } from "@/data/prizes";

export const metadata = {
  title: "Prizes | Hack4Hyd 2.0",
  description: "Checkout the amazing prizes for Hack4Hyd 2.0 winners.",
};

export default function PrizesPage() {
  const mainPrizes = prizes.filter(p => p.tier < 4);
  const specialPrizes = prizes.filter(p => p.tier === 4);

  return (
    <PageTransition>
      <section className="min-h-screen pt-28 pb-20 relative">
        <div className="particle-bg" />
        <div className="section-container relative z-10">
          <SectionHeader 
            kicker="Rewards" 
            title="Prizes & Perks" 
            description="Compete for your share of the prize pool and exclusive opportunities."
            gradient 
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainPrizes.map((prize, i) => (
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

          <div className="mt-24">
            <SectionHeader 
              title="Special Categories" 
              description="More ways to win with specialized awards"
              centered 
            />
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {specialPrizes.map((prize, i) => (
                <GlassCard key={i} className="p-6 flex flex-col items-start hover:border-h4h-accent/30 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-h4h-accent/20 flex items-center justify-center text-2xl border border-h4h-accent/30">
                      {prize.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{prize.title}</h4>
                      <div className="text-h4h-primary font-semibold">{prize.amount}</div>
                    </div>
                  </div>
                  <p className="text-sm text-h4h-text-muted">
                    {prize.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
