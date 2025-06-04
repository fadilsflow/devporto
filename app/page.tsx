import { homeMetadata, websiteJsonLd } from "./config/seo";
import { defaultViewport } from "./config/viewport";
import {
  AVAILABLE_FOR_WORK,
  EDUCATION_ITEM,
  WORK_EXPERIENCE_ITEM,
} from "./data";
import { ProjectGrid } from "@/components/project-grid";
import { PROJECTS } from "./data";
import Header from "@/components/header";
import { GitHubStats } from "@/components/github-stats";
import { StatusSection } from "@/components/status-section";
import { BlogPosts } from "@/components/posts";
import { calculateStats, getGitHubStats } from "@/lib/github";
import { SkillsSection } from "@/components/skills-section";
import ResumeCard from "@/components/resume-card";
import { BreadNav } from "@/components/bread-nav";
import { ShareButton } from "@/components/share-button";
import Script from "next/script";

import AnimatedSection from "@/components/animated-section";

export const metadata = homeMetadata;
export const viewport = defaultViewport;

export default async function Home() {
  const { contributions } = await getGitHubStats();
  const { totalContributions, maxInDay, bestStreak } =
    calculateStats(contributions);

  return (
    <>
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <div className="min-h-screen relative max-w-3xl mx-auto">
        <main className="max-w-7xl mx-auto rounded-lg relative space-y-4">
          {/* Hero Section */}
          <AnimatedSection delay={0.2}>
            <div className="p-8">
              <Header />
            </div>
          </AnimatedSection>

          {/* Status Section */}
          <AnimatedSection delay={0.3}>
            <StatusSection isAvailable={AVAILABLE_FOR_WORK} />
          </AnimatedSection>

          <AnimatedSection
            delay={0.4}
            className="flex justify-between items-center text-center"
          >
            <BreadNav />
            <div className="flex items-center gap-2">
              <ShareButton />
            </div>
          </AnimatedSection>

          {/* Tech Stack Section */}
          <AnimatedSection
            delay={0.3}
            className="p-8 flex flex-col gap-4 border rounded-lg"
          >
            <h2 className="text-sm font-mono uppercase font-bold tracking-wider">
              Tech Stack
            </h2>
            <SkillsSection />
          </AnimatedSection>

          {/* GitHub Activity Section */}
          <AnimatedSection
            delay={0.3}
            className="p-8 flex flex-col gap-4 border rounded-lg"
          >
            <h2 className="text-sm font-mono uppercase font-bold tracking-wider">
              GitHub Contributions
            </h2>
            <GitHubStats
              totalContributions={totalContributions}
              maxInDay={maxInDay}
              bestStreak={bestStreak}
            />
          </AnimatedSection>

          {/* Work Experience Section */}
          <AnimatedSection
            delay={0.3}
            className="p-8 flex flex-col gap-4 border rounded-lg"
          >
            <h2 className="text-sm font-mono uppercase font-bold tracking-wider">
              Work Experience
            </h2>
            <ResumeCard
              items={WORK_EXPERIENCE_ITEM.map((item) => ({
                title: item.company,
                subtitle: item.role,
                period: item.period,
                description: item.description,
              }))}
            />
          </AnimatedSection>

          {/* Education Section */}
          <AnimatedSection
            delay={0.3}
            className="p-8 flex flex-col gap-4 border rounded-lg"
          >
            <h2 className="text-sm font-mono uppercase font-bold tracking-wider">
              Education
            </h2>
            <ResumeCard
              items={EDUCATION_ITEM.map((item) => ({
                title: item.education,
                subtitle: item.degree,
                period: item.period,
                description: item.description,
              }))}
            />
          </AnimatedSection>

          {/* Projects Section */}
          <AnimatedSection
            delay={0.3}
            className="p-8 flex flex-col gap-4 border rounded-lg"
          >
            <h2 className="text-sm font-mono pb-3 uppercase font-bold tracking-wider">
              Projects
            </h2>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl -z-10 opacity-50" />
              <ProjectGrid projects={PROJECTS} showAll={false} />
            </div>
          </AnimatedSection>

          {/* Blog Section */}
          <AnimatedSection
            delay={0.3}
            className="p-8 flex flex-col gap-4 border rounded-lg"
          >
            <h2 className="text-sm font-mono pb-3 uppercase font-bold tracking-wider">
              Blog
            </h2>
            <BlogPosts />
          </AnimatedSection>
        </main>
      </div>
    </>
  );
}
