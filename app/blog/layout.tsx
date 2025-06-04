import { BreadNav } from "@/components/bread-nav";
import { ShareButton } from "@/components/share-button";
import { blogMetadata } from "../config/seo";
import { defaultViewport } from "../config/viewport";
import { RssButton } from "@/components/rss-button";

export const metadata = blogMetadata;
export const viewport = defaultViewport;

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-between max-w-3xl mx-auto ">
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
