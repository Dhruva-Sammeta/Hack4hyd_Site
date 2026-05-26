import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { CalendarDays, Clock, Users, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Register | Hack4Hyd 2.0",
  description: "Register for Hack4Hyd 2.0 hackathon. Secure your spot, form a team, and build the future.",
};

export default function RegisterPage() {
  return (
    <PageTransition>
      <section className="min-h-screen pt-28 pb-20 relative">
        <div className="particle-bg" />
        <div className="section-container relative z-10">
          <SectionHeader 
            title="Register for Hack4Hyd" 
            kicker="Join the Movement" 
            description="Secure your spot in the most exciting hackathon of the year. Build, learn, and win amazing prizes."
            gradient 
          />

          <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-h4h-text mb-6">Key Dates & Timeline</h3>
              
              <GlassCard className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-h4h-primary/20 flex items-center justify-center shrink-0">
                  <CalendarDays className="w-6 h-6 text-h4h-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Registration Window</h4>
                  <p className="text-h4h-text-muted mt-1">May 25 – July 20, 2026</p>
                </div>
              </GlassCard>
              
              <GlassCard className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-h4h-accent/20 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-h4h-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Problem Statement & Kickoff</h4>
                  <p className="text-h4h-text-muted mt-1">July 25, 2026 &bull; 10:00 AM IST (Online)</p>
                </div>
              </GlassCard>

              <GlassCard className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-h4h-gold/20 flex items-center justify-center shrink-0">
                  <CalendarDays className="w-6 h-6 text-h4h-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Online Submissions Close</h4>
                  <p className="text-h4h-text-muted mt-1">July 31, 2026 &bull; 11:59 PM IST</p>
                </div>
              </GlassCard>

              <GlassCard className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-h4h-primary/20 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-h4h-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Grand Finale (Physical)</h4>
                  <p className="text-h4h-text-muted mt-1">August 1, 2026 &bull; 09:30 AM - 03:30 PM</p>
                </div>
              </GlassCard>
            </div>

            <div className="h-full flex flex-col justify-center">
              <GlassCard className="p-8 text-center" gold>
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Hack?</h3>
                <p className="text-h4h-text-muted mb-8">
                  Form a team of 2-4 members, bring your innovative ideas, and let&apos;s solve real-world problems.
                </p>
                
                {/* Placeholder for Embedded Form */}
                <div className="bg-h4h-surface-light border border-h4h-glass-border rounded-xl p-12 mb-8 border-dashed flex flex-col items-center justify-center">
                  <p className="text-h4h-text-muted italic mb-2">Registration Form Placeholder</p>
                  <p className="text-sm text-h4h-text-muted/60">Embed your Typeform, Google Form, or Devfolio widget here.</p>
                </div>

                <button className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-h4h-primary to-h4h-accent text-white font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity glow-teal">
                  Register Now <ArrowRight className="w-5 h-5" />
                </button>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
