export type User = {
  firstName: string;
  lastName: string;
  displayName: string;
  username: string;
  gender: string;
  pronouns: string;
  bio: string;
  flipSentences: string[];
  address: string;
  phoneNumber: string;
  email: string;
  website: string;
  jobTitle: string;
  jobs: { title: string; company: string; website: string }[];
  about: string;
  avatar: string;
  ogImage: string;
  namePronunciationUrl?: string;
  keywords: string[];
  dateCreated: string;
};

export const USER: User = {
  firstName: "Wahyu",
  lastName: "Akhmad Fadillah",
  displayName: "Wahyu Akhmad Fadillah",
  username: "fadil",
  gender: "male",
  pronouns: "he/him",
  bio: "Full Stack Developer with 2+ years of experience building production-ready, scalable web applications. Proficient in end-to-end development with Next.js, TypeScript, and modern tooling, with a strong interest in SaaS platforms and AI-assisted development.",
  address: "Tegal, Jawa Tengah, Indonesia",
  phoneNumber: "KzYyODUxNTc3Mzk5Nzg=",
  email: "d2FoeXVmYWRpbDExNDBAZ21haWwuY29t",
  website: "https://fadils.xyz",
  jobTitle: "Full Stack Developer",
  flipSentences: ["Software Engineer"],
  jobs: [
    {
      title: "Full Stack Developer",
      company: "Raxza Global Technology",
      website: "https://raxzaglobal.com/raxza-global-technology",
    },
  ],
  about: `
Hello, World! I am Wahyu Akhmad Fadillah — a Full Stack Developer from Indonesia passionate about creating efficient, user-centric web solutions from front-end to back-end.

With 2+ years of experience, I specialize in building production-ready, scalable web applications using Next.js, TypeScript, and modern tooling. I'm also experienced in integrating AI capabilities and third-party APIs, and I effectively leverage AI-assisted development tools like Cursor to accelerate development and improve code quality.

One of my flagship projects is [Kreasi](https://github.com/fadilsflow/kreasi), an open-source link-in-bio platform with a drag-and-drop block editor, digital product sales, and a financial ledger system — built with TanStack Start, tRPC, and Midtrans.

I also created [Jeda](https://github.com/fadilsflow/jeda), a Pomodoro timer app with productivity stats, leaderboard, ambient sounds, and Better Auth integration — and [Rightsponse](https://rs.fadils.xyz), an AI-powered writing assistant using Google Gemini.

Let's connect and collaborate!
`,
  avatar:
    "https://res.cloudinary.com/dxurnpbrc/image/upload/v1758206850/profile_avsqcv.webp",
  ogImage:
    "https://res.cloudinary.com/dxurnpbrc/image/upload/v1758294318/1_pojo5c.png",
  namePronunciationUrl: "/p/fadil.mp3",
  keywords: [
    "Wahyu Akhmad Fadillah",
    "Fadil",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer Indonesia",
    "Next.js Developer",
    "TypeScript Developer",
  ],
  dateCreated: "2025-9-20",
};
