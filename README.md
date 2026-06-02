<div align="center">
  <img alt="Devporto portfolio preview" src="https://res.cloudinary.com/dxurnpbrc/image/upload/v1747126424/1_ftwuie.png" width="90%" />
</div>

# Devporto - Developer Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/fadilsflow/devporto&env=SITE_URL&envDescription=Optional%20production%20site%20URL%20used%20for%20canonical%20URLs%20and%20sitemaps&project-name=devporto&repository-name=devporto)

Devporto is a production-ready Astro portfolio template. It keeps the UI fully
data-driven so you can update profile details, projects, experience, skills,
navigation, SEO metadata, and machine-readable public files from one content
file backed by a validation schema.

Built with Astro 6, TypeScript, Tailwind CSS 4, and deployed easily on Vercel.

## Features

Devporto includes the core pieces needed for a reusable public portfolio:

- Quick setup by editing a single content file: `src/data/portfolio.ts`.
- Validation and TypeScript types in `src/data/portfolio.schema.ts`.
- Data-driven profile, social links, overview, about, tech stack, experience,
  projects, links, resume, navigation, footer, and SEO metadata.
- Section enable or disable controls through the central `sections` config.
- Linktree-style `/link` page for social or content navigation.
- Resume page with configurable copy, embed URL, and download URL.
- RSS feed generation based on project data.
- `llms.txt` and `llms-full.txt` for AI and LLM discoverability.
- Dynamic `robots.txt` and `manifest.webmanifest` generated from site config.
- Open Graph, Twitter Cards, canonical URLs, JSON-LD, sitemap generation, and
  crawl metadata.
- Dark and light theme support with centralized CSS tokens.
- Fully responsive design for desktop and mobile.

## Getting started locally

You can run Devporto locally with Bun, npm, pnpm, or yarn. The repository
includes `bun.lock`, so Bun is the default package manager.

1. Clone this repository to your local machine:

   ```sh
   git clone https://github.com/fadilsflow/devporto
   ```

2. Move to the cloned directory:

   ```sh
   cd devporto
   ```

3. Install dependencies:

   ```sh
   bun install
   # or
   npm install
   ```

4. Start the local development server:

   ```sh
   bun run dev
   # or
   npm run dev
   ```

5. Open `src/data/portfolio.ts` and customize your portfolio content.

## Project structure

The project separates content, validation, presentation, and generated public
files so customization stays predictable:

```text
/
├── public/                  # Static icons and portfolio assets
├── src/
│   ├── components/          # Reusable Astro UI components
│   ├── data/                # Portfolio content, schema, and typed exports
│   ├── layouts/             # Shared HTML shell and metadata wiring
│   ├── pages/               # Routes and generated text/XML/manifest files
│   ├── styles/globals.css   # Tailwind imports and theme tokens
│   └── lib/utils.ts         # Small rendering helpers
├── astro.config.mjs         # Astro, Tailwind, and sitemap config
└── package.json             # Scripts and dependencies
```

## Customize content

Edit `src/data/portfolio.ts` for normal portfolio changes. You don't need to
edit UI components to change names, links, projects, skills, SEO copy, or
section visibility.

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

`src/data/portfolio.ts` contains only the portfolio data.
`src/data/portfolio.schema.ts` defines validation and TypeScript types.
`src/data/index.ts` exports the parsed `PORTFOLIO` object used by the UI. If
required fields are missing or URLs are invalid, the build fails early.

## Customize theme

Edit CSS custom properties in `src/styles/globals.css` to change colors,
fonts, shadows, borders, and semantic tokens. The design uses Tailwind CSS 4
and maps theme tokens through `@theme inline`, so component classes keep working
when you change the token values.

## Set up your website icon

A favicon is the small icon that appears in browser tabs and bookmarks. Replace
the default icons before publishing your site.

1. Create or prepare a square image for your favicon. Use at least 260 by 260
   pixels.
2. Open [RealFaviconGenerator](https://realfavicongenerator.net/).
3. Upload your image and customize the generated icons.
4. Download the favicon package.
5. Replace the matching files in `public/`, including `favicon.svg`,
   `favicon.ico`, `apple-icon.png`, and web app manifest icons.
6. Run `bun run build` to confirm the generated manifest still works.

## Configure SEO and deployment URLs

Set the production URL before deployment. Astro uses this value for canonical
URLs, sitemap entries, `robots.txt`, and generated metadata.

```sh
SITE_URL="https://your-domain.com" bun run build
```

You can also update the fallback value in `astro.config.mjs` and the `site.url`
value in `src/data/portfolio.ts`.

## Environment variables

Devporto doesn't require secrets or private environment variables. One optional
variable controls the production URL at build time.

| Variable | Required | Purpose |
| --- | --- | --- |
| `SITE_URL` | No | Overrides the production site URL during build. |

## Deploy to Vercel

The fastest deployment path is the Vercel clone flow. Use the deploy button at
the top of this README, or deploy manually from your Git provider.

1. Push your customized repository to GitHub.
2. Create a new Vercel project from the repository.
3. Set the build command to `bun run build`.
4. Set the output directory to `dist`.
5. Optional: Add `SITE_URL` with your production domain.
6. Deploy the site.

## Set up Google Search Console

Google Search Console helps you monitor and improve your site's presence in
Google Search results after deployment.

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Click **Add property** and choose **URL prefix**.
3. Enter your production URL, for example `https://yourdomain.com`.
4. Verify ownership using the method that works best for your host.
5. After verification, open **Sitemaps** in the sidebar.
6. Submit your sitemap URL: `https://yourdomain.com/sitemap-index.xml`.
7. Wait for Google to process the sitemap and start indexing your pages.

## Content validation checklist

Before publishing, confirm the main template values are updated for your site:

- `site.url` and optional `SITE_URL`.
- `profile.website`, `profile.email`, and `profile.phoneNumber`.
- `profile.avatar` and `profile.ogImage`.
- `socialLinks`, `linkPage`, and `navigation`.
- `projects.items`, `experiences`, and `techStack`.
- `resume.embedUrl` or `resume.downloadUrl`, if you want a resume page.
- `footer.sourceCodeUrl`, if you publish the template source.

## Build and preview

Run these commands before shipping changes:

```sh
bun run build
bun run preview
```

If the build passes, the validated configuration, generated metadata, sitemap,
RSS feed, and LLM text files are in sync with your portfolio data.
