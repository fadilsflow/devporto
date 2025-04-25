import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getBlogPosts } from "@/app/blog/utils";

import Image from "next/image";
import { baseUrl } from "@/app/sitemap";

type PageParams = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  let posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageParams) {
  try {
    const { slug } = await params;
    let post = getBlogPosts().find((post) => post.slug === slug);
    if (!post) {
      return;
    }

    let {
      title,
      publishedAt: publishedTime,
      summary: description,
      image,
    } = post.metadata;
    let ogImage = image
      ? image
      : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "article",
        publishedTime,
        url: `${baseUrl}/blog/${post.slug}`,
        images: [
          {
            url: ogImage,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
    };
  } catch (error) {
    console.error("Error in generateMetadata:", error);
    return {
      title: "Blog Post",
      description: "Blog post",
    };
  }
}

export default async function Blog({ params }: PageParams) {
  try {
    const { slug } = await params;
    console.log("Fetching post for slug:", slug);

    let post = getBlogPosts().find((post) => post.slug === slug);
    console.log("Found post:", post ? "yes" : "no");

    if (!post) {
      notFound();
    }

    return (
      <section className="max-w-3xl mx-auto p-8">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: "My Portfolio",
              },
            }),
          }}
        />
        <h1 className="title font-semibold text-2xl tracking-tighter">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
        {post.metadata.image && (
          <div className="relative aspect-video overflow-hidden rounded-xl mb-12 shadow-lg">
            <Image
              src={post.metadata.image}
              alt={post.metadata.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <article className="prose dark:prose-invert">
          <CustomMDX source={post.content} />
        </article>
      </section>
    );
  } catch (error) {
    console.error("Error in Blog component:", error);
    return (
      <section>
        <h1>Error loading blog post</h1>
        <p>Sorry, there was an error loading this blog post.</p>
      </section>
    );
  }
}
