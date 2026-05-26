export interface ScheduleEvent {
  time: string;
  title: string;
  description: string;
  type: "ceremony" | "hacking" | "workshop" | "break" | "judging";
}

export interface ScheduleDay {
  day: string;
  date: string;
  events: ScheduleEvent[];
}

export const scheduleData: ScheduleDay[] = [
  {
    day: "Pre-Event (Online)",
    date: "July 25 – July 31, 2026",
    events: [
      { time: "July 25, 10:00 AM", title: "Problem Statement Announcement", description: "The official challenge themes and problem statements are released online.", type: "ceremony" },
      { time: "July 25, 11:00 AM", title: "Hacking Starts", description: "Teams begin designing, prototyping, and coding their solutions.", type: "hacking" },
      { time: "July 27, 04:00 PM", title: "Virtual Mentor Office Hours", description: "Optional online checkpoints with industry experts for project guidance.", type: "workshop" },
      { time: "July 31, 11:59 PM", title: "Project Submission Deadline", description: "Submit source code, readme, and a brief video demo on the platform.", type: "hacking" },
    ],
  },
  {
    day: "Grand Finale (Physical)",
    date: "August 1, 2026",
    events: [
      { time: "09:30 AM", title: "Participant Check-in", description: "Arrive at the venue, collect your badges, and network over refreshments.", type: "ceremony" },
      { time: "10:15 AM", title: "Opening Address", description: "Welcome speech, introduction of judges, and presentation guidelines.", type: "ceremony" },
      { time: "10:45 AM", title: "Live Pitches & Demos", description: "Teams present their pre-submitted projects to the panel of judges.", type: "judging" },
      { time: "01:30 PM", title: "Lunch & Networking", description: "Catered lunch with fellow hackers, mentors, and sponsors.", type: "break" },
      { time: "02:30 PM", title: "Technical Keynote", description: "Insights from leading figures in the Hyderabad tech ecosystem.", type: "workshop" },
      { time: "03:00 PM", title: "Awards & Closing Ceremony", description: "Announcing winners, prize distribution, and closing remarks.", type: "ceremony" },
    ],
  },
];
