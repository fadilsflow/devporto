import { z } from "astro/zod";

const urlOrPath = z
  .string()
  .min(1)
  .refine(
    (value) => value.startsWith("/") || /^https?:\/\//.test(value),
    "Use an absolute URL or a root-relative path",
  );

const optionalUrlOrPath = z.union([urlOrPath, z.literal("")]).optional();
const periodSchema = z.object({
  start: z.string().min(1),
  end: z.string().optional(),
});
const linkSchema = z.object({
  title: z.string().min(1),
  href: z.string().min(1),
  external: z.boolean().optional(),
});

export const portfolioSchema = z.object({
  site: z.object({
    name: z.string().min(1),
    url: z.string().url(),
    description: z.string().min(1),
    language: z.string().min(2),
    locale: z.string().min(2),
    themeColor: z.object({ light: z.string().min(1), dark: z.string().min(1) }),
    repositoryUrl: z.string().url().optional(),
    logo: z
      .object({ src: z.string().optional(), alt: z.string().optional() })
      .optional(),
  }),
  sections: z.object({
    profile: z.boolean(),
    socialLinks: z.boolean(),
    overview: z.boolean(),
    about: z.boolean(),
    techStack: z.boolean(),
    experiences: z.boolean(),
    projects: z.boolean(),
  }),
  navigation: z.array(
    z.object({
      title: z.string().min(1),
      href: z.string().min(1),
      icon: z.string().min(1),
      enabled: z.boolean().optional(),
    }),
  ),
  profile: z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    displayName: z.string().min(1),
    username: z.string().min(1),
    gender: z.string().optional(),
    pronouns: z.string().optional(),
    bio: z.string().min(1),
    flipSentences: z.array(z.string().min(1)).min(1),
    address: z.object({
      label: z.string().min(1),
      locality: z.string().optional(),
      region: z.string().optional(),
      country: z.string().optional(),
    }),
    phoneNumber: z.string().optional(),
    email: z.string().optional(),
    contactEncoding: z.enum(["plain", "base64"]).default("plain"),
    website: z.string().url(),
    jobTitle: z.string().min(1),
    jobs: z.array(
      z.object({
        title: z.string().min(1),
        company: z.string().min(1),
        website: z.string().url().optional(),
      }),
    ),
    about: z.string().min(1),
    avatar: urlOrPath,
    ogImage: urlOrPath,
    namePronunciationUrl: optionalUrlOrPath,
    keywords: z.array(z.string().min(1)).min(1),
    dateCreated: z.string().min(1),
    verified: z.boolean(),
  }),
  socialLinks: z.array(
    z.object({
      icon: urlOrPath,
      title: z.string().min(1),
      description: z.string().min(1),
      href: z.string().url(),
      placements: z
        .array(z.enum(["home", "linksPrimary", "linksSecondary"]))
        .default([]),
    }),
  ),
  linkPage: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    primaryLinks: z.array(linkSchema),
    secondaryLinks: z.array(linkSchema),
  }),
  resume: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    seoDescription: z.string().min(1),
    embedUrl: z.string().optional(),
    downloadUrl: z.string().optional(),
  }),
  projects: z.object({
    initialVisible: z.number().int().positive(),
    items: z.array(
      z.object({
        id: z.string().min(1),
        title: z.string().min(1),
        period: periodSchema,
        link: z.string().url(),
        skills: z.array(z.string().min(1)),
        description: z.string().optional(),
        logo: optionalUrlOrPath,
        isExpanded: z.boolean().optional(),
      }),
    ),
  }),
  experiences: z.array(
    z.object({
      id: z.string().min(1),
      companyName: z.string().min(1),
      companyLogo: optionalUrlOrPath,
      positions: z.array(
        z.object({
          id: z.string().min(1),
          title: z.string().min(1),
          employmentPeriod: periodSchema,
          employmentType: z.string().optional(),
          description: z.string().optional(),
          icon: z
            .enum(["code", "design", "education", "business", "idea"])
            .optional(),
          skills: z.array(z.string().min(1)).optional(),
          isExpanded: z.boolean().optional(),
        }),
      ),
      isCurrentEmployer: z.boolean().optional(),
    }),
  ),
  techStack: z.array(
    z.object({
      key: z.string().min(1),
      title: z.string().min(1),
      href: z.string().url(),
      categories: z.array(z.string().min(1)),
      theme: z.boolean().optional(),
    }),
  ),
  footer: z.object({
    builtByLabel: z.string().min(1),
    builtByHref: z.string().url().optional(),
    sourceCodeLabel: z.string().min(1).optional(),
    sourceCodeUrl: z.string().url().optional(),
  }),
});

export type PortfolioConfig = z.infer<typeof portfolioSchema>;
export type PortfolioInput = z.input<typeof portfolioSchema>;
export type Profile = PortfolioConfig["profile"];
export type SocialLink = PortfolioConfig["socialLinks"][number];
export type Project = PortfolioConfig["projects"]["items"][number];
export type Experience = PortfolioConfig["experiences"][number];
export type ExperiencePosition = Experience["positions"][number];
export type TechStack = PortfolioConfig["techStack"][number];
export type NavigationItem = PortfolioConfig["navigation"][number];
export type LinkItem = PortfolioConfig["linkPage"]["primaryLinks"][number];
