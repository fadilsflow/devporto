import AnimatedSection from "@/components/animated-section";
import { NICKNAME } from "../data";
import ServicesSection from "@/components/services-section";

export default function ProjectsPage() {
  return (
    <AnimatedSection delay={0.3}>
      <div >
        <main className=" relative space-y-4">
          <section className="flex flex-col gap-8 ">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight">
                {NICKNAME}&apos;s Services
              </h1>
              <p className="text-lg text-muted-foreground ">
Membangun aplikasi web modern dengan teknologi terkini seperti Next.js, TypeScript, dan Tailwind CSS untuk bisnis dan kebutuhan pribadi Anda.

              </p>
            </div>

           <ServicesSection/>
          </section>
        </main>
      </div>
    </AnimatedSection>
  );
}
