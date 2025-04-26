import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getBlogPosts } from "@/app/blog/utils";

import Image from "next/image";
import { BASE_URL } from "@/app/data";
import { NAME } from "@/app/data";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  try {
    const { slug } = await params;
    const post = getBlogPosts().find((post) => post.slug === slug);
    if (!post) {
      return;
    }

    const {
      title,
      publishedAt: publishedTime,
      summary: description,
      image,
    } = post.metadata;
    const ogImage = image
      ? image
      : `${BASE_URL}/og?title=${encodeURIComponent(title)}`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "article",
        publishedTime,
        url: `${BASE_URL}/blog/${post.slug}`,
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

export default async function Blog({ params }: Props) {
  try {
    const { slug } = await params;

    const post = getBlogPosts().find((post) => post.slug === slug);

    if (!post) {
      notFound();
    }

    return (
      <section className="max-w-3xl mx-auto px-4 md:px-0 space-y-8 relative">
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
                ? `${BASE_URL}${post.metadata.image}`
                : `${BASE_URL}/og?title=${encodeURIComponent(
                    post.metadata.title
                  )}`,
              url: `${BASE_URL}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: NAME,
              },
            }),
          }}
        />

        <p className="text-sm text-primary text-center mb-4">
          {formatDate(post.metadata.publishedAt)}
        </p>

        <h1 className="title font-medium text-3xl md:text-5xl text-center tracking-tighter">
          {post.metadata.title}
        </h1>
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
