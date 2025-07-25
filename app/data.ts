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
export const TIMEZONE = "Asia/Jakarta";
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
  "Docker",
  "Supabase",
  "Git",
  "Figma",
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
    company: "Freelancer - Self-employed",
    role: "Full Stack Developer",
    period: "2025-03 - Present",
    description:
      "Building personal projects and learning new technologies through hands-on development. Focusing on modern web development stack including React, Next.js, and TypeScript. Actively participating in open source contributions and expanding skillset through online courses and tutorials.",
  },
];

export const EDUCATION_ITEM = [
  {
    education: "SMK Muhammadiyah 1 Tegal",
    degree: "Multimedia",
    period: "2020 - 2023",
    description:
      "Completed vocational high school with focus on multimedia and digital content creation. Gained hands-on experience with industry-standard creative software, Creative Suite for video editing, motion graphics, and photo manipulation. Developed strong foundation in visual design principles and digital storytelling.",
  },
  {
    education: "Politeknik Harapan Bersama Tegal",
    degree: "Applied Bachelor (D4) in Informatics Engineering",
    period: "2023 - 2027",
    description:
      "Currently pursuing applied bachelor's degree with focus on practical software engineering. Studying modern web development, database design, system architecture, and software project management. Gaining hands-on experience through industry-focused coursework and real-world projects.",
  },
];

