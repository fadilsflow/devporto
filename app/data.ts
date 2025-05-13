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
export const LOCATION = "Asia/Jakarta";
export const GITHUB_USERNAME = "fadilsflow";


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
  {
    name: "Linux",
  },
  {
    name: "React",
  },
  {
    name: "Next.js",
  },
  {
    name: "Tailwind CSS",
  },
  {
    name: "TypeScript",
  },
  {
    name: "Bun",
  },
  {
    name: "PostgreSQL",
  },
  {
    name: "Supabase",
  },
  {
    name: "Git",
  },
  {
    name: "Figma",
  },
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
      "https://res.cloudinary.com/zeit-inc/image/upload/nextconf-photos/Sexton_Vercel_1269.jpg",
    href: "/projects/devporto",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "ShadCN"],
    featured: true,
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
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "ShadCN"],
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
      "https://res.cloudinary.com/zeit-inc/image/upload/nextconf-photos/Sexton_Vercel_3010.jpg",
    href: "/projects/bulba-cloud",
    tags: ["Next.js", "Tailwind CSS", "ShadCN", "Figma", "Canva"],
    featured: true,
    date: "2024-02-15",
    ctaButtons: {
      primary: {
        label: "bulba.cloud",
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
    tools: ["Next.js", "Tailwind CSS", "ShadCN", "Figma", "Canva"],
    category: "WEB DEVELOPMENT",
  }
];

// Links card in links page
export const LINKS_PAGE_LINKS = [
  {
    label: "Pomopokus",
    href: "https://pomopokus.com",
    description: "Best Pomodoro apps timer in the world",
    category: "Productivity",
    icon: "clock",
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@wahyuakhmadfadillah9882",
    description: "Nerdy videos about software dev stuff",
    category: "Social Media",
    icon: "youtube",
  },
  {
    label: "Personal Website",
    href: "https://fadil.xyz",
    description: "My personal website where I share my thoughts and ideas",
    category: "Personal",
    icon: "globe",
  },
  {
    label: "Blog",
    href: "/blog",
    description:
      "Here are some of my thoughts on software development, design, and more.",
    category: "Writing",
    icon: "pencil",
  },
  {
    label: "Projects",
    href: "/projects",
    description: "A collection of my projects and work",
    category: "Portfolio",
    icon: "code",
  },
];

// Required favicons configuration
export const FAVICONS = {
  appName: "Fadil's Portfolio",
  appShortName: "Fadil",
  appDescription: "Full Stack Developer Portfolio",
  developerName: NAME,
  developerURL: BASE_URL,
  dir: "auto",
  lang: "en-US",
  background: "#ffffff",
  theme_color: "#000000",
  display: "standalone",
  orientation: "any",
  startUrl: "/",
  version: "1.0",
  logging: false,
  icons: {
    // Create all these favicon sizes using a tool like https://realfavicongenerator.net/
    // and place them in the public directory
    android: true,
    appleIcon: true,
    appleStartup: true,
    favicons: true,
    windows: true,
  },
};


// SEO Configuration
export const SEO_CONFIG = {
  titleTemplate: "%s | Fadil's Portfolio",
  defaultTitle: `${NAME} - ${JOB}`,
  siteName: "Fadil's Portfolio",
  language: "en-US",
  themeColor: "#000000",
  twitterHandle: "@fadils",
  googleSiteVerification: "",
  googleAnalyticsId: "",
  facebookAppId: "",
};

// Structured Data Config - For advanced SEO
export const STRUCTURED_DATA = {
  person: {
    "@type": "Person",
    name: NAME,
    jobTitle: JOB,
    url: BASE_URL,
    sameAs: [
      "https://linkedin.com/in/wahyu-akhmad-fadillah",
      "https://github.com/fadilsflow",
      "https://instagram.com/fadils.xyz",
    ],
  },
  technologies: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Supabase",
  ],
  availability: AVAILABLE_FOR_WORK
    ? "Available for hire"
    : "Not available for hire",
  countryCode: "ID", // Indonesia
  locationString: "Indonesia",
};
