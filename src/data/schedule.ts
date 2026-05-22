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
    day: "Day 1",
    date: "August 15, 2026",
    events: [
      { time: "08:00 AM", title: "Registration & Check-in", description: "Collect your badges, swag kits, and get settled in", type: "ceremony" },
      { time: "09:30 AM", title: "Opening Ceremony", description: "Welcome address, sponsor introductions, and theme reveal", type: "ceremony" },
      { time: "10:30 AM", title: "Hacking Begins!", description: "Teams start building their projects — the clock starts now", type: "hacking" },
      { time: "12:30 PM", title: "Lunch Break", description: "Fuel up with catered meals and networking", type: "break" },
      { time: "02:00 PM", title: "Workshop: Building with AI", description: "Learn how to integrate AI/ML into your hackathon project", type: "workshop" },
      { time: "04:00 PM", title: "Mentor Check-in Round 1", description: "Industry mentors visit teams for guidance and feedback", type: "workshop" },
      { time: "06:30 PM", title: "Dinner & Networking", description: "Evening break with team bonding activities", type: "break" },
      { time: "08:00 PM", title: "Night Hacking Session", description: "Continue building — snacks and caffeine provided!", type: "hacking" },
    ],
  },
  {
    day: "Day 2",
    date: "August 16, 2026",
    events: [
      { time: "08:00 AM", title: "Breakfast", description: "Rise and fuel up for the final stretch", type: "break" },
      { time: "09:00 AM", title: "Mentor Check-in Round 2", description: "Final mentoring session before submissions", type: "workshop" },
      { time: "11:00 AM", title: "Hacking Ends — Code Freeze", description: "Submit your projects on the hackathon platform", type: "hacking" },
      { time: "11:30 AM", title: "Project Presentations", description: "Each team gets 5 minutes to demo their project", type: "judging" },
      { time: "02:00 PM", title: "Lunch Break", description: "Relax while judges deliberate", type: "break" },
      { time: "03:00 PM", title: "Judging & Deliberation", description: "Judges review submissions and select winners", type: "judging" },
      { time: "04:30 PM", title: "Closing Ceremony & Awards", description: "Prize announcements, closing remarks, and group photo", type: "ceremony" },
      { time: "05:30 PM", title: "Event Concludes", description: "Thank you for participating in Hack4Hyd 2.0!", type: "ceremony" },
    ],
  },
];
