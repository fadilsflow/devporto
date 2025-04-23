import Reactgithubcalendar from "react-github-calendar";


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
  return (

      <div className="flex flex-col gap-4 text-left">
        <div className="grid grid-cols-3 gap-4  rounded-lg p-4">
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
        <div className="mt-4">
          <Reactgithubcalendar
            username="fadilsflow"
            blockRadius={0}
            blockSize={10}
            blockMargin={5} 
          />
        </div>
        <p className="text-xs text-muted-foreground text-center">
          @fadilsflow's contribution activity (updated daily)
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
      <p className="text-base md:text-lg font-bold text-green-500">{value}</p>
      <p className="text-xs md:text-sm font-medium">{label}</p>
      <p className="text-[10px] md:text-xs text-muted-foreground">{description}</p>
    </div>
  );
}
