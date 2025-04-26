// components/BentoGrid.tsx
"use client";

import React from "react";
import Image from "next/image";
import { PROJECTS } from "@/app/data";
import Link from "next/link";
import { Badge } from "./ui/badge";

interface ProjectGridProps {
  projects?: typeof PROJECTS;
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
            className="group relative block overflow-hidden hover:brightness-90 transition-all"
          >
            <div className="space-y-3 border rounded-lg overflow-hidden">
              {/* Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-medium">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags &&
                    project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                </div>
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
