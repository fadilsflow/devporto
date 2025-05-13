import { notFound } from "next/navigation";
import Image from "next/image";
import { BASE_URL, NAME, PROJECTS } from "@/app/data";
import { Button } from "@/components/ui/button";
import type { Metadata, ResolvingMetadata } from "next";
import Script from "next/script";
import { defaultViewport } from "@/app/config/viewport";
import AnimatedSection from "@/components/animated-section";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Set export const dynamic = "error" to force static generation
export const dynamic = "error";
// Disable dynamic rendering
export const dynamicParams = false;

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.href === `/projects/${slug}`);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${project.title} | ${NAME}`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.imageUrl, ...previousImages],
      type: "article",
      publishedTime: new Date().toISOString(),
      authors: NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.imageUrl],
    },
    alternates: {
      canonical: `${BASE_URL}/projects/${slug}`,
    },
  };
}

export const viewport = defaultViewport;

// Generate static paths at build time
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.href.split("/").pop() || "",
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.href === `/projects/${slug}`);

  if (!project) {
    notFound();
  }

  // JSON-LD structured data for project
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: project.title,
    description: project.description,
    image: project.imageUrl,
    datePublished: new Date().toISOString(),
    author: {
      "@type": "Person",
      name: NAME,
    },
    publisher: {
      "@type": "Person",
      name: NAME,
    },
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/projects/${slug}`,
    },
    keywords: [project.category, ...project.tools].join(", "),
    articleSection: "Project",
    about: {
      "@type": "Thing",
      name: project.category,
    },
  };

  return (
    <>
      <Script
        id="project-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimatedSection delay={0.3}>
      <article className="min-h-screen relative max-w-3xl mx-auto border-t border-border border-dashed pt-8">
        <main className="max-w-7xl mx-auto rounded-lg relative space-y-4">
          <section className="flex flex-col gap-8">
            {/* Hero Image */}
            <figure className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </figure>

            {/* Project Header */}
            <header className="space-y-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  {project.title}
                </h1>
                <p className="text-sm text-muted-foreground capitalize  mt-2">
                  {project.description}
                </p>
              </div>
            </header>

            {/* Project Details */}
            <section className="flex flex-col">
              
              {/* Role */}
              <div className="mb-3 flex justify-between border-b border-dashed  ">
                <h2 className="capitalize tracking-wider text-muted-foreground text-sm mb-3">
                  Role
                </h2>
                <div className="space-x-2 flex">
                  {project.role.map((role, index) => (
                    <p key={index} className="text-sm text-muted-foreground">
                      {index === project.role.length - 1 ? role : role + ","}
                    </p>
                  ))}
                </div>
              </div>

              {/* Use Case */}
              <div className="mb-3 flex justify-between border-b border-dashed">
                <h2 className="capitalize tracking-wider text-muted-foreground text-sm mb-3">
                  Use case
                </h2>
                <div className="space-x-2 flex">
                  {project.useCase.map((useCase, index) => (
                    <p key={index} className="text-sm text-muted-foreground">
                      {index === project.useCase.length - 1
                        ? useCase
                        : useCase + ","}
                    </p>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div className="mb-3 flex justify-between border-b border-dashed">
                <h2 className="capitalize tracking-wider text-muted-foreground text-sm mb-3">
                  Duration
                </h2>
                <p className="text-sm text-muted-foreground">
                  {project.duration}
                </p>
              </div>

              {/* Tools */}
              <div className="mb-3 flex justify-between border-b border-dashed">
                <h2 className="capitalize tracking-wider text-muted-foreground text-sm mb-3">
                  Tools
                </h2>
                <div className="flex flex-wrap gap-2 text-muted-foreground">
                  {project.tools.map((tool, index) => (
                    <p key={index} className="text-sm">
                      {index === project.tools.length - 1 ? tool : tool + ","}
                    </p>
                  ))}
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="space-x-4 flex justify-end">
              {project.ctaButtons.primary.href && (
                <Button asChild variant="default">
                  <a
                    href={project.ctaButtons.primary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span className=" text-sm">
                      {project.ctaButtons.primary.label}
                    </span>
                  </a>
                </Button>
              )}age
              {project.ctaButtons.secondary.href && (
                <Button asChild variant="outline">
                  <a
                    href={project.ctaButtons.secondary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span className="text-sm">
                      {project.ctaButtons.secondary.label}
                    </span>
                  </a>
                </Button>
              )}
            </div>

         
          </section>
          <footer className="text-sm border-t border-border border-dashed pt-8  mt-8">
        <Link href="/projects" className="text-primary flex items-center gap-2">
        <ArrowLeftIcon className="w-4 h-4 " /> Back

        </Link>
        </footer>
        </main>
      </article>
      </AnimatedSection>
    </>
  );
}
