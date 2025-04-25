import { getBlogPosts } from "./utils";
import { formatDate } from "./utils";
import Link from "next/link";
import type { Metadata } from "next";

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
    <section className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Blog Posts</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <div className="flex flex-col space-y-1">
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <div>
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-primary transition-colors">
                    {post.metadata.title}
                  </h2>
                  {post.metadata.summary && (
                    <p className="text-neutral-600 dark:text-neutral-400 mt-1">
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
