import { BreadNav } from "@/components/bread-nav";
import { ShareButton } from "@/components/share-button";
import { defaultViewport } from "../config/viewport";
import { RssButton } from "@/components/rss-button";

export const viewport = defaultViewport;

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <BreadNav />
        <div className="flex items-center gap-2">
          <RssButton />
          <ShareButton />
        </div>
      </div>
      {children}
    </div>
  );
}
