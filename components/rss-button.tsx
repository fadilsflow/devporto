"use client";

import { RssIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BASE_URL } from "@/app/data";
import { toast } from "sonner";

export function RssButton() {
  const copyRssUrl = (url: string, type: string) => {
    navigator.clipboard.writeText(url);
    toast.success(`RSS feed URL for ${type} copied to clipboard!`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" title="RSS Feeds">
          <RssIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            window.open(`${BASE_URL}/rss.xml`, "_blank");
          }}
          className="cursor-pointer"
        >
          View RSS Feed
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => copyRssUrl(`${BASE_URL}/rss.xml`, "blog")}
          className="cursor-pointer"
        >
          Copy RSS URL
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
