---
title: "Understanding Astro Content Collections"
description: "Everything you need to know about Astro's content management system — from schemas to loaders."
pubDate: 2026-05-15
tags: ["Astro", "TypeScript", "Web Development"]
draft: false
---

Content Collections are Astro's answer to type-safe content management. They bring validation, autocomplete, and organization to your markdown files.

## Why Content Collections

Without content collections, you'd parse frontmatter manually and hope the fields are correct. With collections, you define a Zod schema and Astro handles the rest:

- **Type safety** — your frontmatter is validated at build time
- **Autocomplete** — editors know exactly what fields each post has
- **Filtering** — easily query posts by date, tags, or custom fields
- **Performance** — content is cached and only re-processed when files change

## Schemas with Zod

Astro uses Zod under the hood. The schema defines what fields your markdown files must or may have:

```typescript
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});
```

## Loaders in Astro v6

In Astro v6, each collection needs a loader. For markdown files, use the `glob()` loader:

```typescript
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({ ... }),
});
```

The `pattern` is a glob relative to `base`, and `base` is relative to your project root.

## Using Collections in Pages

Once defined, query your content with `getCollection()`:

```typescript
const posts = await getCollection("blog", ({ data }) =>
  import.meta.env.PROD ? !data.draft : true,
);

posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
```

For dynamic routes, use `getStaticPaths()` to generate pages for each post, and `render()` to convert markdown to HTML.

## Best Practices

- Always set `draft: false` on published posts explicitly
- Sort posts by `pubDate` descending in list views
- Use the `description` field for SEO and previews
- Group related content with consistent tag naming
- Keep schemas strict — it catches real errors early

Content Collections are one of Astro's killer features. They make managing a blog effortless.
