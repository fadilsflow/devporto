import AnimatedSection from "@/components/animated-section";
import { NICKNAME } from "../data";

export default function ProjectsPage() {
  return (
    <AnimatedSection delay={0.3}>
      <div className="relative max-w-3xl mx-auto ">
        <main className="max-w-3xl mx-auto relative space-y-4">
          <section className="flex flex-col gap-8 ">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight">
                {NICKNAME}&apos;s Resume
              </h1>
              <p className="text-lg text-muted-foreground ">
                A brief look at my skills, experience, and journey.
              </p>
            </div>

            <div className="relative border-t border-border border-dashed pt-8">
              <iframe
                src="https://drive.google.com/file/d/1pPmMkBtYGP_LRZViUmC31xWCDqoZ5LG1/preview"
                allow="autoplay"
                className="rounded-lg w-full h-[1000px]"
              ></iframe>
            </div>
          </section>
        </main>
      </div>
    </AnimatedSection>
  );
}
