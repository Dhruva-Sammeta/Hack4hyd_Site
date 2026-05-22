export interface Prize {
  rank: string;
  title: string;
  amount: string;
  description: string;
  icon: string;
  tier: 1 | 2 | 3 | 4;
}

export const prizes: Prize[] = [
  {
    rank: "1st",
    title: "Grand Winner",
    amount: "₹50,000",
    description: "The team with the most innovative, impactful, and technically excellent project",
    icon: "🏆",
    tier: 1,
  },
  {
    rank: "2nd",
    title: "First Runner Up",
    amount: "₹30,000",
    description: "Outstanding project with exceptional execution and presentation",
    icon: "🥈",
    tier: 2,
  },
  {
    rank: "3rd",
    title: "Second Runner Up",
    amount: "₹15,000",
    description: "Impressive innovation and strong technical implementation",
    icon: "🥉",
    tier: 3,
  },
  {
    rank: "Special",
    title: "Best UI/UX Design",
    amount: "₹10,000",
    description: "Most visually stunning and user-friendly interface",
    icon: "🎨",
    tier: 4,
  },
  {
    rank: "Special",
    title: "Most Innovative Idea",
    amount: "₹10,000",
    description: "The most creative and original concept regardless of completion level",
    icon: "💡",
    tier: 4,
  },
  {
    rank: "Special",
    title: "Best Social Impact",
    amount: "₹10,000",
    description: "Project with the greatest potential for positive social change",
    icon: "🌍",
    tier: 4,
  },
];