export const PROJECTS = [
  {
    title: "Dya Collection",
    description:
      "A website-based e-commerce platform developed to digitize the 'Toko Koleksi Tas DYA' MSME, a women's bag store that previously relied on conventional sales methods. As a Community Service Project (PPM), this solution was designed to expand market reach, professionalize sales processes, and streamline data management. Built with Next.js, the platform features a complete product catalog, an online ordering system, and a comprehensive admin dashboard for managing products and transactions, empowering the business to compete in the digital era.",
    imageUrl:
      "https://res.cloudinary.com/dxurnpbrc/image/upload/v1752689356/1_rzhmbk.png",
    href: "/projects/dya-collection",
    stack: [
      "Next.js",
      "Clerk",
      "Prisma",
      "PostgreSQL",
      "Cloudinary",
      "shadcn/ui",
    ],
    featured: true,
    category: "WEB DEVELOPMENT",
    role: ["Full-stack Developer", "UI/UX Designer"],
    useCase: ["E-commerce Platform", "MSME Digitalization"],
    ctaButtons: {
      primary: {
        label: "Visit Store",
        href: "https://dya-collection.vercel.app",
      },
      secondary: {
        label: "GitHub Repo",
        href: "https://github.com/ahmdsaif87/dya-collection",
      },
    },
    team: [
      {
        name: "Wahyu Akhmad Fadillah",
        role: "Full Stack Developer",
        github: "https://github.com/fadilsflow",
      },
      {
        name: "Ahmad Saifi K.U.",
        role: "Backend Developer",
        github: "https://github.com/ahmdsaif87",
      },
      {
        name: "Dede Fernanda",
        role: "Frontend Developer",
        github: "https://github.com/ddfrnnd",
      },
      {
        name: "Alifia Shafa Shabrina",
        role: "Frontend Developer",
        github: "https://github.com/Alifia-30",
      },
    ],
  },
  {
    title: "SyncRank",
    description:
      "A decision support system (DSS) based on AI to help educational institutions in objectively ranking student achievements. Built with Next.js, SyncRank implements the SAW (Simple Additive Weighting) method and is enhanced with AI for intelligent recommendations. Key features include efficient data management with Excel import/export, interactive dashboard, and instant PDF report generation.",
    imageUrl:
      "https://res.cloudinary.com/dxurnpbrc/image/upload/v1750862288/5_xs3ur8.png",
    href: "/projects/syncrank",
    stack: ["Next.js", "Clerk", "PostgreSQL", "Gemini API"],
    featured: true,
    ctaButtons: {
      primary: {
        label: "Try SyncRank",
        href: "https://syncrank.bulba.cloud",
      },
      secondary: {
        label: "GitHub Repo",
        href: "https://github.com/fadilsflow/sistem-peringkat-mahasiswa",
      },
    },
    role: ["Full-stack Developer", "AI Integration"],
    useCase: ["Decision Support System", "Education Technology (EdTech)"],
    category: "WEB DEVELOPMENT",
    github: "https://github.com/fadilsflow/sistem-peringkat-mahasiswa",
  },
  {
    title: "Rightsponse",
    description:
      "AI-powered writing assistant that helps you craft perfect responses for chat messages, emails, and comments. Built with Next.js and Gemini API, it offers customizable language and tone options for better communication. Features include real-time text generation, multiple response formats, and a clean, modern UI powered by shadcn/ui.",
    imageUrl:
      "https://res.cloudinary.com/dxurnpbrc/image/upload/v1749034640/RIGHTSPONSE_Text_dtvzcu.png",
    href: "/projects/rightsponse",
    stack: ["Next.js", "Gemini API", "shadcn/ui"],
    featured: true,
    ctaButtons: {
      primary: {
        label: "Try Rightsponse",
        href: "https://rs.fadils.xyz",
      },
      secondary: {
        label: "GitHub Repo",
        href: "https://github.com/fadilsflow/rightsponse",
      },
    },
    role: ["Frontend Developer", "AI Integration"],
    useCase: ["Communication Tool", "AI Writing Assistant"],
    category: "AI DEVELOPMENT",
    github: "https://github.com/fadilsflow/rightsponse",
    team: [
      {
        name: "Wahyu Akhmad Fadillah",
        role: "Backend Developer",
        github: "https://github.com/fadilsflow",
      },
      {
        name: "Alifia Shafa Shabrina",
        role: "Frontend Developer",
        github: "https://github.com/Alifia-30",
      },
    ],
  },
  {
    title: "Devporto",
    description:
      "A modern, feature-rich portfolio website template designed specifically for developers. Built with Next.js and Tailwind CSS, it offers a perfect showcase for your coding journey. Features include GitHub stats integration showing your contribution graph and top repositories, dark mode support, fully responsive layouts, and blazing-fast performance with server-side rendering. The template implements comprehensive SEO optimization with semantic HTML, meta tags, and structured data. Developers can easily customize sections for projects, skills, work experience, and blog posts. Includes  image optimization, and accessibility best practices. Perfect for developers wanting a professional online presence with minimal setup.",
    imageUrl:
      "https://res.cloudinary.com/dxurnpbrc/image/upload/v1747126424/1_ftwuie.png",
    href: "/projects/devporto",
    stack: ["Next.js", "Framer Motion", "shadcn/ui"],
    featured: false,
    ctaButtons: {
      primary: {
        label: "Live Demo",
        href: "https://fadils.xyz",
      },
      secondary: {
        label: "Deploy",
        href: "https://vercel.com/new/clone?repository-url=https://github.com/fadilsflow/devporto",
      },
    },

    role: ["Frontend Developer", "UI/UX Designer"],
    useCase: ["Portfolio Website"],
    category: "WEB DEVELOPMENT",
    github: "https://github.com/fadilsflow/devporto",
  },
  {
    title: "Bulba Cloud",
    description:
      "A modern, SEO-optimized landing page and product catalog for a cloud hosting startup. Built with Next.js and Tailwind CSS, the site delivers a seamless user experience for browsing hosting services. Features include optimized page load times, responsive design across all devices, and strategic SEO implementation including meta tags, canonical URLs, and structured data markup. The WhatsApp-based ordering system streamlines customer communication while maintaining a personal touch. Comprehensive service pages for domains, VPS, and hosting are enhanced with rich snippets for better search visibility. Analytics integration helps track conversion rates and user engagement to continuously improve the platform.",
    imageUrl:
      "https://res.cloudinary.com/dxurnpbrc/image/upload/v1747125582/2_gsmj22.png",
    href: "/projects/bulba-cloud",
    stack: ["Next.js", "shadcn/ui", "Figma"],
    featured: true,
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
    category: "WEB DEVELOPMENT",
  },
];

// Links card in links page
export const LINKS_PAGE_LINKS = [
  {
    label: "Devporto",
    href: "https://fadils.xyz/projects/devporto",
    description: "Best Developer Portfolio Website Template",
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@wahyuakhmadfadillah9882",
    description: "Nerdy videos about software dev stuff",
  },
  {
    label: "Personal Website",
    href: "https://fadils.xyz",
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
