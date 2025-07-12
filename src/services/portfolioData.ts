import { link } from "fs";

// Portfolio data model
export const portfolioData = {
  name: "Naiyana Norkaew (Oki)",
  title: "Full Stack Developer",
  statement: "An INFJ who likes video production, writing, music, games and cameras",
  profile: "/asset/profile.jpg",
  skills: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "Next.js", level: 75 },
    { name: "TypeScript", level: 75 },
    { name: "Python", level: 85 },
  ],
  projects: [
    {
      title: "Firewall Log Analytic Website",
      description: "An internal firewall analytic website using generative AI to analyze and make monthly reports for employees",
      technologies: ["Vue.js", "Python", "JavaScript"],
    },
    {
      title: "eCommerce Website",
      description: "E-commerce website that sell pre-build computers and also let customers build their own desire specifications",
      technologies: ["Next.js", "MongoDB"],
    },
  ],
  contact: {
    email: "naiyana.nk14@gmail.com",
    linkedin: "linkedin.com/in/naiyana-nk",
    github: "github.com/naiyana-nk",
  },
};
