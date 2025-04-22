import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data";
import { ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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
    <div>
      {/* Floating Header - will be visible on scroll */}
      
      <main className="container mx-auto px-4 md:px-6 lg:px-20 ">
        {/* Hero Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="max-w-[1400px] mx-auto pt-3">
          {/* Project Header */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 ">
            {/* Left Column - Title */}
           <div className="lg:w-1/3 lg:sticky lg:top-20 h-fit col-span-full md:col-end-4 font-mono  ">
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold ">{project.title}</h1>
              <p className="uppercase tracking-wider text-sm text-muted-foreground">
                {project.category}
              </p> 
            </div>

            {/* Right Column */}
            <div className="lg:w-2/3 space-y-8 " >
              <div className="grid md:grid-cols-2 gap-8  ">
                <p className="text-md font-medium">
                  {project.description}
                </p>
                <p className="text-md font-medium">
                  {project.content}
                </p>
              </div>
              

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.CTA_BUTTON_1.href && (
                  <Link 
                    href={project.CTA_BUTTON_1.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all border bg-card hover:bg-card/80 rounded-md p-6 flex justify-between items-center"
                  >
                    <span className="uppercase font-mono text-sm">{project.CTA_BUTTON_1.label}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                )}
                {project.CTA_BUTTON_2.href && (
                  <Link 
                    href={project.CTA_BUTTON_2.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all border   bg-card hover:bg-card/80 rounded-md p-6 flex justify-between items-center"
                  >
                    <span className="uppercase font-mono text-sm">{project.CTA_BUTTON_2.label}</span>
                    <ChevronRight className="w-4 h-4" />
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