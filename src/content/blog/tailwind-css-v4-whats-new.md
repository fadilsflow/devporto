---
title: "Tailwind CSS v4: What's New and How to Upgrade"
description: "A hands-on look at Tailwind CSS v4's new engine, CSS-first configuration, and the improved developer experience."
pubDate: 2026-06-01
tags: ["Tailwind CSS", "CSS", "Web Development"]
draft: false
---

Tailwind CSS v4 is a significant rewrite of the utility-first framework. After using it in production for a few months, here's what stands out.

## CSS-First Configuration

The biggest change in v4 is the move away from `tailwind.config.js` to native CSS configuration using `@theme`:

```css
@import "tailwindcss";

@theme {
  --color-primary: oklch(0.55 0.2 240);
  --color-surface: oklch(0.97 0 0);
  --font-display: "Inter", sans-serif;
}
```

No more JavaScript config. Your design tokens live in CSS, making them portable and simpler.

## Built on Lightning CSS

Tailwind v4 uses Lightning CSS under the hood, which means faster builds and native CSS nesting support without any plugins:

```css
.card {
  background: var(--color-surface);
  
  h2 {
    font-size: var(--text-xl);
  }
}
```

## New `@variant` System

Custom variants are now declarative:

```css
@variant dark (&:where(.dark, .dark *));
@variant not-first (&:not(:first-child));
```

Use them in HTML: `dark:bg-black not-first:border-t`.

## The `@tailwindcss/typography` Plugin

This project already uses it via `@plugin "@tailwindcss/typography"` — the v4 version works seamlessly and the `prose` classes are more consistent.

## Migration Path

For most projects, the upgrade looks like:

1. Replace `postcss.config.js` with Vite plugin `@tailwindcss/vite`
2. Swap `@tailwind base/components/utilities` for `@import "tailwindcss"`
3. Migrate `tailwind.config.js` values to `@theme` in CSS
4. Test with `npx @tailwindcss/upgrade`

This portfolio already runs on Tailwind v4. The dev experience is noticeably smoother.
