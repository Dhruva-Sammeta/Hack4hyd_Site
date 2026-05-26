import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Users, Search, MessageSquare, Handshake, Zap } from "lucide-react";

export const metadata = {
  title: "Teams | Hack4Hyd 2.0",
  description: "Learn about team formation and find teammates for Hack4Hyd 2.0 hackathon.",
};

export default function TeamsPage() {
  return (
    <PageTransition>
      <section className="min-h-screen pt-28 pb-20 relative">
        <div className="particle-bg" />
        <div className="section-container relative z-10">
          <SectionHeader 
            title="Team Formation" 
            kicker="Connect & Collaborate" 
            description="Great ideas are built by great teams. Find your co-founders, hackers, and designers."
            gradient 
          />

          <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-5xl mx-auto mb-20">
            <GlassCard className="p-8">
              <div className="w-14 h-14 rounded-2xl bg-h4h-primary/20 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-h4h-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Team Rules</h3>
              <ul className="space-y-4 text-h4h-text-muted">
                <li className="flex gap-3">
                  <Zap className="w-5 h-5 text-h4h-primary shrink-0 mt-0.5" />
                  <span>Teams must consist of <strong>2 to 4 members</strong>. Solo participation is not allowed.</span>
                </li>
                <li className="flex gap-3">
                  <Zap className="w-5 h-5 text-h4h-primary shrink-0 mt-0.5" />
                  <span>Inter-college teams are permitted and encouraged.</span>
                </li>
                <li className="flex gap-3">
                  <Zap className="w-5 h-5 text-h4h-primary shrink-0 mt-0.5" />
                  <span>Each team must appoint a team leader as the primary point of contact.</span>
                </li>
                <li className="flex gap-3">
                  <Zap className="w-5 h-5 text-h4h-primary shrink-0 mt-0.5" />
                  <span>Changes to team members are allowed until the registration deadline.</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8" gold>
              <div className="w-14 h-14 rounded-2xl bg-h4h-gold/20 flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-h4h-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Looking for Teammates?</h3>
              <p className="text-h4h-text-muted mb-6">
                Don&apos;t have a full team yet? Don&apos;t worry! We have multiple ways to help you find the perfect match for your skills.
              </p>
              <div className="space-y-4">
                <div className="bg-h4h-surface-light/50 border border-h4h-glass-border p-4 rounded-xl flex items-center gap-4">
                  <MessageSquare className="w-6 h-6 text-h4h-accent shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Join our Discord</h4>
                    <p className="text-sm text-h4h-text-muted">Head to the #find-a-team channel</p>
                  </div>
                </div>
                <div className="bg-h4h-surface-light/50 border border-h4h-glass-border p-4 rounded-xl flex items-center gap-4">
                  <Handshake className="w-6 h-6 text-h4h-primary shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Team Building Session</h4>
                    <p className="text-sm text-h4h-text-muted">Join our kickoff session to meet other participants</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
          
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-6">Pro Tips for a Winning Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-h4h-surface-light border border-h4h-glass-border">
                <div className="text-h4h-primary font-bold text-lg mb-2">01</div>
                <h4 className="text-white font-medium mb-2">Diverse Skills</h4>
                <p className="text-sm text-h4h-text-muted">Mix developers, designers, and domain experts.</p>
              </div>
              <div className="p-6 rounded-2xl bg-h4h-surface-light border border-h4h-glass-border">
                <div className="text-h4h-accent font-bold text-lg mb-2">02</div>
                <h4 className="text-white font-medium mb-2">Clear Roles</h4>
                <p className="text-sm text-h4h-text-muted">Decide who does what early on to save time.</p>
              </div>
              <div className="p-6 rounded-2xl bg-h4h-surface-light border border-h4h-glass-border">
                <div className="text-h4h-gold font-bold text-lg mb-2">03</div>
                <h4 className="text-white font-medium mb-2">Communicate</h4>
                <p className="text-sm text-h4h-text-muted">Keep everyone in sync and support each other.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
