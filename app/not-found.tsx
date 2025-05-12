import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
export const metadata = {
  title: "Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <AnimatedSection delay={0.3}>
    <section className="flex flex-col items-center justify-center py-30">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404 - Page Not Found
      </h1>
      <p className="mb-4">The page you are looking for does not exist.</p>

      <Link href="/" className="underline ">
        ← Go to Home
      </Link>
    </section>
    </AnimatedSection>
  );
}
