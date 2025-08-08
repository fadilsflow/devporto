import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Image from "next/image";
import { BASE_URL, NAME } from "@/app/data";
import Script from "next/script";
import { defaultViewport } from "@/app/config/viewport";
import AnimatedSection from "@/components/animated-section";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

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
            alt: title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
      alternates: {
        canonical: `${BASE_URL}/blog/${post.slug}`,
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

export const viewport = defaultViewport;

export default async function Blog({ params }: Props) {
  try {
    const { slug } = await params;
    const post = getBlogPosts().find((post) => post.slug === slug);

    if (!post) {
      notFound();
    }

    const imageUrl = post.metadata.image
      ? `${BASE_URL}${post.metadata.image}`
      : `${BASE_URL}/og?title=${encodeURIComponent(post.metadata.title)}`;

    // Enhanced JSON-LD structured data
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.metadata.title,
      name: post.metadata.title,
      datePublished: post.metadata.publishedAt,
      dateModified: post.metadata.publishedAt,
      description: post.metadata.summary,
      image: imageUrl,
      url: `${BASE_URL}/blog/${post.slug}`,
      inLanguage: "en-US",
      author: {
        "@type": "Person",
        name: NAME,
        url: BASE_URL,
      },
      publisher: {
        "@type": "Person",
        name: NAME,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/icon0.svg`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/blog/${post.slug}`,
      },
    };

    return (
      <AnimatedSection delay={0.3}>
        <article className="max-w-3xl mx-auto px-4 md:px-0 space-y-8 relative border-t border-border border-dashed pt-8 mt-5">
          <Script
            id="blog-post-jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd),
            }}
          />

          <header className="text-center space-y-4">
            <time
              dateTime={post.metadata.publishedAt}
              className="text-sm text-primary block mb-4"
            >
              {formatDate(post.metadata.publishedAt)}
            </time>

            <h1 className="title font-medium text-3xl md:text-5xl tracking-tighter">
              {post.metadata.title}
            </h1>
          </header>

          {post.metadata.image && (
            <figure className="relative aspect-video overflow-hidden rounded-xl mb-12 shadow-lg">
              <Image
                src={post.metadata.image}
                alt={post.metadata.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </figure>
          )}

          <div className="prose dark:prose-invert max-w-none ">
            <CustomMDX source={post.content} />
          </div>

          <footer className="text-sm pt-8 border-t border-border border-dashed">
            <Link href="/blog" className="text-primary flex items-center gap-2">
              <ArrowLeftIcon className="w-4 h-4 " /> Back
            </Link>
          </footer>
        </article>
      </AnimatedSection>
    );
  } catch (error) {
    console.error("Error in Blog component:", error);
    return (
      <AnimatedSection delay={0.3}>
        <section className="max-w-3xl mx-auto px-4 space-y-8">
          <h1 className="text-3xl font-bold">Error loading blog post</h1>
          <p>Sorry, there was an error loading this blog post.</p>
        </section>
      </AnimatedSection>
    );
  }
}
