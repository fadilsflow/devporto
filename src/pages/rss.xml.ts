import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { PORTFOLIO } from "../data";

function parsePeriod(p: string): Date {
    // format "MM.YYYY" or "YYYY"
    const parts = p.split(".");
    if (parts.length === 2) {
        return new Date(parseInt(parts[1]), parseInt(parts[0]) - 1, 1);
    }
    return new Date(parseInt(parts[0]) || 2024, 0, 1);
}

export const GET: APIRoute = async (context) => {
    const blogPosts = await getCollection("blog", ({ data }) =>
        import.meta.env.PROD ? !data.draft : true,
    );

    const blogItems = blogPosts.sort(
        (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
    ).map((post) => ({
        title: post.data.title,
        description: post.data.description,
        link: `/blog/${post.id}`,
        pubDate: post.data.pubDate,
        categories: post.data.tags,
    }));

    return rss({
        title: `${PORTFOLIO.profile.displayName} — Blog & Projects`,
        description: PORTFOLIO.profile.bio,
        site: context.site ?? PORTFOLIO.site.url,
        items: [
            ...blogItems,
            ...PORTFOLIO.projects.items.map((p) => ({
                title: p.title,
                description: p.description ?? "",
                link: p.link,
                pubDate: parsePeriod(p.period.start),
                categories: p.skills,
            })),
        ],
        customData: `<language>${PORTFOLIO.site.language}</language>`,
    });
};
