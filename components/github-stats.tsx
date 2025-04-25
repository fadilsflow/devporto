"use client";
import Reactgithubcalendar from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { GITHUB_USERNAME } from "@/app/data";

type GitHubStatsProps = {
  totalContributions: number;
  maxInDay: number;
  bestStreak: number;
};

export function GitHubStats({
  totalContributions,
  maxInDay,
  bestStreak,
}: GitHubStatsProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const colorScheme = resolvedTheme === "dark" ? "dark" : "light";

  return (
    <div className="flex flex-col gap-4 text-left">
      <div className="grid grid-cols-3 gap-4 p-4">
        <StatCard
          value={totalContributions}
          label="Total Contributions"
          description="Last 12 months"
        />
        <StatCard
          value={maxInDay}
          label="Max in Day"
          description="Most active day"
        />
        <StatCard
          value={bestStreak}
          label="Best Streak"
          description="Consecutive days"
        />
      </div>
      <div className="mt-4 p-4">
        <Reactgithubcalendar
          username={GITHUB_USERNAME}
          colorScheme={colorScheme}
          blockRadius={2}
          blockSize={10}
          blockMargin={4}
          fontSize={12}
          hideColorLegend
        />
      </div>
      <p className="text-xs text-muted-foreground text-center">
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {GITHUB_USERNAME}&apos;s contribution activity (updated daily)
        </a>
      </p>
    </div>
  );
}

type StatCardProps = {
  value: number;
  label: string;
  description: string;
};

function StatCard({ value, label, description }: StatCardProps) {
  return (
    <div className="flex flex-col items-start justify-start gap-1 text-left">
      <p
        className={cn(
          "text-base md:text-lg font-bold",
          "text-green-600 dark:text-green-500"
        )}
      >
        {value}
      </p>
      <p className="text-xs md:text-sm font-medium text-foreground">{label}</p>
      <p className="text-[10px] md:text-xs text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
