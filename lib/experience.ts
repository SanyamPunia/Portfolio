import { ExperienceType } from "types/experience";

export const experienceList: ExperienceType[] = [
  {
    id: 2,
    name: "Flib",
    role: "Founder | Developer",
    startDate: "May, 2023",
    endDate: "~",
    source: "https://flib.store",
    description: [
      "As the founder of Flib, I drew inspiration from industry leaders like SwagUp. Inspired by their success, I envisioned a platform that would excel in providing top-quality custom merchandise and swag solutions. I took the initiative to create our main website, assemble a dedicated team, and cultivate valuable partnerships.",
      "At Flib, we're passionate about transforming your ideas into innovative custom merchandise and unforgettable swag experiences. Thank you for being part of our journey as we craft exceptional merchandise solutions tailored to your vision.",
    ],
    techStack: ["Next,js", "TypeScript", "Caisy CMS", "Jotai"],
  },
  {
    id: 1,
    name: "Zenduty",
    role: "Frontend Engineer Intern",
    startDate: "June, 2023",
    endDate: "July, 2023",
    source: "https://www.zenduty.com/",
    description: [
      "Developing UI components, conducting unit & E2E testing, and maintaining code. Collaborating with design and product teams to deliver seamless user experiences.",
      "Contributing to front-end architecture and continuous improvement initiatives.",
    ],
    techStack: ["Cypress", "Vitest", "React", "Gatsby"],
  },
  {
    id: 2,
    name: "BuildFast",
    role: "Frontend Developer Intern",
    startDate: "Feb, 2023",
    endDate: "March, 2023",
    source: "https://buildfast.co.in/",
    description: [
      "My role as a frontend developer was to create clean & beautiful web components for various niches ranging from SaaS landing pages to Blockchain specific web pages.",
      "All the landing pages & components were mobile responsive. I also created all the assets and illustrations used in the components using Figma.",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Figma"],
  },
  {
    id: 3,
    name: "Google Code-In 2018",
    role: "Participant | Finalist",
    startDate: "Oct, 2018",
    endDate: "Dec, 2018",
    source:
      "https://codein.withgoogle.com/archive/2018/organization/5082225137680384/",
    description: [
      "I completed 42 tasks which included UI Designing, Front/Back-end improvement, and Overall code refinement. I also contributed to various other SCoRe Lab branched Open-Source projects.",
      "I was selected as a finalist for completing a higher number of quality GCI tasks.",
    ],
    techStack: ["Node.js", "HTML5", "CSS3", "JavaScript", "Express.js"],
  },
];
