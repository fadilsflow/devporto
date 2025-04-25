import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-8"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Back to Projects</span>
      </Link>

      {/* Project Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {project.title}
        </h1>
        <p className="text-sm text-muted-foreground uppercase tracking-wide font-mono">
          {project.category}
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative aspect-video overflow-hidden rounded-xl mb-12 shadow-lg">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Project Description */}
        <div className="lg:col-span-2 space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground">
              {project.description}
            </p>
            <p className="text-lg">{project.content}</p>
          </div>
        </div>

        {/* Right Column - Project Details */}
        <div className="space-y-8">
          {/* Project Details Grid */}
          <div className="grid grid-cols-2 gap-8 p-6 bg-muted/5 rounded-lg">
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
              <div className="space-y-2">
                {project.tools.map((tool, index) => (
                  <p key={index} className="text-sm font-medium">
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            {project.ctaButtons.primary.href && (
              <Button asChild className="w-full" variant="default">
                <Link
                  href={project.ctaButtons.primary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span className="uppercase font-mono text-sm">
                    {project.ctaButtons.primary.label}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            )}
            {project.ctaButtons.secondary.href && (
              <Button asChild className="w-full" variant="outline">
                <Link
                  href={project.ctaButtons.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span className="uppercase font-mono text-sm">
                    {project.ctaButtons.secondary.label}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
