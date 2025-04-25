import { getBlogPosts } from "./utils";
import { formatDate } from "./utils";
import Link from "next/link";
import type { Metadata } from "next";
import { NICKNAME } from "../data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default function BlogPage() {
  const posts = getBlogPosts().sort((a, b) => {
    const dateA = new Date(a.metadata.publishedAt).getTime();
    const dateB = new Date(b.metadata.publishedAt).getTime();
    return dateB - dateA;
  });

  return (
    <section className="max-w-3xl mx-auto px-4 md:px-0 p-8">
      <h1 className="text-3xl font-bold tracking-tight mb-2 ">
        {NICKNAME}&apos;s Blog
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8 ">
        Here are some of my thoughts on software development, design, and more.
      </p>
      <div className="space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group hover:brightness-80 transition-all"
          >
            <div className="flex flex-col space-y-1">
              <div className="w-full flex flex-col md:flex-row gap-4">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] shrink-0 tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <div className="min-w-0">
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-primary transition-colors line-clamp-2">
                    {post.metadata.title}
                  </h2>
                  {post.metadata.summary && (
                    <p className="text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2">
                      {post.metadata.summary}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
