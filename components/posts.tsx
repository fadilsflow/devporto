import Link from "next/link";
import { getBlogPosts, formatDate } from "@/app/blog/utils";
import { ArrowRightIcon } from "lucide-react";
import { Badge } from "./ui/badge";

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
          className="flex flex-col space-y-1 mb-4 "
          href={`/blog/${post.slug}`}
        >
          <div className="w-full hover:opacity-80 p-2 rounded-md transition-all flex flex-col space-x-0 md:space-x-2">
            <p className=" text-neutral-600 dark:text-neutral-400  tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
              {post.metadata.summary}
            </p>
            <div className="flex flex-row gap-2 pt-2 ">
              {post.metadata.tags?.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-card">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </Link>
      ))}
      <Link
        href="/blog"
        className="text-sm text-neutral-600 dark:text-neutral-400  transition-colors flex items-center gap-2"
      >
        View all posts <ArrowRightIcon className="w-4 h-4" />
      </Link>
    </div>
  );
}
