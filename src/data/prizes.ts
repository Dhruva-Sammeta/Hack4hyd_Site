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
    amount: "₹20,000",
    description: "The team with the most innovative, impactful, and technically excellent project",
    icon: "🏆",
    tier: 1,
  },
  {
    rank: "2nd",
    title: "First Runner Up",
    amount: "₹10,000",
    description: "Outstanding project with exceptional execution and presentation",
    icon: "🥈",
    tier: 2,
  },
  {
    rank: "3rd",
    title: "Second Runner Up",
    amount: "₹5,000",
    description: "Impressive innovation and strong technical implementation",
    icon: "🥉",
    tier: 3,
  },
];
