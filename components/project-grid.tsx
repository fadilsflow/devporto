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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {projects.map((project) => (
        <Link
          href={project.href}
          key={project.id}
          className="group relative block overflow-hidden rounded-lg border  hover:brightness-80 transition-all"
        >
          <div className="p-4 space-y-4">
            {/* Image Container */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg ">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-2">
              <h3 className="text-base font-medium ">{project.title}</h3>
              <p className="text-sm line-clamp-2">{project.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
