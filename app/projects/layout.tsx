import { BreadNav } from "@/components/bread-nav";
import { ShareButton } from "@/components/share-button";
import { projectsMetadata } from "../config/seo";
import { defaultViewport } from "../config/viewport";


export const metadata = projectsMetadata;
export const viewport = defaultViewport;

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-between max-w-3xl mx-auto">
        <BreadNav />
        <div className="flex items-center gap-2">

          <ShareButton />
        </div>
      </div>
      {children}
    </div>
  );
}
