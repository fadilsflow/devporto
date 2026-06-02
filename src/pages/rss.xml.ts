import rss from "@astrojs/rss";
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

export const GET: APIRoute = (context) => {
    return rss({
        title: `${PORTFOLIO.profile.displayName} — ${PORTFOLIO.profile.jobTitle}`,
        description: PORTFOLIO.profile.bio,
        site: context.site ?? PORTFOLIO.site.url,
        items: PORTFOLIO.projects.items.map((p) => ({
            title: p.title,
            description: p.description ?? "",
            link: p.link,
            pubDate: parsePeriod(p.period.start),
            categories: p.skills,
        })),
        customData: `<language>${PORTFOLIO.site.language}</language>`,
    });
};
