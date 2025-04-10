import { BriefcaseIcon, HomeIcon, UserIcon } from "lucide-react";

export type Work = {
  company: string;
  href?: string;
  title: string;
  location: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
};
export type TechStack = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

export const BASE_URL = "https://fadil.xyz";
export const NAME = "Wahyu Akhmad Fadillah";
export const JOB = "Full Stack Developer";
export const EMAIL = "wahyufadil1140@gmail.com";
export const PHONE = "+62 812-3456-7890";
export const LOCATION = "Asia/Jakarta (GMT+7)";
export const GITHUB_USERNAME = "fadilsflow";

export const CONTACT_BIO = [
  {
    href: "https://linkedin.com/in/wahyu-akhmad-fadillah",
    icon: "linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/fadilsflow",
    icon: "github",
    label: "GitHub",
  },
  {
    href: "https:///fadils.xyz",
    icon: "gmail",
    label: "Email",
  },
  {
    href: "https://cal.com/fadils",
    icon: "googlemeet",
    label: "Meeting",
  },
];

export const SOCIAL_LINKS = [
  {
    href: "https://linkedin.com/in/wahyu-akhmad-fadillah",
    icon: "linkedin",
    label: "LinkedIn",
  },

  {
    href: "https://instagram.com/fadils.xyz",
    icon: "instagram",
    label: "Instagram",
  },
  {
    href: "https://github.com/fadilsflow",
    icon: "github",
    label: "GitHub",
  },
  {
    href: "https://cal.com/fadils",
    icon: "googlemeet",
    label: "googlemeet",
  },
  {
    href: "https:///fadils.xyz",
    icon: "readdotcv",
    label: "cv",
  },
];
export const WORK = [
  {
    company: "Bulba Cloud",
    href: "https://bulba.cloud",
    location: "Remote",
    title: "Software Engineer",
    logoUrl: "/bulba.svg",
    start: "February 2025",
    end: "Present",
    description:
      "I build websites, design user interfaces, and manage VPS infrastructure at Bulba Cloud, a startup I founded.",
  },
  {
    company: "Freelance",
    // href: "https://.com",
    location: "Remote",
    title: "Full-stack Web Developer",
    logoUrl: "/freelance.svg",
    start: "February 2025",
    end: "Present",
    description:
      "I work with clients to design and develop full-stack websites that are fast, modern, and responsive.",
  },
];

export const NAVBAR = [
  {
    href: "/",
    icon: HomeIcon,
    label: "Home",
  },
  {
    href: "/about",
    icon: UserIcon,
    label: "About",
  },
  {
    href: "/projects",
    icon: BriefcaseIcon,
    label: "Projects",
  },
];

export const TECHSTACK: TechStack[] = [
  {
    title: "Figma",
    description: "UI/UX Design Tool",
    href: "https://figma.com",
    icon: "/figma.svg",
  },
  {
    title: "TypeScript",
    description: "Typed JavaScript Superset",
    href: "https://www.typescriptlang.org",
    icon: "/typescript.svg",
  },
  {
    title: "React",
    description: "JavaScript UI Library",
    href: "https://reactjs.org",
    icon: "/react.svg",
  },
  {
    title: "Next.js",
    description: "React Framework",
    href: "https://nextjs.org",
    icon: "/nextdotjs.svg",
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS Framework",
    href: "https://tailwindcss.com",
    icon: "/tailwindcss.svg",
  },
  {
    title: "Linux",
    description: "Open Source OS",
    href: "https://kernel.org",
    icon: "/linux.svg",
  },
  {
    title: "Bun",
    description: "JavaScript Runtime",
    href: "https://bun.sh",
    icon: "/bun.svg",
  },
  {
    title: "Git",
    description: "Version Control System",
    href: "https://git-scm.com",
    icon: "/git.svg",
  },
  {
    title: "Supabase",
    description: "Open Source Backend",
    href: "https://supabase.com",
    icon: "/supabase.svg",
  },
  {
    title: "PostgreSQL",
    description: "Relational Database",
    href: "https://www.postgresql.org",
    icon: "/postgresql.svg",
  },
];

export const BLOG = [
  {
    id: 1,
    title: "Hello World",
    image: `/profile.png`,
    description: "This is my first blog post",
    href: `${BASE_URL}/blog/1`,
    date: "Mar 31, 2025",
    readingTime: "5 min read time",
    tags: ["Next.js", "Typescript", "Tailwind CSS"],
  },
];
// app/data.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A fully responsive online shopping experience",
    imageUrl:
      "https://res.cloudinary.com/zeit-inc/image/upload/nextconf-photos/Sexton_Vercel_1269.jpg",
    href: "/commerce",
  },
  {
    id: "2",
    title: "Portfolio Website",
    description: "Personal showcase of creative works",
    imageUrl:
      "https://res.cloudinary.com/zeit-inc/image/upload/nextconf-photos/Sexton_Vercel_3010.jpg",
    href: "/portfolio",
  },
  {
    id: "3",
    title: "Task Management App",
    description: "Intuitive interface for organizing tasks",
    imageUrl:
      "https://res.cloudinary.com/zeit-inc/image/upload/nextconf-photos/Sexton_Vercel_1269.jpg",
    href: "/task-management",
  },
];
