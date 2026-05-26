import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { scheduleData } from "@/data/schedule";
import { Clock, Code, Users, Coffee, Trophy, Mic } from "lucide-react";

export const metadata = {
  title: "Schedule | Hack4Hyd",
  description: "The official timeline and schedule for Hack4Hyd.",
};

const getEventIcon = (type: string) => {
  switch (type) {
    case "ceremony":
      return <Mic size={20} />;
    case "hacking":
      return <Code size={20} />;
    case "workshop":
      return <Users size={20} />;
    case "break":
      return <Coffee size={20} />;
    case "judging":
      return <Trophy size={20} />;
    default:
      return <Clock size={20} />;
  }
};

const getEventColor = (type: string) => {
  switch (type) {
    case "ceremony":
      return "text-h4h-gold border-h4h-gold bg-h4h-gold/10";
    case "hacking":
      return "text-h4h-primary border-h4h-primary bg-h4h-primary/10";
    case "workshop":
      return "text-h4h-accent border-h4h-accent bg-h4h-accent/10";
    case "break":
      return "text-h4h-text-muted border-h4h-text-muted bg-h4h-text-muted/10";
    case "judging":
      return "text-green-400 border-green-400 bg-green-400/10";
    default:
      return "text-h4h-text border-h4h-text bg-h4h-text/10";
  }
};

export default function SchedulePage() {
  return (
    <PageTransition>
      <section className="min-h-screen pt-28 pb-20 relative">
        <div className="particle-bg" />
        <div className="section-container relative z-10">
          <SectionHeader
            title="Event Schedule"
            kicker="Timeline & Schedule"
            description="From the online problem statement launch to pre-event submissions and the grand physical finale."
            gradient
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {scheduleData.map((day) => (
              <div key={day.day} className="flex flex-col">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-h4h-text mb-2 flex items-center gap-3">
                    <span className="text-h4h-primary">{day.day}</span>
                  </h3>
                  <p className="text-h4h-text-muted">{day.date}</p>
                </div>

                <div className="relative border-l-2 border-h4h-glass-border ml-4 md:ml-6 pl-8 md:pl-10 space-y-8 pb-8">
                  {day.events.map((event, eventIndex) => (
                    <GlassCard 
                      key={eventIndex} 
                      className="p-5 md:p-6 relative"
                      hover={true}
                    >
                      {/* Timeline dot */}
                      <div className={`absolute -left-[43px] md:-left-[51px] top-6 w-10 h-10 rounded-full border-2 flex items-center justify-center bg-h4h-surface z-10 ${getEventColor(event.type)}`}>
                        {getEventIcon(event.type)}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                        <h4 className="text-xl font-bold text-h4h-text">{event.title}</h4>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-h4h-surface-light border border-h4h-glass-border text-sm font-medium whitespace-nowrap text-h4h-primary">
                          <Clock size={14} />
                          {event.time}
                        </div>
                      </div>
                      <p className="text-h4h-text-muted text-sm md:text-base">
                        {event.description}
                      </p>
                    </GlassCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
