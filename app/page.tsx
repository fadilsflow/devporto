import { Metadata } from "next";
import { NAME, EMAIL, BIO } from "./data";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "./data";
import NewsLetter from "@/components/news-letter";
import Header from "@/components/header";
import Reactgithubcalendar from "react-github-calendar";

export const metadata: Metadata = {
  title: `${NAME} | Full Stack Developer`,
  description:
    "Personal portfolio website showcasing my projects and experience as a full stack developer.",
};

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type Total = {
  [key: string]: number;
};

async function getGitHubStats() {
  try {
    const response = await fetch(
      "https://github-contributions-api.jogruber.de/v4/fadilsflow",
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub data");
    }

    const data = await response.json();
    return {
      total: data.total,
      contributions: data.contributions,
    };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return {
      total: {},
      contributions: [],
    };
  }
}

export default async function Home() {
  const { total, contributions } = await getGitHubStats();

  // Calculate stats for last 12 months
  const twelveMonthsAgo = new Date();
  twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);

  const recentContributions = contributions.filter(
    (contribution: Contribution) => {
      const contributionDate = new Date(contribution.date);
      return contributionDate >= twelveMonthsAgo;
    }
  );

  const totalContributions = recentContributions.reduce(
    (sum: number, contribution: Contribution) => sum + contribution.count,
    0
  );
  const maxInDay = Math.max(
    ...recentContributions.map(
      (contribution: Contribution) => contribution.count
    )
  );
  const bestStreak = calculateBestStreak(recentContributions);

  return (
    <div className="min-h-screen border rounded-lg">
      <main>
        <div className="mx-auto">
          {/* Hero Section */}
          <section className="space-y-12">
            <div className="border-b p-8">
              <Header />
            </div>
          </section>

          {/* GitHub Activity Section */}
          <section>
            <div className="border-b p-8 flex flex-col gap-4 text-left">
              <h2 className="text-sm uppercase font-bold">GitHub Activity</h2>
              <div className="flex bg-muted rounded-lg p-4 justify-between">
                <div className="flex flex-col items-center justify-center gap-2">
                  <p className="text-sm font-bold text-green-500">
                    {totalContributions}
                  </p>
                  <p className="text-xs text-muted-foreground">Total</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <p className="text-sm font-bold text-green-500">{maxInDay}</p>
                  <p className="text-xs text-muted-foreground">Max in day</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <p className="text-sm font-bold text-green-500">
                    {bestStreak}
                  </p>
                  <p className="text-xs text-muted-foreground">Best Streak</p>
                </div>
              </div>
              <div className="mt-4">
                <Reactgithubcalendar username="fadilsflow" />
              </div>
              <p className="text-xs text-muted-foreground text-center">
                @fadilsflow's contribution activity (updated daily)
              </p>
            </div>
          </section>

          {/* Projects Section */}
          <section className="space-y-8 px-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl -z-10 opacity-50" />
              <ProjectGrid projects={projects} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function calculateBestStreak(contributions: Contribution[]): number {
  let currentStreak = 0;
  let bestStreak = 0;

  for (const contribution of contributions) {
    if (contribution.count > 0) {
      currentStreak++;
      bestStreak = Math.max(bestStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  }

  return bestStreak;
}
