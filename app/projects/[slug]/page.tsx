
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data";

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
    <div className="min-h-screen bg-black text-white px-20">
      <main className="container mx-auto py-12  space-y-5">
      <div className="relative aspect-[16/9] overflow-hidden  ">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        {/* Project Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Left Column - Title */}
          <div className="col-span-1">
            <h1 className="text-4xl font-bold mb-4">AIGA HUE</h1>
            <p className="text-gray-400 uppercase tracking-wider font-mono text-sm">
              INTERACTIVE DATA<br />VISUALIZATION
            </p>
          </div>
          
          {/* Middle Column - Description */}
          <div className="col-span-1">
            <p className="text-base mb-4">
              AIGA Hue is a desktop web experience that visualizes career data from the 2019 AIGA Design Census in a playful and informative manner. The recent over-saturation of interest in certain design fields has resulted in skewed
            </p>
          </div>
          
          {/* Right Column - Additional Info */}
          <div className="col-span-1">
            <p className="text-base">
              perceptions of neighboring creative industries. This project strives to break those stereotypes by providing a holistic understanding of the creative industry and all the viable career options that exist.
            </p>
          </div>
        </div>
        
        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {/* Role */}
          <div>
            <h3 className="text-gray-400 uppercase tracking-wider font-mono text-sm mb-2">ROLE</h3>
            <p>Frontend Developer</p>
            <p>Visual Designer</p>
          </div>
          
          {/* Collaborators */}
          <div>
            <h3 className="text-gray-400 uppercase tracking-wider font-mono text-sm mb-2">COLLABORATORS</h3>
            <p>Kyuha Shim (advisor)</p>
            <p>Langston Wells</p>
            <p>Stefanie Suk</p>
          </div>
          
          {/* Duration */}
          <div>
            <h3 className="text-gray-400 uppercase tracking-wider font-mono text-sm mb-2">DURATION</h3>
            <p>8 weeks</p>
          </div>
          
          {/* Tools */}
          <div>
            <h3 className="text-gray-400 uppercase tracking-wider font-mono text-sm mb-2">TOOLS</h3>
            <p>HTML/CSS/JS</p>
            <p>Figma</p>
            <p>Cinema4D</p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="#" className="bg-neutral-900 hover:bg-neutral-800 transition-all border border-neutral-700 rounded-md p-6 flex justify-between items-center">
            <span className="uppercase font-mono">VIEW LIVE WEBSITE</span>
            <span className="text-xl">→</span>
          </Link>
          <Link href="#" className="bg-neutral-900 hover:bg-neutral-800 transition-all border border-neutral-700 rounded-md p-6 flex justify-between items-center">
            <span className="uppercase font-mono">VIEW COMPLETE DOCUMENTATION</span>
            <span className="text-xl">→</span>
          </Link>
        </div>
      </main>
    </div>
  );
}