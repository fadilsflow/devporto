// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://fadils.web.id",
  trailingSlash: "never",
  build: {
    inlineStylesheets: "auto",
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  integrations: [
    sitemap({
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
    },
  },
});
