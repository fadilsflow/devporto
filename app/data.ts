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

type Skill = {
  label: string
  link: string
}
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
    href: ":///fadils.xyz",
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
    href: ":///fadils.xyz",
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
  

export const SKILLS: Skill[] = [
  {
    label: "Figma",
    link: "https://figma.com",
  },
  {
    label: "TypeScript",
    link: "https://www.typescriptlang.org",
  },
  {
    label: "React",
    link: "https://reactjs.org",
  },
  {
    label: "Next.js",
    link: "https://nextjs.org",
  },
  {
    label: "Tailwind CSS",
    link: "https://tailwindcss.com",
  },
  {
    label: "Linux",
    link: "https://kernel.org",
  },
  {
    label: "Bun",
    link: "https://bun.sh",
  },
  {
    label: "Git",
    link: "https://git-scm.com",
  },
  {
    label: "Supabase",
    link: "https://supabase.com",
  },
  {
    label: "PostgreSQL",
    link: "https://www.postgresql.org",
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
  tags: string[];
  featured: boolean;
  date: string;
  githubUrl?: string;
  liveUrl?: string;
  content?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A fully responsive online shopping experience with modern UI/UX",
    imageUrl: "https://res.cloudinary.com/zeit-inc/image/upload/nextconf-photos/Sexton_Vercel_1269.jpg",
    href: "/projects/e-commerce",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    featured: true,
    date: "2024-03-01",
    githubUrl: "https://github.com/fadilsflow/e-commerce",
    liveUrl: "https://ecommerce.fadils.xyz",
    content: "A modern e-commerce platform built with Next.js and Supabase..."
  },
  {
    id: "2",
    title: "Portfolio Website",
    description: "Personal showcase of creative works with dynamic content",
    imageUrl: "https://res.cloudinary.com/zeit-inc/image/upload/nextconf-photos/Sexton_Vercel_3010.jpg",
    href: "/projects/portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    date: "2024-02-15",
    githubUrl: "https://github.com/fadilsflow/portfolio",
    liveUrl: "https://fadils.xyz",
    content: "A minimalist portfolio website showcasing my projects and skills..."
  },
  {
    id: "3",
    title: "Task Management App",
    description: "Intuitive interface for organizing tasks with real-time updates",
    imageUrl: "https://res.cloudinary.com/zeit-inc/image/upload/nextconf-photos/Sexton_Vercel_1269.jpg",
    href: "/projects/task-management",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    featured: false,
    date: "2024-01-20",
    githubUrl: "https://github.com/fadilsflow/task-management",
    liveUrl: "https://tasks.fadils.xyz",
    content: "A task management application with real-time updates and collaborative features..."
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "Real-time weather information with beautiful visualizations",
    imageUrl: "https://res.cloudinary.com/zeit-inc/image/upload/nextconf-photos/Sexton_Vercel_1269.jpg",
    href: "/projects/weather-dashboard",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenWeather API"],
    featured: false,
    date: "2024-01-10",
    githubUrl: "https://github.com/fadilsflow/weather-dashboard",
    liveUrl: "https://weather.fadils.xyz",
    content: "A weather dashboard with real-time data and interactive visualizations..."
  },
  {
    id: "5",
    title: "Recipe Finder",
    description: "Discover and save your favorite recipes",
    imageUrl: "https://res.cloudinary.com/zeit-inc/image/upload/nextconf-photos/Sexton_Vercel_1269.jpg",
    href: "/projects/recipe-finder",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Edamam API"],
    featured: false,
    date: "2023-12-15",
    githubUrl: "https://github.com/fadilsflow/recipe-finder",
    liveUrl: "https://recipes.fadils.xyz",
    content: "A recipe finder application with search and filtering capabilities..."
  }
];
