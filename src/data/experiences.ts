export type ExperiencePositionIcon =
  | "code"
  | "design"
  | "education"
  | "business"
  | "idea";

export type ExperiencePosition = {
  id: string;
  title: string;
  employmentPeriod: { start: string; end?: string };
  employmentType?: string;
  description?: string;
  icon?: ExperiencePositionIcon;
  skills?: string[];
  isExpanded?: boolean;
};

export type Experience = {
  id: string;
  companyName: string;
  companyLogo?: string;
  positions: ExperiencePosition[];
  isCurrentEmployer?: boolean;
};

export const EXPERIENCES: Experience[] = [
  {
    id: "tegal-tourism",
    companyName: "Tegal Tourism",
    companyLogo: "/p/tegal-tourism.png",
    positions: [
      {
        id: "a1b2c3d4-tegal-tourism-fullstack",
        title: "Full Stack Developer",
        employmentPeriod: { start: "10.2025", end: "12.2025" },
        employmentType: "Part-time",
        description: `- Developed and optimized core features of a digital tourism platform with focus on performance and user experience.
- Successfully increased platform adoption by implementing commercial features that attracted local business owners.
- Actively involved in system architecture planning and long-term development strategy alongside the management team.`,
        icon: "code",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "PostgreSQL",
          "Teamwork",
          "Problem-solving",
          "Project Management",
        ],
      },
    ],
  },
  {
    id: "JejakRempah Marketplace",
    companyName: "JejakRempah Marketplace",
    companyLogo: "/p/jejak-rempah.svg",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Full Stack Developer",
        employmentPeriod: { start: "08.2025", end: "12.2025" },
        employmentType: "Part-time",
        description: `- Built [JejakRempah Marketplace](https://marketplace.jejakrempah.com) from scratch, developing both frontend and backend through to deployment.
- Implemented international security standard ISO 27001 to ensure user data protection and transaction security.
- Conducted usability evaluation using the SUS method and achieved "Best Imaginable" category result.
- Integrated [Midtrans](https://midtrans.com) payment gateway for seamless transactions and automated seller remittance.`,
        icon: "code",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "Midtrans",
          "PostgreSQL",
          "Drizzle",
          "Zustand",
          "Tanstack Query",
        ],
      },
    ],
  },
  {
    id: "harber marketplace",
    companyName: "Harber Marketplace",
    companyLogo: "/p/mphb.svg",
    positions: [
      {
        id: "harber-frontend",
        title: "Frontend Developer",
        employmentPeriod: { start: "06.2024", end: "09.2024" },
        employmentType: "Freelance",
        description: `- Developed [Harber Marketplace](https://github.com/marketplace-UMKM-Harapan-Bersama/harber-marketplace-frontend) e-commerce interface with RESTful API integration and frontend performance optimization.
- Designed UI/UX improvements that enhanced usability, accessibility, and design consistency of the platform.
- Collaborated with backend team and stakeholders to ensure efficient data flow and timely project deliverables.`,
        icon: "code",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "React Query",
          "Zustand",
        ],
      },
    ],
  },
  {
    id: "harkat english club",
    companyName: "Harkat English Club",
    companyLogo: "/p/henc.svg",
    positions: [
      {
        id: "0eecdfcb-028d-41f4-93e9-1269ba7eff7e",
        title: "Graphic Designer",
        employmentPeriod: { start: "2023" },
        employmentType: "Freelance",
        description: `- Design and Manage Feeds and Posts for the [Harkat English Club](https://instagram.com/henc_harkat) social media accounts.
- Collaborate with the club's members to create content for the club.
- Documented the club's activities and events.`,
        icon: "design",
        skills: [
          "Graphic Design",
          "Social Media Management",
          "Content Creation",
        ],
      },
    ],
  },
  {
    id: "freelance",
    companyName: "Freelance / Self-employed",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Full Stack Developer",
        employmentPeriod: { start: "03.2024", end: "Present" },
        employmentType: "Freelance",
        description: `- Built and deployed production-ready web applications for various clients using Next.js, TypeScript, and PostgreSQL.
- Developed complex systems including a multi-user financial management platform with transaction records, role-based access, data visualization, and exportable reports.
- Integrated AI capabilities (e.g. Gemini API) into client applications to enable smart features such as content generation and intelligent recommendations.
- Delivered end-to-end e-commerce solutions with admin dashboards, payment systems, and responsive UIs.
- Handled API design, UI development, database modeling, and deployment.`,
        icon: "code",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "PostgreSQL",
          "Drizzle",
          "Prisma",
          "Supabase",
          "shadcn/ui",
          "Gemini API",
        ],
      },
      {
        id: "freelance-design",
        title: "UI/UX & Graphic Designer",
        employmentPeriod: { start: "2021", end: "2023" },
        employmentType: "Freelance",
        description: `- Designed logos, posters, and digital ads for local clients.
- Built design systems and wireframes for web projects using Figma.
- Delivered responsive UI prototypes and collaborated with developers for implementation.`,
        icon: "design",
        skills: [
          "UI/UX Design",
          "Wireframing",
          "Figma",
          "Prototyping",
          "Graphic Design",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "edu-uhn",
        title:
          "Universitas Harkat Negeri — Applied Bachelor (D4) Informatics Engineering",
        employmentPeriod: { start: "09.2023", end: "Present" },
        icon: "education",
        description: `- Currently pursuing an Applied Bachelor's degree in Informatics Engineering with GPA 3.89 / 4.0.
- Relevant coursework: Web Programming, Mobile Programming, Database, Software Testing, Software Engineering, Artificial Intelligence.
- Active member of Forum Riset Teknologi Informasi (FORTI) — Programmer Division, teaching and guiding members through practice sessions and discussions.
- Led the Creative Team for PKKMB 2024, overseeing event branding, media production, and visual design.`,
        skills: [
          "Web Programming",
          "Mobile Programming",
          "Database Design",
          "Software Engineering",
          "Artificial Intelligence",
        ],
      },
      {
        id: "edu-smk",
        title: "SMK Muhammadiyah 1 Tegal — Multimedia",
        employmentPeriod: { start: "2020", end: "2023" },
        icon: "education",
        description: `- Completed vocational high school specializing in Multimedia.
- Learned digital content creation, photo/video editing, and visual communication.
- Built a solid foundation in design principles and technical tools such as Photoshop, Illustrator, and Premiere.
- Graduated with a strong interest in transitioning multimedia knowledge into web development and software engineering.`,
        skills: [
          "Multimedia Production",
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Adobe Premiere",
        ],
      },
    ],
  },
];
