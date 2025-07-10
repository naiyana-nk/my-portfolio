import { link } from "fs";

// Portfolio data model
export const portfolioData = {
  name: "Naiyana Norkaew (Oki)",
  title: "Full Stack Developer",
  statement: "An INFJ who likes video production, writing, music, games and cameras",
  profile: "/asset/profile.jpg",
  skills: [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "CSS", level: 85 },
  ],
  projects: [
    {
      title: "Firewall Log Analytic Website",
      description: "An internal firewall analytic website using generative AI to analyze and make monthly reports for employees",
      technologies: ["Vue.js", "Python"],
    },
    {
      title: "Project 2",
      description: "E-commerce platform",
      technologies: ["Next.js", "MongoDB"],
    },
  ],
  contact: {
    email: "naiyana.nk14@gmail.com",
    linkedin: "linkedin.com/in/naiyana-nk",
    github: "github.com/yourusername",
  },
};
