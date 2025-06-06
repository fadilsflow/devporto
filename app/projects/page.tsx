import AnimatedSection from "@/components/animated-section";
import { NICKNAME, PROJECTS } from "../data";
import { ProjectGrid } from "@/components/project-grid";

export default function ProjectsPage() {
  return (
    <AnimatedSection delay={0.3}>
    <div className="relative max-w-3xl mx-auto ">
      <main className="max-w-3xl mx-auto relative space-y-4">
        
        <section className="flex flex-col gap-8 ">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">
              {NICKNAME}&apos;s Projects
            </h1>
            <p
              className="text-lg text-muted-foreground "
            >
              A collection of my projects and work. Each project showcases
              different aspects of my skills and experience in web development,
              design, and problem-solving.
            </p>
          </div>

          <div className="relative border-t border-border border-dashed pt-8">
              <ProjectGrid projects={PROJECTS} showAll={true} />
          </div>
        </section>
      </main>
    </div>
        </AnimatedSection>
  );
}
