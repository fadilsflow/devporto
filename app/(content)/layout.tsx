import BreadNav from "@/components/bread-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <BreadNav />
      {children}
    </div>
  );
}
