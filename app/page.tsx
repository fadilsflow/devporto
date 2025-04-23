import { Metadata } from "next";
import { NAME } from "./data";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "./data";
import Header from "@/components/header";
import { GitHubStats } from "@/components/github-stats";
import { getGitHubStats, calculateStats } from "@/lib/github";


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
    <div className="min-h-screen relative ">
      <main className="max-w-7xl mx-auto  rounded-lg  relative">
        {/* Hero Section */}
        <section>
          <div className="p-8">
            <Header />
          </div>
        </section>

        {/* GitHub Activity Section */}
        <section className=" p-8 flex flex-col gap-4 border rounded-t-lg">
          <h2 className="text-sm font-mono uppercase font-bold tracking-wider">
            GitHub Activity
          </h2>
          <GitHubStats
            totalContributions={totalContributions}
            maxInDay={maxInDay}
            bestStreak={bestStreak}
          />
        </section>

        {/* Projects Section */}
        <section className=" p-8 flex flex-col gap-4 border rounded-b-lg mt-4">
          <h2 className="text-sm font-mono pb-3 uppercase font-bold tracking-wider">
            Featured Projects
          </h2>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl -z-10 opacity-50" />
            <ProjectGrid projects={projects} />
          </div>
        </section>
      </main>
    </div>
  );
}
