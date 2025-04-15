// components/BentoGrid.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '@/app/data';
import Link from 'next/link';

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
                                <div className="relative aspect-[16/9] overflow-hidden bg-muted ">
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                
                                {/* Content */}
                                <div className="space-y-1 uppercase">
                                    <div className="flex font-mono items-center justify-between">
                                        <h3 className="text-xs  ">
                                            {project.title}
                                        </h3>

                                    </div>
                                    <p className="text-xs text-muted-foreground line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                    </Link>
                ))}
            </div>

    );
}; 