import { Metadata } from "next";
import {
  NAME,
  BIO,
  BASE_URL,
  JOB,
  NICKNAME,
  LINKEDIN_USERNAME,
  GITHUB_USERNAME,
  INSTAGRAM_USERNAME,
  TWITTER_USERNAME,
  LOCATION,
  AVAILABLE_FOR_WORK,
  SKILLS,
} from "../data";


// Required favicons configuration
export const FAVICONS = {
  appName: `${NAME} - ${JOB}`,
  appShortName: `${NAME} Portfolio`,
  appDescription: BIO,
  developerName: NAME,
  developerURL: BASE_URL,
  dir: "auto",
  lang: "en-US",
  background: "#000000",
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
  titleTemplate: `%s - ${JOB}`,
  defaultTitle: `${NAME} - ${JOB}`,
  siteName: `${NAME} - ${JOB}`,
  language: "en-US",
  themeColor: "#000000",
  twitterHandle: `@${TWITTER_USERNAME}`,
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
      `https://linkedin.com/in/${LINKEDIN_USERNAME}`,
      `https://github.com/${GITHUB_USERNAME}`,
      `https://instagram.com/${INSTAGRAM_USERNAME}`,
      `https://twitter.com/${TWITTER_USERNAME}`,
      `${BASE_URL}`,
    ],
  },
  technologies: SKILLS,
  availability: AVAILABLE_FOR_WORK
    ? "Available for hire"
    : "Not available for hire",
  countryCode: "ID", // Indonesia
  locationString: LOCATION,
};

/**
 * Default metadata for the site
 */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: SEO_CONFIG.titleTemplate,
  },
  icons: {
    icon: "/icon0.svg",
    shortcut: "/icon0.svg",
  },
  

  description: BIO,
  keywords: SKILLS,
  authors: [{ name: NAME, url: BASE_URL }],
  creator: NAME,
  publisher: NAME,
  applicationName: FAVICONS.appName,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: SEO_CONFIG.language,
    url: BASE_URL,
    siteName: SEO_CONFIG.siteName,
    title: SEO_CONFIG.defaultTitle,
    description: BIO,
    images: [
      {
        url: "/icon0.svg",
        width: 1200,
        height: 630,
        alt: `${NAME}'s Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.defaultTitle,
    description: BIO,
    creator: SEO_CONFIG.twitterHandle,
    images: ["/icon0.svg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": BASE_URL,
    },
  },
  verification: {
    google: SEO_CONFIG.googleSiteVerification,
  },
  other: {
    "msapplication-TileColor": FAVICONS.theme_color,
    "msapplication-config": "/browserconfig.xml",
  },
};

/**
 * Home page metadata
 */
export const homeMetadata: Metadata = {
  title: `${NAME} - ${JOB}`,
  description: BIO,
  keywords: SKILLS,
  openGraph: {
    title: `${NAME} - ${JOB}`,
    description: BIO,
    images: [
      {
        url: "/icon0.svg",
        width: 1200,
        height: 630,
        alt: `${NAME} Portfolio`,
      },
    ],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

/**
 * Projects page metadata
 */
export const projectsMetadata: Metadata = {
  title: `Projects | ${NAME}`,
  description: BIO,
  keywords: SKILLS,
  openGraph: {
    title: `Projects | ${NAME}`,
    description: BIO,
    images: [
      {
        url: "/icon0.svg",
        width: 1200,
        height: 630,
        alt: `${NAME}'s Projects`,
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/projects`,
  },
};

/**
 * Blog page metadata
 */
export const blogMetadata: Metadata = {
  title: `Blog | ${NAME}`,
  description: BIO,
  keywords: SKILLS,
  openGraph: {
    title: `Blog | ${NAME}`,
    description: BIO,
    images: [
      {
        url: "/icon0.svg",
        width: 1200,
        height: 630,
        alt: `${NAME}'s Blog`,
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
};

/**
 * Links page metadata
 */
export const linksMetadata: Metadata = {
  title: `Links | ${NAME}`,
  description: BIO,
  keywords: SKILLS,
  openGraph: {
    title: `Links | ${NAME}`,
    description: BIO,
    images: [
      {
        url: "/icon0.svg",
        width: 1200,
        height: 630,
        alt: `${NAME}'s Links`,
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/links`,
  },
};

/**
 * Generate project-specific metadata
 */
export const generateProjectMetadata = (project: {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  category: string;
  tools: string[];
  date: string;
}): Metadata => ({
  title: project.title,
  description: project.description,
  keywords: [
    project.category.toLowerCase(),
    ...project.tools,
    "project",
    "case study",
    "portfolio item",
  ],
  openGraph: {
    title: project.title,
    description: project.description,
    images: [
      {
        url: project.imageUrl,
        width: 1200,
        height: 630,
        alt: project.title,
      },
    ],
    type: "article",
    url: `${BASE_URL}${project.href}`,
    publishedTime: project.date,
  },
  twitter: {
    card: "summary_large_image",
    title: project.title,
    description: project.description,
    images: [project.imageUrl],
  },
  alternates: {
    canonical: `${BASE_URL}${project.href}`,
  },
});

/**
 * Generate blog post-specific metadata
 */
export const generateBlogPostMetadata = (post: {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  publishedAt?: string;
  tags?: string[];
}): Metadata => ({
  title: post.title,
  description: post.description,
  keywords: [
    ...(post.tags || []),
    "blog post",
    "article",
    "web development",
    NAME.toLowerCase().replace(/\s+/g, "-"),
  ],
  openGraph: {
    title: post.title,
    description: post.description,
    images: [
      {
        url: post.imageUrl,
        width: 1200,
        height: 630,
        alt: post.title,
      },
    ],
    type: "article",
    url: `${BASE_URL}${post.href}`,
    publishedTime: post.publishedAt,
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: post.description,
    images: [post.imageUrl],
  },
  alternates: {
    canonical: `${BASE_URL}${post.href}`,
  },
});

/**
 * JSON-LD structured data for the homepage (WebSite schema)
 */
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: NAME,
  description: BIO,
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

/**
 * JSON-LD structured data for a person (for the homepage)
 */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: NAME,
  alternateName: NICKNAME,
  description: BIO,
  jobTitle: STRUCTURED_DATA.person.jobTitle,
  url: BASE_URL,
  sameAs: STRUCTURED_DATA.person.sameAs,
  knowsAbout: STRUCTURED_DATA.technologies,
  worksFor: {
    "@type": "Organization",
    name: "Freelancer",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: STRUCTURED_DATA.countryCode,
    addressLocality: STRUCTURED_DATA.locationString,
  },
};

/**
 * JSON-LD structured data for skill set (for the homepage)
 */
export const skillsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${BASE_URL}/#skills`,
  name: "Skills",
  itemListElement: STRUCTURED_DATA.technologies.map((tech, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: tech,
    url: `${BASE_URL}/#skills`,
  })),
};

/**
 * Generates JSON-LD structured data for FAQ
 */
export const generateFaqJsonLd = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
