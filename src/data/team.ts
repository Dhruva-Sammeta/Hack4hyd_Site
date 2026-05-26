export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  image?: string;
  bio?: string;
}

export const coreTeam: TeamMember[] = [
  {
    name: "Sanjith",
    role: "President",
    initials: "S",
    image: "/team/sanjith.jpg",
    bio: "Sanjith Chellamuthu is an IBDP student with a strong passion for technology, artificial intelligence, and innovation. As the President of Hack4Hyd, he enjoys leading teams, organizing impactful hackathons, and building solutions that combine creativity with problem-solving. Alongside his interest in AI, web development, and entrepreneurship, he is passionate about using technology to create meaningful social impact and empower students through community-driven initiatives."
  },
  {
    name: "Shrihan",
    role: "Vice President",
    initials: "SH",
    bio: "Shrihan Reddy Pakala is an IBDP student with a strong interest in innovation and building initiatives that create meaningful impact. Having been part of last year’s Hack4Hyd, he returns this year as Vice President, bringing with him valuable experience, fresh ideas, and a drive to make the event bigger and better. Whether it’s organizing teams or helping turn ideas into reality, Shrihan enjoys being at the center of collaboration and execution."
  },
  {
    name: "Dhriti",
    role: "Head of Public Relations",
    initials: "D",
    image: "/team/dhriti.jpg",
    bio: "Dhriti Chowdary Galla is an IBDP student with a strong passion for technology, innovation, and creating ideas that make a real-world impact. Whether it’s leading student initiatives, exploring AI and entrepreneurship, or contributing to community-driven projects, she loves bringing creativity and problem-solving together. Alongside her interest in tech, she is also a trained Carnatic music vocalist and public speaker who enjoys blending creativity with innovation. As part of the Hack4Hyd core team, Dhriti is excited to help create a space where students can innovate, collaborate, and make an impact!"
  },
  {
    name: "Raghav",
    role: "Head of Marketing",
    initials: "R",
    bio: "Raghav Palla is an IBDP student with a strong passion for design and technology. He enjoys watching films and experimenting with different design media in his free time. As the Head of Marketing for Hack4Hyd, he hopes to craft a compelling visual identity for the event and bring creative storytelling to every campaign. With a keen eye for aesthetics and a drive to connect ideas with audiences, Raghav is excited to amplify Hack4Hyd's reach and impact, helping students across Hyderabad discover a space where innovation and collaboration come to life."
  },
  {
    name: "Saanvi",
    role: "Head of Finance",
    initials: "SA",
    image: "/team/saanvi.jpeg",
    bio: "Saanvi Reddy Thummala is an IBDP student with a strong interest in finance, AI, innovation, and creativity. She enjoys being part of projects where she can collaborate with others, contribute ideas, and learn through new experiences. Alongside her interest in finance and emerging technologies, she enjoys creative outlets such as crocheting and theatre, bringing both analytical and creative thinking to her work. As part of the core team, Saanvi is excited to work with passionate and like-minded individuals while helping make Hack4Hyd a successful and impactful event."
  },
  {
    name: "Dhruva",
    role: "Head of Technology",
    initials: "DH",
    image: "/team/dhruva.jpg",
    bio: "Dhruva Sammeta is an IBDP student with a strong passion for technology, engineering, software development, and innovation. With a deep interest in hardware systems, robotics, computational problem-solving, and full-stack application development, he enjoys building projects that combine technical design with real-world application. From developing engineering concepts and experimenting with emerging technologies to creating software solutions and leading technical initiatives, Dhruva is driven by curiosity, implementation, and the challenge of turning ambitious ideas into functional systems."
  },
];

export const legacyTeam: TeamMember[] = [
  { name: "Gaurav", role: "Founder", initials: "G", image: "/team/gaurav.jpeg" },
  { name: "Gautam", role: "Founder", initials: "G", image: "/team/gautam.jpeg" },
  { name: "Ananya", role: "Executive Board", initials: "A" },
  { name: "Srikar", role: "Executive Board", initials: "SR", image: "/team/srikar.jpg" },
  { name: "Shaurya Puri", role: "Senior Advisor", initials: "SP", image: "/team/shaurya.jpg" },
];
