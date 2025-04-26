import { Metadata } from "next";
import {
  NAME,
  BIO,
  BASE_URL,
  SEO_CONFIG,
  STRUCTURED_DATA,
  FAVICONS,
  JOB,
  NICKNAME,
} from "../data";

/**
 * Default metadata for the site
 */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: SEO_CONFIG.titleTemplate,
  },
  description: BIO,
  keywords: [
    "portfolio",
    "developer",
    "fullstack",
    "web development",
    "software engineer",
    "react",
    "nextjs",
    "typescript",
    "javascript",
    "frontend developer",
    "backend developer",
  ],
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
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
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
  title: `${NAME} | ${JOB}`,
  description:
    "Full Stack Developer Portfolio showcasing projects, skills, and experience",
  keywords: [
    "portfolio",
    "developer portfolio",
    "full stack developer",
    NAME,
    "web development",
    ...STRUCTURED_DATA.technologies,
  ],
  openGraph: {
    title: `${NAME} | ${JOB}`,
    description: BIO,
    images: [
      {
        url: "/og-image.jpg",
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
  description:
    "Explore my portfolio of web development projects and case studies",
  keywords: [
    "web projects",
    "portfolio projects",
    "case studies",
    "web development projects",
    "coding projects",
    ...STRUCTURED_DATA.technologies,
  ],
  openGraph: {
    title: `Projects | ${NAME}`,
    description:
      "Explore my portfolio of web development projects and case studies",
    images: [
      {
        url: "/projects-og.jpg",
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
  description:
    "Read my thoughts on web development, programming, and technology",
  keywords: [
    "web development blog",
    "programming articles",
    "tech blog",
    "coding tutorials",
    "software development insights",
    ...STRUCTURED_DATA.technologies,
  ],
  openGraph: {
    title: `Blog | ${NAME}`,
    description:
      "Read my thoughts on web development, programming, and technology",
    images: [
      {
        url: "/blog-og.jpg",
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
  description: "Collection of useful links and resources for web developers",
  keywords: [
    "useful links",
    "web development resources",
    "developer tools",
    "programming resources",
    "tech links",
  ],
  openGraph: {
    title: `Links | ${NAME}`,
    description: "Collection of useful links and resources for web developers",
    images: [
      {
        url: "/links-og.jpg",
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
