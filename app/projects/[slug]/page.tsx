import { notFound } from "next/navigation";
import Image from "next/image";

import { projects } from "@/app/data";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { XClose } from "@/components/x-close";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.href === `/projects/${slug}`);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen relative max-w-3xl mx-auto">
      <main className="max-w-7xl mx-auto rounded-lg relative space-y-4">
        <section className="flex flex-col gap-8">
          {/* Project Header */}
          <div className="space-y-4">
            <div className="flex justify-end">
              <XClose href="/projects" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                {project.title}
              </h1>
              <p className="text-sm text-muted-foreground uppercase tracking-wide font-mono mt-2">
                {project.category}
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Project Description */}
          <div className="space-y-4">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground">
                {project.description}
              </p>
              <p className="text-lg">{project.content}</p>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-muted/5 rounded-lg">
            {/* Role */}
            <div>
              <h3 className="uppercase tracking-wider font-mono text-muted-foreground text-xs mb-3">
                ROLE
              </h3>
              <div className="space-y-2">
                {project.role.map((role, index) => (
                  <p key={index} className="text-sm font-medium">
                    {role}
                  </p>
                ))}
              </div>
            </div>

            {/* Collaborators */}
            <div>
              <h3 className="uppercase tracking-wider font-mono text-muted-foreground text-xs mb-3">
                COLLABORATORS
              </h3>
              <div className="space-y-2">
                {project.collaborators.map((collaborator, index) => (
                  <p key={index} className="text-sm font-medium">
                    {collaborator}
                  </p>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <h3 className="uppercase tracking-wider font-mono text-muted-foreground text-xs mb-3">
                DURATION
              </h3>
              <p className="text-sm font-medium">{project.duration}</p>
            </div>

            {/* Tools */}
            <div>
              <h3 className="uppercase tracking-wider font-mono text-muted-foreground text-xs mb-3">
                TOOLS
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="text-xs font-mono px-2 py-1 bg-muted/10 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            {project.ctaButtons.primary.href && (
              <Button asChild className="w-full" variant="default">
                <a
                  href={project.ctaButtons.primary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span className="uppercase font-mono text-sm">
                    {project.ctaButtons.primary.label}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </Button>
            )}
            {project.ctaButtons.secondary.href && (
              <Button asChild className="w-full" variant="outline">
                <a
                  href={project.ctaButtons.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span className="uppercase font-mono text-sm">
                    {project.ctaButtons.secondary.label}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
