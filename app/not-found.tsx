import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center py-30">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404 - Page Not Found
      </h1>
      <p className="mb-4">The page you are looking for does not exist.</p>
      <Button variant="outline" asChild>
        <Link href="/">
          <ArrowLeft className="w-4 h-4 mr-2" /> Go to Home
        </Link>
      </Button>
    </section>
  );
}
