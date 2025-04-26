---
title: Metadata
description: Use the Metadata API to define metadata in any layout or page.
related:
  description: View all the Metadata API options.
  links:
    - app/api-reference/functions/generate-metadata
    - app/api-reference/file-conventions/metadata
    - app/api-reference/functions/generate-viewport
---

Next.js has a Metadata API that can be used to define your application metadata (e.g. `meta` and `link` tags inside your HTML `head` element) for improved SEO and web shareability.

There are two ways you can add metadata to your application:

- **Config-based Metadata**: Export a [static `metadata` object](/docs/app/api-reference/functions/generate-metadata#metadata-object) or a dynamic [`generateMetadata` function](/docs/app/api-reference/functions/generate-metadata#generatemetadata-function) in a `layout.js` or `page.js` file.
- **File-based Metadata**: Add static or dynamically generated special files to route segments.

With both these options, Next.js will automatically generate the relevant `<head>` elements for your pages. You can also create dynamic OG images using the [`ImageResponse`](/docs/app/api-reference/functions/image-response) constructor.

## Static Metadata

To define static metadata, export a [`Metadata` object](/docs/app/api-reference/functions/generate-metadata#metadata-object) from a `layout.js` or static `page.js` file.

```tsx filename="layout.tsx | page.tsx" switcher
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '...',
  description: '...',
}

export default function Page() {}
```

```jsx filename="layout.js | page.js" switcher
export const metadata = {
  title: '...',
  description: '...',
}

export default function Page() {}
```

For all the available options, see the [API Reference](/docs/app/api-reference/functions/generate-metadata).

## Dynamic Metadata

You can use `generateMetadata` function to `fetch` metadata that requires dynamic values.

```tsx filename="app/products/[id]/page.tsx" switcher
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { id } = await params

  // fetch data
  const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}

export default function Page({ params, searchParams }: Props) {}
```

```jsx filename="app/products/[id]/page.js" switcher
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { id } = await params

  // fetch data
  const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}

export default function Page({ params, searchParams }) {}
```

For all the available params, see the [API Reference](/docs/app/api-reference/functions/generate-metadata).

> **Good to know**:
>
> - Both static and dynamic metadata through `generateMetadata` are **only supported in Server Components**.
> - `fetch` requests are automatically [memoized](/docs/app/deep-dive/caching#request-memoization) for the same data across `generateMetadata`, `generateStaticParams`, Layouts, Pages, and Server Components. React [`cache` can be used](/docs/app/deep-dive/caching#react-cache-function) if `fetch` is unavailable.
> - Next.js will wait for data fetching inside `generateMetadata` to complete before streaming UI to the client. This guarantees the first part of a [streamed response](/docs/app/building-your-application/routing/loading-ui-and-streaming) includes `<head>` tags.

## File-based metadata

These special files are available for metadata:

- [favicon.ico, apple-icon.jpg, and icon.jpg](/docs/app/api-reference/file-conventions/metadata/app-icons)
- [opengraph-image.jpg and twitter-image.jpg](/docs/app/api-reference/file-conventions/metadata/opengraph-image)
- [robots.txt](/docs/app/api-reference/file-conventions/metadata/robots)
- [sitemap.xml](/docs/app/api-reference/file-conventions/metadata/sitemap)

You can use these for static metadata, or you can programmatically generate these files with code.

For implementation and examples, see the [Metadata Files](/docs/app/api-reference/file-conventions/metadata) API Reference and [Dynamic Image Generation](#dynamic-image-generation).

## Behavior

File-based metadata has the higher priority and will override any config-based metadata.

### Default Fields

There are two default `meta` tags that are always added even if a route doesn't define metadata:

- The [meta charset tag](https://developer.mozilla.org/docs/Web/HTML/Element/meta#attr-charset) sets the character encoding for the website.
- The [meta viewport tag](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag) sets the viewport width and scale for the website to adjust for different devices.

```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

> **Good to know**: You can overwrite the default [`viewport`](/docs/app/api-reference/functions/generate-metadata#viewport) meta tag.

### Ordering

Metadata is evaluated in order, starting from the root segment down to the segment closest to the final `page.js` segment. For example:

1. `app/layout.tsx` (Root Layout)
2. `app/blog/layout.tsx` (Nested Blog Layout)
3. `app/blog/[slug]/page.tsx` (Blog Page)

### Merging

Following the [evaluation order](#ordering), Metadata objects exported from multiple segments in the same route are **shallowly** merged together to form the final metadata output of a route. Duplicate keys are **replaced** based on their ordering.

This means metadata with nested fields such as [`openGraph`](/docs/app/api-reference/functions/generate-metadata#opengraph) and [`robots`](/docs/app/api-reference/functions/generate-metadata#robots) that are defined in an earlier segment are **overwritten** by the last segment to define them.

#### Overwriting fields

```jsx filename="app/layout.js"
export const metadata = {
  title: 'Acme',
  openGraph: {
    title: 'Acme',
    description: 'Acme is a...',
  },
}
```

```jsx filename="app/blog/page.js"
export const metadata = {
  title: 'Blog',
  openGraph: {
    title: 'Blog',
  },
}

// Output:
// <title>Blog</title>
// <meta property="og:title" content="Blog" />
```

In the example above:

- `title` from `app/layout.js` is **replaced** by `title` in `app/blog/page.js`.
- All `openGraph` fields from `app/layout.js` are **replaced** in `app/blog/page.js` because `app/blog/page.js` sets `openGraph` metadata. Note the absence of `openGraph.description`.

If you'd like to share some nested fields between segments while overwriting others, you can pull them out into a separate variable:

```jsx filename="app/shared-metadata.js"
export const openGraphImage = { images: ['http://...'] }
```

```jsx filename="app/page.js"
import { openGraphImage } from './shared-metadata'

export const metadata = {
  openGraph: {
    ...openGraphImage,
    title: 'Home',
  },
}
```

```jsx filename="app/about/page.js"
import { openGraphImage } from '../shared-metadata'

export const metadata = {
  openGraph: {
    ...openGraphImage,
    title: 'About',
  },
}
```

In the example above, the OG image is shared between `app/layout.js` and `app/about/page.js` while the titles are different.

#### Inheriting fields

```jsx filename="app/layout.js"
export const metadata = {
  title: 'Acme',
  openGraph: {
    title: 'Acme',
    description: 'Acme is a...',
  },
}
```

```jsx filename="app/about/page.js"
export const metadata = {
  title: 'About',
}

// Output:
// <title>About</title>
// <meta property="og:title" content="Acme" />
// <meta property="og:description" content="Acme is a..." />
```

**Notes**

- `title` from `app/layout.js` is **replaced** by `title` in `app/about/page.js`.
- All `openGraph` fields from `app/layout.js` are **inherited** in `app/about/page.js` because `app/about/page.js` doesn't set `openGraph` metadata.

## Dynamic Image Generation

The `ImageResponse` constructor allows you to generate dynamic images using JSX and CSS. This is useful for creating social media images such as Open Graph images, Twitter cards, and more.

To use it, you can import `ImageResponse` from `next/og`:

```jsx filename="app/about/opengraph-image.js"
import { ImageResponse } from 'next/og'

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Hello world!
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  )
}
```

`ImageResponse` integrates well with other Next.js APIs, including [Route Handlers](/docs/app/building-your-application/routing/route-handlers) and file-based Metadata. For example, you can use `ImageResponse` in a `opengraph-image.tsx` file to generate Open Graph images at build time or dynamically at request time.

`ImageResponse` supports common CSS properties including flexbox and absolute positioning, custom fonts, text wrapping, centering, and nested images. [See the full list of supported CSS properties](/docs/app/api-reference/functions/image-response).

> **Good to know**:
>
> - Examples are available in the [Vercel OG Playground](https://og-playground.vercel.app/).
> - `ImageResponse` uses [@vercel/og](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation), [Satori](https://github.com/vercel/satori), and Resvg to convert HTML and CSS into PNG.
> - Only flexbox and a subset of CSS properties are supported. Advanced layouts (e.g. `display: grid`) will not work.
> - Maximum bundle size of `500KB`. The bundle size includes your JSX, CSS, fonts, images, and any other assets. If you exceed the limit, consider reducing the size of any assets or fetching at runtime.
> - Only `ttf`, `otf`, and `woff` font formats are supported. To maximize the font parsing speed, `ttf` or `otf` are preferred over `woff`.

## JSON-LD

[JSON-LD](https://json-ld.org/) is a format for structured data that can be used by search engines to understand your content. For example, you can use it to describe a person, an event, an organization, a movie, a book, a recipe, and many other types of entities.

Our current recommendation for JSON-LD is to render structured data as a `<script>` tag in your `layout.js` or `page.js` components. For example:

```tsx filename="app/products/[id]/page.tsx" switcher
export default async function Page({ params }) {
  const { id } = await params
  const product = await getProduct(id)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description,
  }

  return (
    <section>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ... */}
    </section>
  )
}
```

```jsx filename="app/products/[id]/page.js" switcher
export default async function Page({ params }) {
  const { id } = await params
  const product = await getProduct(id)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description,
  }

  return (
    <section>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ... */}
    </section>
  )
}
```

You can validate and test your structured data with the [Rich Results Test](https://search.google.com/test/rich-results) for Google or the generic [Schema Markup Validator](https://validator.schema.org/).

You can type your JSON-LD with TypeScript using community packages like [`schema-dts`](https://www.npmjs.com/package/schema-dts):

```tsx
import { Product, WithContext } from 'schema-dts'

