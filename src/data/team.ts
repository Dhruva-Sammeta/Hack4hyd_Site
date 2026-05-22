export interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

export const coreTeam: TeamMember[] = [
  { name: "Sanjith", role: "President", initials: "S" },
  { name: "Shrihan", role: "Vice President", initials: "SH" },
  { name: "Dhriti", role: "Head of Public Relations", initials: "D" },
  { name: "Raghav", role: "Head of Marketing", initials: "R" },
  { name: "Saanvi", role: "Head of Finance", initials: "SA" },
  { name: "Dhruva", role: "Head of Technology", initials: "DH" },
];

export const legacyTeam: TeamMember[] = [
  { name: "Gaurav", role: "Founder", initials: "G" },
  { name: "Gautam", role: "Founder", initials: "G" },
  { name: "Ananya", role: "Executive Board", initials: "A" },
  { name: "Srikar", role: "Executive Board", initials: "SR" },
  { name: "Shaurya Puri", role: "Senior Advisor", initials: "SP" },
];
