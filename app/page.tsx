"use client";


import {
  WORK,
  CONTACT_BIO,
  projects,
} from "./data";

import Link from "next/link";


import { ProjectGrid } from "@/components/ProjectGrid";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative px-4 md:px-6 lg:px-20 py-12">
      <main className="space-y-12">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="space-y-8">
            <div className="flex items-baseline justify-between">
            <div className="space-y-4 text-lg leading-relaxed max-w-4xl">
              <p>
                Fadil <span className="text-muted-foreground">[法迪]</span> is a fullstack developer who loves building innovative digital experiences and creative solutions. He enjoys crafting elegant interfaces and solving complex problems in creative ways. Previously a software engineer <span className="text-muted-foreground">[工程师]</span>.
              </p>
              <p className="text-muted-foreground">
                Currently building at Instagram. Previously engineered solutions at Apple.
              </p>
            </div>
              <span className="font-mono text-sm text-muted-foreground">[1]</span>
          </div>
            </div>
        </section>

        <Separator className="my-12" />

        {/* Main Content Grid */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left Section */}
          <div className="flex-1">
            {/* Contact Section */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-mono text-sm text-muted-foreground">
                  ■ [CONTACT]
                </h2>
                <span className="font-mono text-sm text-muted-foreground">[2]</span>
              </div>
              <div className="space-y-1.5">
                {CONTACT_BIO.map((link, index) => (
                  <div key={link.href} className="group flex items-baseline">

                    <span className="font-mono text-xs text-muted-foreground w-4">{index + 1}</span>
                    <Link 
                      href={link.href}
                      className="w-full hover:text-primary transition-colors flex items-baseline gap-1 justify-between"
                    >
                      <span>{link.label}</span>
                      <span >
                        ↗
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Separator - Hidden on mobile */}
          <div className="hidden md:block">
            <Separator orientation="vertical" className="h-full" />
          </div>

          {/* Horizontal Separator - Shown only on mobile */}
          <div className="md:hidden">
            <Separator className="w-full" />
          </div>

          {/* Right Section */}
          <div className="flex-1">
            {/* Teams Section */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-mono text-sm text-muted-foreground">
                  □ [TEAMS]
                </h2>
                <span className="font-mono text-sm text-muted-foreground">[3]</span>
              </div>
              <div className="space-y-2">
                {WORK.map((work) => (
                  <div key={work.company} className="flex items-baseline justify-between gap-4">
                    <span className="text-sm">{work.company}</span>
                    <span className="text-sm text-muted-foreground font-mono">{work.end ?? "2024-"}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Projects Section */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-sm text-muted-foreground">
              ◆ [PROJECTS]
            </h2>
            <span className="font-mono text-sm text-muted-foreground">[4]</span>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl -z-10 opacity-50" />
            <ProjectGrid projects={projects} />
          </div>
        </section>
      </main>
    </div>
  );
}
