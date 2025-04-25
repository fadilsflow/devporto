import { Metadata } from "next";
import { projects } from "../data";
import { ProjectGrid } from "@/components/project-grid";

export const metadata: Metadata = {
  title: "Projects | Fadil's Portfolio",
  description: "A collection of my projects and work.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen relative max-w-3xl mx-auto">
      <main className="max-w-7xl mx-auto rounded-lg relative space-y-4">
        <section className="p-8 flex flex-col gap-4 border rounded-lg">
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="text-muted-foreground">
            A collection of my projects and work. Each project showcases
            different aspects of my skills and experience.
          </p>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl -z-10 opacity-50" />
            <ProjectGrid projects={projects} />
          </div>
        </section>
      </main>
    </div>
  );
}
