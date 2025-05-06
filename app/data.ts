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
      "Developed and maintained web applications for clients in fintech and healthcare sectors.",
  },
  {
    company: "Freelancer - Upwork, Fiverr, etc",
    role: "Full Stack Developer",
    period: "2025-03 - Present",
    description:
      "Developed and maintained web applications for clients in fintech and healthcare sectors.",
  },
];

export const EDUCATION_ITEM = [
  {
    education: "Politeknik Harapan Bersama Tegal",
    degree: "Applied Bachelor (D4) in Informatics Engineering",
    period: "2023 - 2027",
  },
];

export const PROJECTS = [
  {
    id: "1",
    title: "Developer Portfolio",
    subtitle: "Personal Website",
    description:
      "A modern developer portfolio built with Next.js and Tailwind CSS. Showcases my projects, skills, and experience in a clean and responsive design. Features include dark mode, responsive layout, and optimized performance.",
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
      "A full-featured e-commerce platform with modern UI/UX, real-time updates, and secure payment processing. Built with Next.js, TypeScript, and Tailwind CSS, with Supabase as the backend. Features include user authentication, product search, cart functionality, and order processing.",
    role: ["Frontend Developer", "UI/UX Designer"],
    useCase: ["Kyuha Shim (advisor)", "Langston Wells", "Stefanie Suk"],
    duration: "8 weeks",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    category: "E-COMMERCE",
    github: "https://github.com/fadilsflow/e-commerce",
    liveDemo: "https://e-commerce.fadil.xyz",
  },
  {
    id: "2",
    title: "Portfolio Website",
    subtitle: "Portfolio",
    description:
      "A modern portfolio website showcasing my work and skills. Built with Next.js, TypeScript, and Tailwind CSS. Features include responsive design, dark mode, and optimized performance. The site is statically generated and deployed on Vercel.",
    imageUrl:
      "https://res.cloudinary.com/zeit-inc/image/upload/nextconf-photos/Sexton_Vercel_3010.jpg",
    href: "/projects/portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    date: "2024-02-15",
    ctaButtons: {
      primary: {
        label: "Demo",
        href: "https://github.com/fadilsflow/portfolio",
      },
      secondary: {
        label: "Deploy on Vercel",
        href: "https://github.com/fadilsflow/portfolio",
      },
    },
    content:
      "A responsive portfolio website built with modern web technologies. Features include dynamic content loading, optimized images, and a clean, minimalist design that focuses on showcasing projects and skills.",
    role: ["Full Stack Developer", "UI Designer"],
    useCase: ["Solo Project"],
    duration: "4 weeks",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "WEB DEVELOPMENT",
    github: "https://github.com/fadilsflow/portfolio",
    liveDemo: "https://portfolio.fadil.xyz",
  },
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
