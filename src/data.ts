import { Project, Stat, SkillGroup, Achievement } from "./types";

export const PROJECTS_DATA: Project[] = [
  {
    id: "forgepath",
    title: "Forge a Path",
    description1: "AI-powered roadmap generator for learning and career growth.",
    description2: "Helps students and developers create structured future plans.",
    link: "https://path-forge-black.vercel.app/",
    tags: ["Gemini API", "Roadmap Engine", "TypeScript", "Vercel"],
    color: "#0050ff"
  },
  {
    id: "vibely",
    title: "Vibely",
    description1: "Create perfect prompts for AI coding IDEs instantly.",
    description2: "Designed to help developers build smarter using AI.",
    link: "https://vibely-5b1hz8aci-boltastics-projects.vercel.app/",
    tags: ["Prompt Theory", "Cursor API", "Tailwind CSS", "NextJS"],
    color: "#8b5cf6"
  },
  {
    id: "ratemystartup",
    title: "Rate My Startup",
    description1: "AI startup reviewer with realistic scoring and feedback.",
    description2: "Built for founders validating startup ideas quickly.",
    link: "https://rate-my-startup.vercel.app/",
    tags: ["AI Feedback", "Market Assessment", "React Dashboards", "Tailwind CSS"],
    color: "#10b981"
  },
  {
    id: "affordcalc",
    title: "AffordCalc",
    description1: "Financial calculator answering 'Can I afford this?'",
    description2: "Simple, clean, and practical money decision tool.",
    link: "https://affordcalc.vercel.app/",
    tags: ["Personal Finance", "Dynamic Formulas", "Glassmorphic UI", "Vite"],
    color: "#f59e0b"
  }
];

export const STATS_DATA: Stat[] = [
  {
    value: "4+",
    label: "Projects Built",
    description: "Sleek and highly functional modern tools"
  },
  {
    value: "AI",
    label: "Web Apps Specialist",
    description: "Utilizing advanced LLMs for real-world utilities"
  },
  {
    value: "Modern",
    label: "UI / UX Mastery",
    description: "Handcrafted layout physics and micro-animations"
  },
  {
    value: "Fast",
    label: "Responsive Experiences",
    description: "Sub-second load times & visual fluid fluidity"
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    items: ["TypeScript", "JavaScript", "React 19", "Next.js", "Node.js", "Express"]
  },
  {
    category: "Styling & Motion",
    items: ["Tailwind CSS v4", "Framer Motion", "CSS Variables", "Responsive Physics"]
  },
  {
    category: "AI & Tools",
    items: ["Gemini SDK", "Cursor Integrations", "LLM Hooking", "Prompts Architecture"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    year: "2026",
    title: "AI Product Sensation",
    role: "Path-Forge Launch"
  },
  {
    year: "2025",
    title: "Prompts Catalyst of the Year",
    role: "Vibely Project Release"
  },
  {
    year: "2024",
    title: "Startup Hacker Champion",
    role: "Independent Dev Incubation"
  }
];

export const CONTACT_INFO = {
  email: "capcuteditorsssss@gmail.com",
  telegram: "@BatProfile",
  telegramLink: "https://t.me/BatProfile"
};
