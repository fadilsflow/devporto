// components/BentoGrid.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/app/data";
import Link from "next/link";

interface ProjectGridProps {
  projects?: Project[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects = [] }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <Link
          href={project.href}
          key={project.id}
          className="group relative block h-full"
        >
          <div className=" space-y-4">
            {/* Image Container */}
            <div className="relative aspect-[16/9] overflow-hidden bg-muted">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-all duration-300 group-hover:brightness-90"
              />
            </div>

            {/* Content */}
            <div className="space-y-1 ">
              <div className="flex  items-center justify-between">
                <h3 className="text-xs capitalize ">{project.title}</h3>
              </div>
              <p className="text-xs capitalize text-muted-foreground line-clamp-2">
                {project.subtitle}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
