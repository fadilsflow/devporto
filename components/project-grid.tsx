// components/BentoGrid.tsx
"use client";

import React from "react";
import Image from "next/image";
import { projects } from "@/app/data";
import Link from "next/link";
import { Badge } from "./ui/badge";

interface ProjectGridProps {
  projects?: typeof projects;
  showAll?: boolean;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects: allProjects = [],
  showAll = false,
}) => {
  if (!allProjects || allProjects.length === 0) return null;

  // If showAll is false, only show 2 projects
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 2);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {displayedProjects.map((project) => (
          <Link
            href={project.href}
            key={project.id}
            className="group relative block overflow-hidden  hover:brightness-80 transition-all"
          >
            <div className=" space-y-4">
              {/* Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden ">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-base font-medium">{project.title}</h3>
                <p className="text-sm line-clamp-2">{project.description}</p>
                {project.tags && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {!showAll && (
        <Link
          href="/projects"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View all projects →
        </Link>
      )}
    </div>
  );
};