const jsonLd: WithContext<Product> = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Next.js Sticker',
  image: 'https://nextjs.org/imgs/sticker.png',
  description: 'Dynamic at the speed of static.',
}
```


Meta Data is a cornerstone of web optimization, improving both **Search Engine Optimization (SEO)** and user experience. In **Next.js 15**, the process of managing Meta Data has evolved significantly, thanks to enhanced features in the **App Router**. This guide explores everything you need to know about Meta Data in Next.js 15, from its implementation to its impact on SEO and performance.

## [](https://dev.to/joodi/maximizing-seo-with-meta-data-in-nextjs-15-a-comprehensive-guide-4pa7#)![Image description](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4q3ywh9nmepb55xgo7ok.png)

## [](https://dev.to/joodi/maximizing-seo-with-meta-data-in-nextjs-15-a-comprehensive-guide-4pa7#what-is-meta-data)**What is Meta Data?**

Meta Data refers to the information embedded in your webpage's `<head>` tag, which helps search engines and social platforms understand your content. Key Meta Data elements include:

-   **Title**: The main title of the page.
-   **Description**: A brief summary of the page content.
-   **Keywords**: Relevant search terms.
-   **Social Tags**: Open Graph, Twitter Card, and similar tags for enhanced sharing.

Meta Data not only improves how your website is indexed but also how it's displayed in search engine results and social media previews.

___

## [](https://dev.to/joodi/maximizing-seo-with-meta-data-in-nextjs-15-a-comprehensive-guide-4pa7#meta-data-in-nextjs-15-an-overview)**Meta Data in Next.js 15: An Overview**

In Next.js 15, managing Meta Data is more streamlined than ever. The **App Router** introduces a robust API that integrates Meta Data directly into the page and layout files, reducing the need for custom solutions or third-party libraries.

Here are the highlights:

-   **Static and Dynamic Meta Data**: Define Meta Data as constants or generate it dynamically.
-   **Template Strings for Dynamic Titles**: Use the `template` and `absolute` keys to create flexible titles.
-   **Automatic Integration**: Simplifies adding Open Graph, Twitter Card, and other social tags.
-   **SEO Optimization**: Ensures better indexing and improved page rankings.

___

## [](https://dev.to/joodi/maximizing-seo-with-meta-data-in-nextjs-15-a-comprehensive-guide-4pa7#defining-meta-data-in-nextjs-15)**Defining Meta Data in Next.js 15**

### [](https://dev.to/joodi/maximizing-seo-with-meta-data-in-nextjs-15-a-comprehensive-guide-4pa7#1-static-meta-data)**1\. Static Meta Data**

For static Meta Data, you can define a `metadata` object in your `page.tsx` or `layout.tsx` file. Here’s an example:  

```
export const metadata = {
  title: 'Home Page',
  description: 'Welcome to our homepage, where you can find the latest updates and features.',
};

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to the Home Page!</h1>
    </main>
  );
}
```

Enter fullscreen mode Exit fullscreen mode

This approach is suitable for pages with fixed content and structure.

### [](https://dev.to/joodi/maximizing-seo-with-meta-data-in-nextjs-15-a-comprehensive-guide-4pa7#2-dynamic-meta-data)**2\. Dynamic Meta Data**

For pages with dynamic content (e.g., blog posts), you can use an asynchronous `generateMetadata` function:  

```
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await fetchPostData(params.slug); // Fetch data dynamically

  return {
    title: `Post: ${post.title}`,
    description: post.description,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>{`Post: ${params.slug}`}</h1>
    </main>
  );
}
```

Enter fullscreen mode Exit fullscreen mode

This ensures that each page gets a unique title and description based on its content.

### [](https://dev.to/joodi/maximizing-seo-with-meta-data-in-nextjs-15-a-comprehensive-guide-4pa7#3-template-and-absolute-titles)**3\. Template and Absolute Titles**

Next.js 15 allows you to create consistent and dynamic titles using `template` and `absolute` keys within the `metadata` object.

-   **Template**: Use a dynamic template for the title, such as appending the site name to all page titles.
-   **Absolute**: Override the template with a specific title when necessary.

Here’s an example:  

```
export const metadata = {
  title: {
    template: '%s | My Awesome Site',
    absolute: 'Custom Page Title',
  },
  description: 'This page uses a custom title and description.',
};

