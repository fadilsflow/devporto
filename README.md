# Astro Portfolio Template

Astro Portfolio Template is a production-ready personal portfolio starter. It
keeps the existing interface data-driven so you can update profile details,
projects, experience, skills, navigation, SEO metadata, and public machine-readable
files from one content file backed by a validation schema.

## Features

This template includes the core pieces needed for a reusable public portfolio:

- Centralized content in `src/data/portfolio.ts` with validation in `src/data/portfolio.schema.ts`.
- Data-driven profile, social links, overview, about, tech stack, experience,
  projects, links, resume, navigation, footer, and SEO metadata.
- Open Graph, Twitter Card, canonical URL, robots metadata, JSON-LD structured
  data, sitemap generation, RSS, `llms.txt`, and `llms-full.txt`.
- A dynamic `robots.txt` and `manifest.webmanifest` generated from site config.
- Theme tokens in `src/styles/globals.css` for fast visual customization.
- Strict TypeScript configuration through Astro's strict preset.

## Requirements

Install the following tools before you start:

- Node.js `22.12.0` or later.
- Bun, npm, pnpm, or yarn. The repository includes `bun.lock`, so Bun is the
  default package manager.

## Install and run

Use these commands from the project root:

```sh
bun install
bun run dev
```

Build and preview the production output with these commands:

```sh
bun run build
bun run preview
```

If you use another package manager, replace `bun` with your tool of choice.

## Project structure

The project keeps presentation, content, and generated public files separate:

```text
/
├── public/                  # Static icons and replaceable image assets
├── src/
│   ├── components/          # Reusable Astro UI components
│   ├── data/               # Portfolio content, validation, and typed exports
│   ├── layouts/             # Shared HTML shell and metadata wiring
│   ├── pages/               # Routes and generated text/XML/manifest files
│   ├── styles/globals.css   # Tailwind imports and theme tokens
│   └── lib/utils.ts         # Small rendering helpers
├── astro.config.mjs         # Astro, Tailwind, and sitemap config
└── package.json             # Scripts and dependencies
```

## Customize content

Edit `src/data/portfolio.ts` to customize the template. You don't need to edit
UI components for normal portfolio changes.

Update these top-level sections:

- `site`: site name, production URL, description, language, locale, repository,
  theme colors, and optional logo.
- `profile`: name, username, biography, avatar, Open Graph image, contact
  details, current jobs, keywords, and about copy.
- `sections`: enable or disable homepage sections.
- `navigation`: add, remove, rename, disable, or reorder nav links.
- `socialLinks`: configure social profiles and where each link appears.
- `linkPage`: add extra links for the `/link` route.
- `resume`: set resume copy, SEO description, embed URL, and download URL.
- `projects`: configure visible project count and project cards.
- `experiences`: configure work, education, and other timeline entries.
- `techStack`: configure skill badges.
- `footer`: configure attribution and source-code links.

`src/data/portfolio.ts` contains only the portfolio data. `src/data/portfolio.schema.ts`
defines the validation schema and TypeScript types, and `src/data/index.ts`
exports the parsed `PORTFOLIO` object used by the UI. If required fields are
missing or URLs are invalid, the build fails early.

## Replace images and icons

Replace the default static assets in `public/` with your own files:

- `public/favicon.svg`, `public/favicon.ico`, and app icons: browser and app
  icons.
- `public/p/*`: project logos, audio, and other portfolio assets.
- Remote avatar and Open Graph URLs: configured in `src/data/portfolio.ts`.

After replacing files, update matching paths in `src/data/portfolio.ts` if you
use different filenames.

## Customize theme

Edit CSS custom properties in `src/styles/globals.css` to change colors,
fonts, shadows, borders, and semantic tokens. The design uses Tailwind CSS 4
and maps theme tokens through `@theme inline`, so component classes keep working
when you change the token values.

## Configure SEO and deployment URLs

Set the production URL before deployment. Astro uses it for canonical URLs,
sitemap entries, `robots.txt`, and generated metadata.

```sh
SITE_URL="https://your-domain.com" bun run build
```

You can also update the fallback value in `astro.config.mjs` and the `site.url`
value in `src/data/portfolio.ts`.

## Environment variables

This template doesn't require secrets or private environment variables.

| Variable | Required | Purpose |
| --- | --- | --- |
| `SITE_URL` | No | Overrides the production site URL during build. |

## Deploy

Deploy the project as a static Astro site. Common hosts work without additional
server code:

1. Push the repository to your Git provider.
2. Create a new project in Vercel, Netlify, Cloudflare Pages, or another static
   hosting provider.
3. Set the build command to `bun run build`.
4. Set the output directory to `dist`.
5. Optional: Add `SITE_URL` with your production domain.
6. Deploy the site.

## Content validation checklist

Before publishing, confirm these values are updated:

- `site.url` and optional `SITE_URL`.
- `profile.website`, `profile.email`, and `profile.phoneNumber`.
- `profile.avatar` and `profile.ogImage`.
- `socialLinks`, `linkPage`, and `navigation`.
- `projects.items`, `experiences`, and `techStack`.
- `resume.embedUrl` or `resume.downloadUrl`, if you want a resume page.
- `footer.sourceCodeUrl`, if you publish the template source.

## Next steps

Run `bun run build` after every content change. If the build passes, the typed
configuration, generated metadata, sitemap, RSS feed, and LLM text files are in
sync with your portfolio data.
