import { notFound } from "next/navigation";
import Image from "next/image";
import { BASE_URL, NAME, PROJECTS } from "@/app/data";
import { Button } from "@/components/ui/button";
import type { Metadata, ResolvingMetadata } from "next";
import Script from "next/script";
import { defaultViewport } from "@/app/config/viewport";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

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
    title: `${project.title} | Portfolio Project`,
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
      canonical: `https://porto.fadils.xyz/projects/${slug}`,
    },
  };
}

export const viewport = defaultViewport;

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
      <article className="min-h-screen relative max-w-3xl mx-auto">
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
                <p className="text-sm text-muted-foreground capitalize tracking-wide mt-2">
                  {project.category}
                </p>
              </div>
            </header>

            {/* Project Details */}
            <section className="flex flex-col bg-muted/5 rounded-lg">
              {/* Role */}
              <div className="mb-3 flex justify-between border-b">
                <h2 className="capitalize tracking-wider text-muted-foreground text-xs">
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
              <div className="mb-3 flex justify-between border-b">
                <h2 className="capitalize tracking-wider text-muted-foreground text-xs mb-3">
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
              <div className="mb-3 flex justify-between border-b">
                <h2 className="capitalize tracking-wider text-muted-foreground text-xs mb-3">
                  Duration
                </h2>
                <p className="text-sm text-muted-foreground">
                  {project.duration}
                </p>
              </div>

              {/* Tools */}
              <div className="mb-3 flex justify-between border-b">
                <h2 className="capitalize tracking-wider text-muted-foreground text-xs mb-3">
                  Tools
                </h2>
                <div className="flex flex-wrap gap-2 text-muted-foreground">
                  {project.tools.map((tool, index) => (
                    <p key={index} className="text-xs">
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
                    <span className="capitalize text-sm">
                      {project.ctaButtons.primary.label}
                    </span>
                  </a>
                </Button>
              )}
              {project.ctaButtons.secondary.href && (
                <Button asChild variant="outline">
                  <a
                    href={project.ctaButtons.secondary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span className="capitalize text-sm">
                      {project.ctaButtons.secondary.label}
                    </span>
                  </a>
                </Button>
              )}
            </div>

            {/* Project Description */}
            <div className="space-y-4">
              <div className="prose prose-lg max-w-none">
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <p className="text-sm text-muted-foreground">
                  {project.content}
                </p>
              </div>
            </div>
          </section>
        </main>
      </article>
    </>
  );
}
