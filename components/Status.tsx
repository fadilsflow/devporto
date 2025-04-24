import { UserRoundIcon, CircleSlashIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusProps {
  isAvailable?: boolean;
  className?: string;
}

export default function Status({ isAvailable = true, className }: StatusProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5",
        "border rounded-md px-4 py-2",
        "animate-pulse",
        isAvailable
          ? "dark:bg-green-950/30 border-green-800/40 text-green-500"
          : "dark:bg-red-950/30 border-red-800/40 text-red-500",
        className
      )}
    >
      {isAvailable ? (
        <UserRoundIcon className="w-4 h-4 text-green-500" />
      ) : (
        <CircleSlashIcon className="w-4 h-4 text-red-500" />
      )}
      <p className="text-sm font-medium">
        {isAvailable ? "Available for work" : "Not available"}
      </p>
    </div>
  );
}
