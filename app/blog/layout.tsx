import { BreadNav } from "@/components/bread-nav";
import { ShareButton } from "@/components/share-button";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-between max-w-3xl mx-auto">
        <BreadNav />
        <ShareButton />
      </div>
      {children}
    </div>
  );
}
