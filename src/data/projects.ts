export type Project = {
  id: string;
  title: string;
  period: { start: string; end?: string };
  link: string;
  skills: string[];
  description?: string;
  logo?: string;
  isExpanded?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "kreasi",
    title: "Kreasi — Link-in-Bio Platform",
    period: { start: "01.2026" },
    link: "https://github.com/fadilsflow/kreasi",
    skills: [
      "TanStack Start",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Drizzle ORM",
      "tRPC",
      "Midtrans",
    ],
    description: `An open-source link-in-bio platform with profile customization, drag-and-drop block editor, and integrated digital product sales. Features an append-only ledger financial system for transaction records, creator balance calculation, and automated payout management. Integrates Midtrans payment gateway with webhook handler for real-time payment processing and email notifications via Resend.`,
    logo: "/p/kreasi.png",
    isExpanded: true,
  },
  {
    id: "jejak-rempah-marketplace",
    title: "Jejak Rempah Marketplace",
    period: { start: "08.2025", end: "12.2025" },
    link: "https://marketplace.jejakrempah.com",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Cloudinary",
      "Drizzle ORM",
      "Midtrans",
    ],
    description: `A spice commodity marketplace with a complete transaction ecosystem from purchasing to distribution. Features comprehensive vendor management including product catalog, real-time inventory control, merchant verification, and transaction monitoring. Integrated Midtrans payment solution for user checkout and automated seller remittance.`,
    logo: "/p/jejak-rempah.svg",
  },
  {
    id: "jeda",
    title: "Jeda — Pomodoro Timer App",
    period: { start: "11.2025" },
    link: "https://github.com/fadilsflow/jeda",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Drizzle ORM",
      "Better Auth",
      "Zustand",
    ],
    description: `A Pomodoro timer app with customizable duration, color themes, backgrounds, and ambient sounds to boost productivity. Implements a statistics and leaderboard system tracking focus time, daily streaks, and user rankings stored in PostgreSQL. Designed with keyboard shortcuts, responsive layout, and authentication via Better Auth.`,
    logo: "/p/jeda.png",
  },
  {
    id: "heal",
    title: "Heal — AI Health Companion",
    period: { start: "09.2025" },
    link: "https://github.com/fadilsflow/heal",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Google AI SDK",
      "Clerk",
      "Zustand",
    ],
    description: `An AI-powered health companion app with interactive chat features providing personal health insights from user data. Integrates data from wearable devices (Apple Watch, Garmin, Oura, Whoop) and visualizes it through interactive charts. Implements user authentication with Clerk and an onboarding flow for personalized health experience.`,
    logo: "/p/heal.png",
  },
  {
    id: "edu-anemia",
    title: "Edu Anemia — Health Education App",
    period: { start: "07.2025", end: "08.2025" },
    link: "https://edukasi-anemia.my.id",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description: `An interactive health education web app about anemia for adolescents, covering causes, symptoms, impacts, and prevention. Implements an interactive quiz and WHO-guideline-based anemia risk assessment calculator for early detection. Designed with Framer Motion animations and Rough Notation to boost user engagement.`,
    logo: "/p/edu-anemia.png",
  },
  {
    id: "rightsponse",
    title: "Rightsponse — AI Writing Assistant",
    period: { start: "04.2024", end: "05.2024" },
    link: "https://rs.fadils.xyz",
    skills: ["Next.js", "Gemini API", "Web Speech API", "shadcn/ui"],
    description: `An AI writing assistant supporting multiple content formats such as emails, messages, comment replies, and AI prompt refinement. Integrates Google Gemini API with tone and language customization to generate contextual, natural text in real-time. Includes voice input feature via Web Speech API for hands-free text input.`,
    logo: "/p/rightsponse.svg",
  },
  {
    id: "syncrank",
    title: "SyncRank — Student Ranking System",
    period: { start: "05.2024", end: "07.2024" },
    link: "https://syncrank.bulba.cloud",
    skills: ["Next.js", "PostgreSQL", "Clerk", "Gemini API"],
    description: `A decision support system (DSS) for ranking students' academic achievements. Implements the SAW method and integrates AI for recommendations. Features Excel import/export, dashboard, and instant PDF reporting.`,
    logo: "/p/syncrank.svg",
  },
  {
    id: "harber-marketplace",
    title: "Harber Marketplace Frontend",
    period: { start: "06.2024", end: "09.2024" },
    link: "https://github.com/Marketplace-UMKM-Harapan-Bersama/harber-marketplace-frontend/",
    skills: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Zustand",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    description: `A frontend web application for a multi-vendor marketplace supporting Indonesian MSMEs. Provides catalog browsing, cart system, and real-time product updates. Built collaboratively in a team project with industry mentorship.`,
    logo: "/p/mphb.svg",
  },
  {
    id: "dya-collection",
    title: "Dya Collection — E-commerce Platform",
    period: { start: "11.2023", end: "02.2024" },
    link: "https://dya-collection.vercel.app",
    skills: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Cloudinary",
      "shadcn/ui",
    ],
    description: `A full-stack e-commerce platform built for a local women's bag store (MSME) to digitize sales operations. Includes product catalog, online ordering, and admin dashboard for transaction management.`,
    logo: "/p/dya.svg",
  },
];
