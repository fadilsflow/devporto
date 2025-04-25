"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center justify-center py-30">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404 - Page Not Found
      </h1>
      <p className="mb-4">The page you are looking for does not exist.</p>
      <Button onClick={() => router.back()} variant={"outline"}>
        <ArrowLeft className="w-4 h-4 mr-2" /> Go Back
      </Button>
    </section>
  );
}
