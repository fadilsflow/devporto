export const BASE_URL = "https://fadils.xyz";
export const NAME = "Wahyu Akhmad Fadillah";
export const NICKNAME = "Fadil";
export const AVAILABLE_FOR_WORK = true;
export const BIO =
  "19 year old fullstack developer based in Indonesia. Crafting apps with a strong focus on TypeScript and the modern web stack.";
export const DESCRIPTION_LINKS_PAGE =
  "Hi, I'm Fadil. Mostly code, sometimes design. you're probably here for one of these things...";
export const JOB = "Full Stack Developer";
export const EMAIL = "wahyufadil1140@gmail.com";
export const LOCATION = "Indonesia";
export const GITHUB_USERNAME = "fadilsflow";
export const LINKEDIN_USERNAME = "wahyu-akhmad-fadillah";
export const INSTAGRAM_USERNAME = "fadils.xyz";
export const TWITTER_USERNAME = "fadils";


// Navigation links in the bottom of the page.
export const NAVIGATION_LINKS = [
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/links",
    label: "Links",
  },
];

// Social links
export const SOCIAL_LINKS = [
  {
    href: "https://linkedin.com/in/wahyu-akhmad-fadillah",
    icon: "linkedin",
    label: "LinkedIn",
    username: "wahyu-akhmad-fadillah",
  },
  {
    href: "https://instagram.com/fadils.xyz",
    icon: "instagram",
    label: "Instagram",
    username: "fadils.xyz",
  },
  {
    href: "https://github.com/fadilsflow",
    icon: "github",
    label: "GitHub",
    username: "fadilsflow",
  },
  {
    href: "mailto:wahyufadil1140@gmail.com",
    icon: "gmail",
    label: "Email",
    username: "wahyufadil1140@gmail.com",
  },
];

export const SKILLS = [
  "Linux",
  "React",
  "Next.js", 
  "Tailwind CSS",
  "TypeScript",
  "Bun",
  "PostgreSQL",
  "Supabase",
  "Git",
  "Figma"
];

export const WORK_EXPERIENCE_ITEM = [
  {
    company: "Bulba Cloud",
    role: "Software Engineer",
    period: "2025-03 - Present",
    description:
      "Software engineer at Bulba Cloud, a startup offering domain, VPS, and hosting services. The site functions as an online catalog with clean UI and directs users to WhatsApp for purchases, creating a seamless and personal buying experience.",
  },
  {
    company: "Freelancer - Upwork, Fiverr, etc",
    role: "Full Stack Developer",
    period: "2025-03 - Present",
    description:
      "Developed and maintained web applications for clients in various industries.",
  },
];

export const EDUCATION_ITEM = [
  {
    education: "SMK Muhammadiyah 1 Tegal",
    degree: "Multimedia",
    period: "2020 - 2023",
    description:
      "I learned about multimedia, such as video editing, photo editing and etc.",
  },
  {
    education: "Politeknik Harapan Bersama Tegal",
    degree: "Applied Bachelor (D4) in Informatics Engineering",
    period: "2023 - 2027",
    description:
      "I learned about software development, database, and system analysis.",
  },


];

export const PROJECTS = [
  {
    id: "1",
    title: "Devporto",
    subtitle: "Developer Portfolio Website",
    description:
      "A developer portfolio website built with Next.js and Tailwind CSS. Showcases my projects, skills, and experience in a clean and responsive design. Features include dark mode, responsive layout, and optimized performance.",
    imageUrl:
      "https://res.cloudinary.com/dxurnpbrc/image/upload/v1747126424/1_ftwuie.png",
    href: "/projects/devporto",
    stack: ["Next.js", "Framer Motion", "shadcn/ui"],
    featured: false,
    date: "2025-05-13",
    ctaButtons: {
      primary: {
        label: "Live Demo",
        href: "https://fadils.xyz",
      },
      secondary: {
        label: "View Source",
        href: "https://github.com/fadilsflow/devporto",
      },
    },
    
    role: ["Frontend Developer", "UI/UX Designer"],
    useCase: ["Developer Portfolio Website"],
    duration: "1 week",
    category: "WEB DEVELOPMENT",
    github: "https://github.com/fadilsflow/devporto",
    liveDemo: "https://fadils.xyz",
  },
  {
    id: "2",
    title: "Bulba Cloud",
    subtitle: "Cloud Hosting Website",
    description:
      "A modern landing page and product catalog for a cloud hosting startup. Built with Next.js and Tailwind CSS, the site showcases services like domain, hosting, and VPS with a WhatsApp-based ordering system.",
    imageUrl:
      "https://res.cloudinary.com/dxurnpbrc/image/upload/v1747125582/2_gsmj22.png",
    href: "/projects/bulba-cloud",
    stack: ["Next.js", "shadcn/ui", "Figma"],
    featured: true,
    date: "2024-02-15",
    ctaButtons: {
      primary: {
        label: "Live Demo",
        href: "https://bulba.cloud", // ganti dengan URL kamu
      },
      secondary: {
        label: "GitHub Repo",
        href: "https://github.com/fadilsflow/bulbacloud", // ganti dengan repo kamu
      },
    },
   
    role: ["Web Designer", "Frontend Developer", "Marketing"],
    useCase: ["Startup Website", "Product Catalog"],
    duration: "4 weeks",
    category: "WEB DEVELOPMENT",
  }
];

// Links card in links page
export const LINKS_PAGE_LINKS = [
  {
    label: "Devporto",
    href: "https://devporto.fadils.xyz",
    description: "Best Developer Portfolio Website Template",
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@wahyuakhmadfadillah9882",
    description: "Nerdy videos about software dev stuff",
  },
  {
    label: "Personal Website",
    href: "https://fadil.xyz",
    description: "My personal website where I share my thoughts and ideas",
  },
  {
    label: "Blog",
    href: "/blog",
    description:
      "Here are some of my thoughts on software development, design, and more.",
  },
  {
    label: "Projects",
    href: "/projects",
    description: "A collection of my projects and work",
  },
];
