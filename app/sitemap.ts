import { getBlogPosts } from "@/app/blog/utils";
import { BASE_URL, PROJECTS } from "@/app/data";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Blog posts with most recent publishing dates
  const blogs = getBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Project pages with less frequent updates
  const projects = PROJECTS.map((project) => {
    const slug = project.href.split("/").pop() || "";
    return {
      url: `${BASE_URL}/projects/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });

  // Main routes with more frequent updates
  const routes = [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/links`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  return [...routes, ...projects, ...blogs];
}
