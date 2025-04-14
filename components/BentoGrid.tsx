// components/BentoGrid.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '@/app/data';
import Link from 'next/link';

interface ProjectGridProps {
    projects?: Project[];
}

export const BentoGrid: React.FC<ProjectGridProps> = ({ projects = [] }) => {
    if (!projects || projects.length === 0) return null;

    // Membagi proyek menjadi 3 kolom
    const columns = Array.from({ length: 3 }, (_, i) =>
        projects.filter((_, index) => index % 3 === i)
    );

    return (
        <div className="w-full border ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {columns.map((column, colIndex) => (

                    <Link href={column[0].href} key={colIndex}>
                        <div className="grid gap-4">
                            {column.map((project) => (
                                <div key={project.id} className="group">
                                    <div className="w-full aspect-[4/3] border border-dashed p-3">
                                        <div id='imageprojext' className="relative bg-muted w-full h-full">
                                            <Image
                                                src={project.imageUrl}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="mt-2 space-y-1">
                                            <h3 className="text-sm font-medium text-foreground">{project.title}</h3>
                                            <p className="text-xs text-muted-foreground">{project.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}; 