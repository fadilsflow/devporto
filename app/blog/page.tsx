import { NICKNAME } from "../data";
import AnimatedSection from "@/components/animated-section";
import { BlogPosts } from "@/components/posts";
export default function BlogPage() {
  return (
    <AnimatedSection delay={0.3}>
      <section className="max-w-3xl mx-auto px-4 md:px-0 p-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2 ">
          {NICKNAME}&apos;s Blog
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 ">
          Here are some of my thoughts on software development, design, and
          more.
        </p>
        <div className="space-y-8 border-t border-border border-dashed pt-8">
          <BlogPosts />
        </div>
      </section>
    </AnimatedSection>
  );
}
