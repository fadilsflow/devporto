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
    location: "Remote",
    title: "Full-stack Web Developer",
    logoUrl: "/freelance.svg",
    start: "February 2025",
    end: "Present",
    description:
      "I work with clients to design and develop full-stack websites that are fast, modern, and responsive.",
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
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  href: string;
  tags: string[];
  featured: boolean;
  date: string;
  githubUrl?: string;
  liveUrl?: string;
  content?: string;
  role: string[];
  collaborators: string[];
  duration: string;
  tools: string[];
  category: string;
  ctaButtons: {
    primary: {
      label: string;
      href: string;
    };
    secondary: {
      label: string;
      href: string;
    };
  };
}

export const projects: Project[] = [
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
