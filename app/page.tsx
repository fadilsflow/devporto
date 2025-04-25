import { Metadata } from "next";
import {
  AVAILABLE_FOR_WORK,
  EDUCATION_ITEM,
  NAME,
  WORK_EXPERIENCE_ITEM,
} from "./data";
import { ProjectGrid } from "@/components/project-grid";
import { projects } from "./data";
import Header from "@/components/header";
import { GitHubStats } from "@/components/github-stats";
import Status from "@/components/status";
import { BlogPosts } from "@/components/posts";
import { calculateStats, getGitHubStats } from "@/lib/github";
import { Skills } from "@/components/skills";
import ResumeCard from "@/components/resume-card";

export const metadata: Metadata = {
  title: `${NAME} | Full Stack Developer`,
  description:
    "Personal portfolio website showcasing my projects and experience as a full stack developer.",
};

export default async function Home() {
  const { contributions } = await getGitHubStats();
  const { totalContributions, maxInDay, bestStreak } =
    calculateStats(contributions);

  return (
    <div className="min-h-screen relative max-w-3xl mx-auto">
      <main className="max-w-7xl mx-auto  rounded-lg  relative space-y-4">
        {/* Hero Section */}
        <section>
          <div className="p-8">
            <Header />
          </div>
        </section>

        {/* Status Section */}
        <section>
          <Status isAvailable={AVAILABLE_FOR_WORK} />
        </section>

        {/* Tech Stack Section */}
        <section className=" p-8 flex flex-col gap-4 border rounded-lg">
          <h2 className="text-sm font-mono uppercase font-bold tracking-wider">
            Tech Stack
          </h2>
          <Skills />
        </section>

        {/* GitHub Activity Section */}
        <section className=" p-8 flex flex-col gap-4 border rounded-lg">
          <h2 className="text-sm font-mono uppercase font-bold tracking-wider">
            GitHub Contributions
          </h2>
          <GitHubStats
            totalContributions={totalContributions}
            maxInDay={maxInDay}
            bestStreak={bestStreak}
          />
        </section>

        {/* Work Experience Section */}
        <section className=" p-8 flex flex-col gap-4 border rounded-lg">
          <h2 className="text-sm font-mono uppercase font-bold tracking-wider">
            Work Experience
          </h2>
          <ResumeCard
            items={WORK_EXPERIENCE_ITEM.map((item) => ({
              title: item.title,
              subtitle: item.company,
              period: item.period,
              description: item.description,
            }))}
          />
        </section>

        {/* Education Section */}
        <section className=" p-8 flex flex-col gap-4 border rounded-lg">
          <h2 className="text-sm font-mono uppercase font-bold tracking-wider">
            Education
          </h2>
          <ResumeCard
            items={EDUCATION_ITEM.map((item) => ({
              title: item.education,
              subtitle: item.degree,
              period: item.period,
            }))}
          />
        </section>

        {/* Projects Section */}
        <section className=" p-8 flex flex-col gap-4 border rounded-lg">
          <h2 className="text-sm font-mono pb-3 uppercase font-bold tracking-wider">
            Featured Projects
          </h2>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl -z-10 opacity-50" />
            <ProjectGrid projects={projects} showAll={false} />
          </div>
        </section>

        {/* Blog Section */}
        <section className=" p-8 flex flex-col gap-4 border rounded-lg">
          <h2 className="text-sm font-mono pb-3 uppercase font-bold tracking-wider">
            Blog
          </h2>
          <BlogPosts />
        </section>
      </main>
    </div>
  );
}
