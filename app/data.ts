import { WorkExperienceItem } from "./types";

export const BASE_URL = "https://fadil.xyz";
export const NAME = "Wahyu Akhmad Fadillah";
export const BIO =
  "19 year old fullstack developer based in Indonesia. Crafting apps with a strong focus on TypeScript and the modern web stack.";
export const JOB = "Full Stack Developer";
export const EMAIL = "wahyufadil1140@gmail.com";
export const PHONE = "+62 812-3456-7890";
export const LOCATION = "Asia/Jakarta";
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
    href: "https://instagram.com/fadils.xyz",
    icon: "instagram",
    label: "Instagram",
  },
];

export const NAVIGATION_LINKS = [
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/links",
    label: "Links",
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
    href: "mailto:wahyufadil1140@gmail.com",
    icon: "gmail",
    label: "Email",
  },
];

export const SKILLS = [
  {
    name: "Linux",
    category: "DevOps",
  },
  {
    name: "React",
    category: "Frontend",
  },
  {
    name: "Next.js",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    category: "Programming",
  },
  {
    name: "Bun",
    category: "Runtime",
  },
  {
    name: "PostgreSQL",
    category: "Database",
  },
  {
    name: "Supabase",
    category: "Backend",
  },
  {
    name: "Git",
    category: "Version Control",
  },
  {
    name: "Figma",
    category: "Design",
  },
];

export const WORK_EXPERIENCE_ITEM: WorkExperienceItem[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovate Inc.",
    period: "2021-06 - Present",
    description:
      "Leading frontend development for enterprise SaaS products. Working with React, TypeScript, and GraphQL.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    period: "2019-03 - 2021-05",
    description:
      "Developed and maintained web applications for clients in fintech and healthcare sectors.",
  },
  {
    title: "Junior Web Developer",
    company: "Web Creators Agency",
    period: "2017-09 - 2019-02",
    description:
      "Created responsive websites and implemented UX improvements for client projects.",
  },
];

export const EDUCATION_ITEM = [
  {
    education: "Politeknik Harapan Bersama Tegal",
    degree: "Applied Bachelor (D4) in Informatics Engineering",
    period: "2023 - 2027",
  },
];

export const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    subtitle: "Productify",
    description:
      "A modern e-commerce platform built with Next.js and Supabase.A modern e-commerce platform built with Next.js and Supabase.A modern e-commerce platform built with Next.js and Supabase.A modern e-commerce platform built with Next.js and Supabase.A modern e-commerce platform built with Next.js and Supabase.",
    imageUrl:
      "https://res.cloudinary.com/zeit-inc/image/upload/nextconf-photos/Sexton_Vercel_1269.jpg",
    href: "/projects/e-commerce",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    featured: true,
    date: "2024-03-01",
    ctaButtons: {
      primary: {
        label: "Live Demo",
        href: "https://github.com/fadilsflow/e-commerce",
      },
      secondary: {
        label: "View Source",
        href: "https://github.com/fadilsflow/e-commerce",
      },
    },
    content:
      "A full-featured e-commerce platform with modern UI/UX, real-time updates, and secure payment processing.A full-featured e-commerce platform with modern UI/UX, real-time updates, and secure payment processing.A full-featured e-commerce platform with modern UI/UX, real-time updates, and secure payment processing.A full-featured e-commerce platform with modern UI/UX, real-time updates, and secure payment processing.",
    role: ["Frontend Developer", "UI/UX Designer"],
    collaborators: ["Kyuha Shim (advisor)", "Langston Wells", "Stefanie Suk"],
    duration: "8 weeks",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    category: "E-COMMERCE",
  },
  {
    id: "2",
    title: "Portfolio Website",
    subtitle: "Portfolio",
    description: "A modern portfolio website showcasing my work and skills.",
    imageUrl:
      "https://res.cloudinary.com/zeit-inc/image/upload/nextconf-photos/Sexton_Vercel_3010.jpg",
    href: "/projects/portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    date: "2024-02-15",
    ctaButtons: {
      primary: {
        label: "View Live",
        href: "https://github.com/fadilsflow/portfolio",
      },
      secondary: {
        label: "View Source",
        href: "https://github.com/fadilsflow/portfolio",
      },
    },
    content:
      "A responsive portfolio website built with modern web technologies.",
    role: ["Full Stack Developer", "UI Designer"],
    collaborators: ["Solo Project"],
    duration: "4 weeks",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "WEB DEVELOPMENT",
  },
];
