import { getBlogPosts } from "@/app/blog/utils";
import { BASE_URL, PROJECTS } from "@/app/data";

export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours

export async function GET() {
  // Blog posts with most recent publishing dates
  const blogs = getBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt).toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Project pages with less frequent updates
  const projects = PROJECTS.map((project) => {
    const slug = project.href.split("/").pop() || "";
    return {
      url: `${BASE_URL}/projects/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  // Main routes with more frequent updates
  const routes = [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/links`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const entries = [...routes, ...projects, ...blogs];

  // Generate the XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
