import Link from "next/link";
import { getBlogPosts, formatDate } from "@/app/blog/utils";
import { ArrowRightIcon } from "lucide-react";

export function BlogPosts() {
  const allBlogs = getBlogPosts()
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .slice(0, 5); // Only take the first 5 posts

  return (
    <div>
      {allBlogs.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blog/${post.slug}`}
        >
          <div className="w-full hover:brightness-80 transition-all flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className=" text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
          </div>
        </Link>
      ))}
      <Link
        href="/blog"
        className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center gap-2"
      >
        View all posts <ArrowRightIcon className="w-4 h-4" />
      </Link>
    </div>
  );
}
