import { ProjectType } from "types/project";

export const projectList: ProjectType[] = [
  {
    id: 1,
    name: "Skill Up NCU",
    description:
      "Skill Up NCU is an online forum built for the university student community to ask doubts from their peers and seniors. With a rich markdown editor, with image support, ask your question and post it within a matter of seconds.",
    tags: ["Next.js", "Firebase", "Vercel"],
    bgImage: "skillup-preview",
    logoImage: "skillup-logo",
    githubUrl: "https://github.com/SanyamPunia/Skill-Up-NCU",
    previewUrl: "https://skillup-ncu.vercel.app/",
  },
  {
    id: 2,
    name: "Gym Landing Page",
    description:
      "A clean and responsive landing page made for a GYM using VITE and animated using Framer Motion. Deployed using Cloudfare",
    tags: ["React.js", "Framer Motion", "TypeScript", "Vite"],
    bgImage: "gymlanding-preview",
    logoImage: "gym-logo",
    githubUrl: "https://github.com/SanyamPunia/Gym-Landing-Page",
    previewUrl: "https://6ed9fd44.gym-landing-page.pages.dev/",
  },
  {
    id: 3,
    name: "Supa Radio",
    description:
      "An Interactive Music Visualizer created using Supabase & Hosted via Firebase. Key features include Supabase Auth, Database, Storage, Realtime Chat.",
    tags: ["Svelte", "SvelteKit", "Supabase", "Three.js", "Firebase"],
    bgImage: "suparadio-preview",
    logoImage: "suparadio-logo",
    githubUrl: "https://github.com/SanyamPunia/Supa-Radio",
    previewUrl: "https://suparadio-viz.web.app/",
  },
  {
    id: 4,
    name: "Next Blog",
    description:
      "Inspired by popular blogging web apps, Next Blog is a comprehensive blog publishing website made using Next JS and Firebase. It includes key features such as liking, image uploading, and admin route",
    tags: ["Next.js", "Firebase", "Authentication"],
    bgImage: "nextblog-preview",
    logoImage: "nextblog-logo",
    githubUrl: "https://github.com/SanyamPunia/next-blog",
    previewUrl: "https://next-blog-app-virid.vercel.app/",
  },
];
