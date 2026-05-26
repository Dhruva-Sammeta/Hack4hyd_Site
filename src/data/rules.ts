export interface Rule {
  title: string;
  items: string[];
}

export const rules: Rule[] = [
  {
    title: "Team Composition",
    items: [
      "Teams must consist of 2 to 4 members",
      "All team members must be registered individually on the platform",
      "Cross-institutional teams are allowed and encouraged",
      "Each participant can only be part of one team",
      "Team formation can happen before or during the event",
    ],
  },
  {
    title: "Project Requirements",
    items: [
      "All code must be written during the hacking period (from problem statement release to the submission deadline) — no pre-built projects",
      "Open-source libraries and frameworks are allowed",
      "Projects must be original work created during the designated hacking week",
      "Pre-existing ideas are fine, but implementation must start fresh after the problem statement release",
      "All projects must be submitted online before the submission deadline",
    ],
  },
  {
    title: "Submissions",
    items: [
      "Submit your project via the official hackathon platform",
      "Include a README with setup instructions and project description",
      "A working demo or video walkthrough is required",
      "Source code must be hosted on a public GitHub repository",
      "Late submissions will not be accepted",
    ],
  },
  {
    title: "Code of Conduct",
    items: [
      "Be respectful and inclusive to all participants, mentors, and organizers",
      "No harassment, discrimination, or inappropriate behavior of any kind",
      "Respect the venue and equipment — leave spaces as you found them",
      "Follow all safety guidelines and venue rules",
      "Violations may result in immediate disqualification and removal",
    ],
  },
  {
    title: "Intellectual Property",
    items: [
      "Teams retain full ownership of their projects",
      "Hack4Hyd may showcase winning projects for promotional purposes",
      "By participating, you grant Hack4Hyd the right to photograph and record the event",
      "Any APIs or datasets used must comply with their respective licenses",
    ],
  },
  {
    title: "General",
    items: [
      "Organizers' decisions regarding judging and rules are final",
      "The schedule is subject to change — check announcements regularly",
      "WiFi and power will be provided but bring your own devices",
      "Meals and refreshments will be provided during the event",
      "Have fun and build something amazing!",
    ],
  },
];
