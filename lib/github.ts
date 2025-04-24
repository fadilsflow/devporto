import { GITHUB_USERNAME } from "@/app/data";

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type GitHubStats = {
  total: Record<string, number>;
  contributions: Contribution[];
};

export async function getGitHubStats(): Promise<GitHubStats> {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return {
      total: {},
      contributions: [],
    };
  }
}

export function calculateStats(contributions: Contribution[]) {
  const twelveMonthsAgo = new Date();
  twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);

  const recentContributions = contributions.filter((contribution) => {
    const contributionDate = new Date(contribution.date);
    return contributionDate >= twelveMonthsAgo;
  });

  const totalContributions = recentContributions.reduce(
    (sum, contribution) => sum + contribution.count,
    0,
  );

  const maxInDay = Math.max(
    ...recentContributions.map((contribution) => contribution.count),
  );

  const bestStreak = calculateBestStreak(recentContributions);

  return {
    totalContributions,
    maxInDay,
    bestStreak,
  };
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
