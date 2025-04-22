import { Metadata } from "next";
import { NAME, EMAIL, BIO } from "./data";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "./data";
import NewsLetter from "@/components/news-letter";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: `${NAME} | Full Stack Developer`,
  description: "Personal portfolio website showcasing my projects and experience as a full stack developer.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <main >
        <div className=" mx-auto space-y-24">
          {/* Hero Section */}
          <section className="space-y-12">
            <Header />
            
            {/* Bio Section */}
            <div className="space-y-8">
              <p className="text-lg md:text-md font-light  leading-relaxed ">
                {BIO}
              </p>
              
              <a 
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-2 text-md font-light   hover:text-primary transition-colors"
                aria-label="Send me an email"
              >
                <span>Interested in working together?</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </section>

          {/* Projects Section */}
          <section className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl -z-10 opacity-50" />
              <ProjectGrid projects={projects} />
            </div>
          </section>

          {/* Newsletter Section */}
          <NewsLetter />
        </div>
      </main>
    </div>
  );
}
