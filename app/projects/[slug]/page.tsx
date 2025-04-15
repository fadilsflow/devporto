import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/app/data';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.href === `/projects/${params.slug}`);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen relative px-4 md:px-6 lg:px-8 py-12">
      <main className="space-y-12">
     

   

        {/* Project Image */}
        <div className="relative aspect-[16/9] overflow-hidden ">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
     {/* Project Header */}
     <section className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-serif">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {project.description}
            </p>
          </div>
        </section>
        {/* Project Details */}
        <section className="space-y-8">
          {/* Tech Stack */}
          <div className="space-y-4">
            <h2 className="font-mono text-sm text-muted-foreground">
              ◆ [TECH STACK]
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-sm px-3 py-1 bg-muted rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-4">
            <h2 className="font-mono text-sm text-muted-foreground">
              ◆ [DESCRIPTION]
            </h2>
            <div className="prose prose-sm dark:prose-invert">
              <p>{project.content}</p>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h2 className="font-mono text-sm text-muted-foreground">
              ◆ [LINKS]
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>GitHub</span>
                  <span className="ml-1">↗</span>
                </Link>
              )}
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>Live Preview</span>
                  <span className="ml-1">↗</span>
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 