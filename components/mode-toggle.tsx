"use client"
import { Button } from "./ui/button";
import { MoonStar, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost">
        <MoonStar className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" className="p-0  text-muted-foreground ">
          {theme === "dark" ? (
            <MoonStar className="h-5 w-5" />
          ) : theme === "system" ? (
            <Laptop className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px] bg-background ">
        <DropdownMenuItem onClick={() => setTheme("light")} className="text-muted-foreground text-xs">
          <Sun className="mr-2 h-4 w-4" />
          <span >Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="text-muted-foreground text-xs">
          <MoonStar className="mr-2 h-4 w-4" />
          <span >Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="text-muted-foreground text-xs">
          <Laptop className="mr-2 h-4 w-4" />
          <span >System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}   