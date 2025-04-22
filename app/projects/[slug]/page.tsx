import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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

    
    <main>
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{project.title}</h1>
          <p className="text-sm text-muted-foreground uppercase tracking-wide font-mono">
            {project.category}
          </p>
        </div>
        
        {/* Hero Image */}
        <div className="relative aspect-video overflow-hidden rounded-lg mb-12 shadow-md">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-[1400px] mx-auto pt-3 ">
          {/* Project Header */}
        <div className="flex flex-col gap-8 ">
            {/* Left Column - Title */}
              <div className="flex flex-col gap-4 ">
                <p className="text-md font-medium">
                  {project.description}
                </p>
                <p className="text-md font-medium">
                  {project.content}
                </p>  
              </div>
            {/* Right Column */}
            <div className=" space-y-8 flex flex-col " >
              

              {/* Project Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
                {/* Role */}
                <div>
                  <h3 className="uppercase tracking-wider font-mono text-muted-foreground text-xs">ROLE</h3>
                  <div className="space-y-2 text-xl font-medium">
                    {project.role.map((role, index) => (
                      <p key={index} className="text-sm">{role}</p>
                    ))}
                  </div>
                </div>
                
                {/* Collaborators */}
                <div>
                  <h3 className="uppercase tracking-wider font-mono  text-muted-foreground text-xs">COLLABORATORS</h3>
                  <div className="space-y-2">
                    {project.collaborators.map((collaborator, index) => (
                      <p key={index} className="text-sm font-medium">{collaborator}</p>
                    ))}
                  </div>
                </div>
                
                {/* Duration */}
                <div>
                  <h3 className="uppercase tracking-wider font-mono  text-muted-foreground text-xs">DURATION</h3>
                  <p className="text-sm font-medium">{project.duration}</p>
                </div>
                
                {/* Tools */}
                <div>
                  <h3 className="uppercase tracking-wider font-mono text-muted-foreground text-xs">TOOLS</h3>
                  <div className="space-y-2">
                    {project.tools.map((tool, index) => (
                      <p key={index} className="text-sm font-medium">{tool}</p>
                    ))}
                  </div>
                </div>
              </div>

              
              {/* Action Buttons */}
              <div className="flex flex-col lg:flex-row gap-4 w-full ">
                <div className="flex flex-wrap gap-4 w-full ">
                  {project.CTA_BUTTON_1.href && (
                    <Button asChild className="w-full" variant="secondary" >
                      <Link 
                    href={project.CTA_BUTTON_1.href} 
                    target="_blank"
                    rel="noopener noreferrer"

                  >
                    <span className="uppercase font-mono text-sm">{project.CTA_BUTTON_1.label}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  </Button>
                )}
                </div>
                <div className="flex flex-wrap gap-4 w-full ">
                {project.CTA_BUTTON_2.href && (
                  <Button asChild className="w-full" variant="secondary">
                    <Link 
                    href={project.CTA_BUTTON_2.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="uppercase font-mono text-sm">{project.CTA_BUTTON_2.label}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  </Button>
                  )}
                  </div>
              </div>
            </div>
          </div>
        </div>
      <Link href="/" className="  flex items-center gap-2  mt-20 text-muted-foreground hover:text-primary transition-colors duration-300"><ChevronLeft/>Back</Link>
      </main>

  );
}