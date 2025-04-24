import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const THEMES_OPTIONS = [
    {
      label: "Light",
      id: "light",
      icon: <SunIcon className="h-4 w-4" />,
    },
    {
      label: "Dark",
      id: "dark",
      icon: <MoonIcon className="h-4 w-4" />,
    },
    {
      label: "System",
      id: "system",
      icon: <MonitorIcon className="h-4 w-4" />,
    },
  ];

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="inline-flex items-center rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800">
      {THEMES_OPTIONS.map((option) => (
        <button
          key={option.id}
          className={`inline-flex h-7 w-7 items-center justify-center rounded-md text-zinc-500 transition-colors duration-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 ${
            theme === option.id
              ? "bg-white text-zinc-950 dark:bg-zinc-700 dark:text-zinc-50"
              : ""
          }`}
          onClick={() => setTheme(option.id)}
          aria-label={`Switch to ${option.label} theme`}
        >
          {option.icon}
        </button>
      ))}
    </div>
  );
}
