import { Metadata } from "next";
import Image from "next/image";
import { PageTransition } from "@/components/ui/PageTransition";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { coreTeam, legacyTeam } from "@/data/team";
import { Users, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Hack4Hyd",
  description: "Meet the brilliant minds and legacy members behind Hack4Hyd.",
};

export default function AboutUs() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-28 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="particle-bg" />
        <div className="grid-bg" />
        <div className="noise-overlay" />

        <div className="section-container relative z-10 space-y-24">
          
          {/* Header Section */}
          <SectionHeader
            kicker="Who We Are"
            title="Meet the Team"
            description="The passionate individuals working tirelessly behind the scenes to make Hack4Hyd Edition 2 an unforgettable experience."
            gradient
          />

          {/* Core Team Section */}
          <section className="space-y-12">
            <div className="flex items-center gap-3 justify-center mb-8">
              <Users className="w-8 h-8 text-h4h-primary" />
              <h2 className="text-3xl font-heading font-bold text-h4h-text">Core Team</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreTeam.map((member) => (
                <GlassCard key={member.name} className="team-card flex flex-col items-center">
                  <div className="team-avatar relative overflow-hidden flex items-center justify-center">
                    {member.image ? (
                      <Image 
                        src={member.image} 
                        alt={`${member.name}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 150px, 150px"
                      />
                    ) : (
                      member.initials
                    )}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-h4h-text mb-1">
                    {member.name}
                  </h3>
                  <p className="text-h4h-text-muted font-medium">
                    {member.role}
                  </p>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* Legacy Members Section */}
          <section className="space-y-12">
            <div className="flex items-center gap-3 justify-center mb-8">
              <Star className="w-8 h-8 text-h4h-gold" />
              <h2 className="text-3xl font-heading font-bold text-h4h-text">Legacy Members</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {legacyTeam.map((member) => (
                <GlassCard key={member.name} gold className="team-card legacy-card flex flex-col items-center">
                  <div className="team-avatar relative overflow-hidden flex items-center justify-center">
                    {member.image ? (
                      <Image 
                        src={member.image} 
                        alt={`${member.name}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 150px, 150px"
                      />
                    ) : (
                      member.initials
                    )}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-h4h-text mb-1">
                    {member.name}
                  </h3>
                  <p className="text-h4h-text-muted font-medium">
                    {member.role}
                  </p>
                </GlassCard>
              ))}
            </div>
          </section>

        </div>
      </main>
    </PageTransition>
  );
}
