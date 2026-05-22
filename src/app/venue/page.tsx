import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { MapPin, Navigation, Bus, Train, Car } from "lucide-react";

export const metadata = {
  title: "Venue | Hack4Hyd 2.0",
  description: "Information about the Hack4Hyd 2.0 hackathon venue in Hyderabad.",
};

export default function VenuePage() {
  return (
    <PageTransition>
      <section className="min-h-screen pt-28 pb-20 relative">
        <div className="particle-bg" />
        <div className="section-container relative z-10">
          <SectionHeader
            title="The Venue"
            kicker="Where It Happens"
            description="Join us in the heart of Hyderabad for 48 hours of innovation, collaboration, and building the future."
            gradient
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <GlassCard className="flex flex-col h-full p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MapPin size={120} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-h4h-text z-10">Hyderabad, India</h3>
              <div className="text-h4h-primary text-xl mb-6 font-semibold z-10">Venue TBA</div>
              
              <div className="space-y-4 text-h4h-text-muted mt-auto z-10">
                <p>
                  We're securing a world-class venue in Hyderabad that provides the perfect environment for a 48-hour hackathon.
                </p>
                <p>
                  Expect high-speed Wi-Fi, comfortable working spaces, sleeping areas, and plenty of power outlets for everyone.
                </p>
                <div className="mt-6 p-4 rounded-lg bg-h4h-surface-light border border-h4h-glass-border">
                  <p className="text-sm font-medium text-h4h-text">Full address will be announced to accepted participants.</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="h-full min-h-[400px] flex items-center justify-center relative p-0 overflow-hidden">
              <div className="absolute inset-0 bg-h4h-surface-light opacity-50"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
              <div className="flex flex-col items-center justify-center z-10 p-8 text-center space-y-4">
                <div className="p-4 rounded-full bg-h4h-surface border border-h4h-glass-border glow-teal mb-2">
                  <MapPin className="text-h4h-primary" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-h4h-text">Map Available Soon</h4>
                <p className="text-h4h-text-muted max-w-sm">
                  The interactive map will be available once the venue is officially announced.
                </p>
              </div>
            </GlassCard>
          </div>

          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold mb-8 text-h4h-text flex items-center gap-3">
              <Navigation className="text-h4h-primary" />
              Getting There
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-h4h-surface-light border border-h4h-glass-border flex flex-col items-start gap-4 hover:border-h4h-primary transition-colors duration-300">
                <div className="p-3 rounded-lg bg-h4h-surface text-h4h-primary">
                  <Car size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-h4h-text text-lg mb-2">By Car / Cab</h4>
                  <p className="text-h4h-text-muted text-sm">
                    Detailed driving directions and parking information will be provided. Rideshare options (Uber/Ola) are widely available across Hyderabad.
                  </p>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-h4h-surface-light border border-h4h-glass-border flex flex-col items-start gap-4 hover:border-h4h-primary transition-colors duration-300">
                <div className="p-3 rounded-lg bg-h4h-surface text-h4h-primary">
                  <Train size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-h4h-text text-lg mb-2">By Metro</h4>
                  <p className="text-h4h-text-muted text-sm">
                    Hyderabad Metro connects major parts of the city. The nearest metro station details will be shared alongside the venue announcement.
                  </p>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-h4h-surface-light border border-h4h-glass-border flex flex-col items-start gap-4 hover:border-h4h-primary transition-colors duration-300">
                <div className="p-3 rounded-lg bg-h4h-surface text-h4h-primary">
                  <Bus size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-h4h-text text-lg mb-2">By Bus</h4>
                  <p className="text-h4h-text-muted text-sm">
                    TSRTC bus routes connect the entire city. We will provide information on the closest bus stops once the venue is finalized.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </PageTransition>
  );
}
