import { Metadata } from "next";
import { NICKNAME, projects } from "../data";
import { ProjectGrid } from "@/components/project-grid";

export const metadata: Metadata = {
  title: "Projects | Fadil's Portfolio",
  description: "A collection of my projects and work.",
};

export default function ProjectsPage() {
  return (
    <div className="relative max-w-3xl mx-auto ">
      <main className="max-w-3xl mx-auto relative space-y-4">
        <section className="flex flex-col gap-8 ">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">{NICKNAME}&apos;s Projects</h1>
            <p
              className="text-lg t
xt-muted-fordifferentax-w-2xl"
            >
              A collection of my projects and work. Each project showcases
              different aspects of my skills and experience in web development,
              design, and problem-solving.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl -z-10 opacity-50" />
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-mono uppercase font-bold tracking-wider">
                  All Projects
                </h2>
              </div>
              <ProjectGrid projects={projects} showAll={true} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