export default function CustomPage() {
  return (
    <main>
      <h1>Custom Page with Absolute Title</h1>
    </main>
  );
}
```

Enter fullscreen mode Exit fullscreen mode

In this example:

-   The `template` key ensures that all titles follow a specific pattern (`Page Title | My Awesome Site`).
-   The `absolute` key overrides the template for the current page, displaying only `Custom Page Title`.

___

## [](https://dev.to/joodi/maximizing-seo-with-meta-data-in-nextjs-15-a-comprehensive-guide-4pa7#social-meta-tags)**Social Meta Tags**

Next.js 15 simplifies the process of adding social Meta Tags. For example, you can include Open Graph and Twitter Card tags in the `metadata` object:  

```
export const metadata = {
  title: 'My Blog Post',
  description: 'An insightful blog post about modern web development.',
  openGraph: {
    title: 'My Blog Post',
    description: 'An insightful blog post about modern web development.',
    url: 'https://example.com/blog/my-blog-post',
    siteName: 'Example Blog',
    images: [
      {
        url: 'https://example.com/images/blog-post.jpg',
        width: 800,
        height: 600,
        alt: 'Blog Post Image',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Blog Post',
    description: 'An insightful blog post about modern web development.',
    images: ['https://example.com/images/blog-post.jpg'],
  },
};
```

Enter fullscreen mode Exit fullscreen mode

These tags improve how your content appears when shared on social media platforms, driving more engagement and traffic.

___

## [](https://dev.to/joodi/maximizing-seo-with-meta-data-in-nextjs-15-a-comprehensive-guide-4pa7#impact-on-seo)**Impact on SEO**

Meta Data directly influences how search engines crawl and rank your pages. Here’s how:

-   **Title and Description**: Well-crafted titles and descriptions improve click-through rates (CTR) by making your search results more appealing.
-   **Social Tags**: Enhance visibility and engagement on platforms like Facebook, Twitter, and LinkedIn.
-   **Template Titles**: Ensure consistency across pages while allowing for exceptions using the `absolute` key.
-   **Dynamic Rendering**: Ensures Meta Data stays accurate, even for frequently updated pages.

___

## [](https://dev.to/joodi/maximizing-seo-with-meta-data-in-nextjs-15-a-comprehensive-guide-4pa7#best-practices)**Best Practices**

To maximize the benefits of Meta Data in Next.js 15, follow these best practices:

1.  **Keep Titles Concise**: Limit titles to 60 characters to ensure full visibility in search results.
2.  **Write Compelling Descriptions**: Use action-oriented language and include keywords naturally.
3.  **Use Dynamic Meta Data**: Leverage `generateMetadata` for dynamic content like blogs or product pages.
4.  **Validate Social Tags**: Test your Open Graph and Twitter Card tags using tools like the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and [Twitter Card Validator](https://cards-dev.twitter.com/validator).
5.  **Template Titles**: Use consistent title templates for better branding and SEO, but override them when necessary with `absolute` titles.
6.  **Monitor SEO Performance**: Use tools like Google Search Console and Lighthouse to analyze and improve your Meta Data effectiveness.

___

## [](https://dev.to/joodi/maximizing-seo-with-meta-data-in-nextjs-15-a-comprehensive-guide-4pa7#conclusion)**Conclusion**

## [](https://dev.to/joodi/maximizing-seo-with-meta-data-in-nextjs-15-a-comprehensive-guide-4pa7#nextjs-15-offers-a-powerful-and-streamlined-approach-to-managing-meta-data-enabling-developers-to-optimize-seo-and-enhance-user-experience-effortlessly-whether-youre-building-static-pages-or-dynamic-content-the-updated-meta-data-api-in-nextjs-15-ensures-your-website-is-both-searchengine-and-userfriendly)Next.js 15 offers a powerful and streamlined approach to managing Meta Data, enabling developers to optimize SEO and enhance user experience effortlessly. Whether you’re building static pages or dynamic content, the updated Meta Data API in Next.js 15 ensures your website is both search-engine and user-friendly.

I hope you found this helpful! Let’s connect on [LinkedIn](https://www.linkedin.com/in/joodi) or [GitHub](https://github.com/MiladJoodi) 🚀




