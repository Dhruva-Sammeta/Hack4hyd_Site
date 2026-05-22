export interface JudgingCriterion {
  title: string;
  weight: number;
  description: string;
  tips: string[];
}

export const judgingCriteria: JudgingCriterion[] = [
  {
    title: "Innovation & Creativity",
    weight: 25,
    description: "How original and creative is the idea? Does it solve a real problem in a novel way?",
    tips: [
      "Think outside the box — unique approaches score higher",
      "Identify a real pain point and solve it differently",
      "Combine technologies in unexpected ways",
    ],
  },
  {
    title: "Technical Complexity",
    weight: 25,
    description: "How technically challenging is the implementation? Is the code well-structured and efficient?",
    tips: [
      "Use appropriate technologies for the problem",
      "Write clean, modular, and well-documented code",
      "Implement error handling and edge cases",
    ],
  },
  {
    title: "Design & User Experience",
    weight: 20,
    description: "Is the interface intuitive and visually appealing? How polished is the overall experience?",
    tips: [
      "Focus on usability — make it easy for anyone to use",
      "Consistent visual design language matters",
      "Mobile responsiveness is a plus",
    ],
  },
  {
    title: "Impact & Feasibility",
    weight: 15,
    description: "How impactful could this project be if fully developed? Is it practical and scalable?",
    tips: [
      "Clearly articulate the problem and your solution's impact",
      "Show awareness of your target audience",
      "Consider scalability and real-world deployment",
    ],
  },
  {
    title: "Presentation & Demo",
    weight: 15,
    description: "How effectively does the team communicate their project? Is the demo compelling?",
    tips: [
      "Practice your pitch — you have limited time",
      "Start with the problem, then show the solution",
      "Live demos are more impressive than slides",
    ],
  },
];
