import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.href === `/projects/${slug}`);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Floating Header - will be visible on scroll */}
      
      <main className="container mx-auto px-4 md:px-6 lg:px-20">
        {/* Hero Image */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-b-lg">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="max-w-[1400px] mx-auto">
          {/* Project Header */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 py-12px-4 md:px-6 lg:px-20 ">
            {/* Left Column - Title */}
           <div className="lg:w-1/3 lg:sticky lg:top-20 h-fit col-span-full md:col-end-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="uppercase tracking-wider font-mono text-sm text-muted-foreground">
                {project.category}
              </p> 
            </div>

            {/* Right Column */}
            <div className="lg:w-2/3 space-y-8 " >
              <div className="grid md:grid-cols-2 gap-8  ">
                <p className="text-base md:text-lg">
                  {project.description}
                </p>
                <p className="text-base md:text-lg">
                  {project.content}
                </p>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
                {/* Role */}
                <div>
                  <h3 className="uppercase tracking-wider font-mono text-sm text-muted-foreground mb-4">ROLE</h3>
                  <div className="space-y-2">
                    {project.role.map((role, index) => (
                      <p key={index} className="text-sm">{role}</p>
                    ))}
                  </div>
                </div>
                
                {/* Collaborators */}
                <div>
                  <h3 className="uppercase tracking-wider font-mono text-sm text-muted-foreground mb-4">COLLABORATORS</h3>
                  <div className="space-y-2">
                    {project.collaborators.map((collaborator, index) => (
                      <p key={index} className="text-sm">{collaborator}</p>
                    ))}
                  </div>
                </div>
                
                {/* Duration */}
                <div>
                  <h3 className="uppercase tracking-wider font-mono text-sm text-muted-foreground mb-4">DURATION</h3>
                  <p className="text-sm">{project.duration}</p>
                </div>
                
                {/* Tools */}
                <div>
                  <h3 className="uppercase tracking-wider font-mono text-sm text-muted-foreground mb-4">TOOLS</h3>
                  <div className="space-y-2">
                    {project.tools.map((tool, index) => (
                      <p key={index} className="text-sm">{tool}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.liveUrl && (
                  <Link 
                    href={project.liveUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all border bg-card hover:bg-card/80 rounded-md p-6 flex justify-between items-center"
                  >
                    <span className="uppercase font-mono text-sm">MAIN WEBSITE</span>
                    <span className="text-xl">→</span>
                  </Link>
                )}
                {project.githubUrl && (
                  <Link 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all border bg-card hover:bg-card/80 rounded-md p-6 flex justify-between items-center"
                  >
                    <span className="uppercase font-mono text-sm">VIEW SOURCE</span>
                    <span className="text-xl">→</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}