export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  image?: string;
}

export const coreTeam: TeamMember[] = [
  { name: "Sanjith", role: "President", initials: "S", image: "/team/sanjith.jpg" },
  { name: "Shrihan", role: "Vice President", initials: "SH" },
  { name: "Dhriti", role: "Head of Public Relations", initials: "D", image: "/team/dhriti.jpg" },
  { name: "Raghav", role: "Head of Marketing", initials: "R" },
  { name: "Saanvi", role: "Head of Finance", initials: "SA", image: "/team/saanvi.jpeg" },
  { name: "Dhruva", role: "Head of Technology", initials: "DH", image: "/team/dhruva.jpg" },
];

export const legacyTeam: TeamMember[] = [
  { name: "Gaurav", role: "Founder", initials: "G", image: "/team/gaurav.jpeg" },
  { name: "Gautam", role: "Founder", initials: "G", image: "/team/gautam.jpeg" },
  { name: "Ananya", role: "Executive Board", initials: "A" },
  { name: "Srikar", role: "Executive Board", initials: "SR", image: "/team/srikar.jpg" },
  { name: "Shaurya Puri", role: "Senior Advisor", initials: "SP", image: "/team/shaurya.jpg" },
];
