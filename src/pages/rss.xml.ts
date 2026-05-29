import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { USER } from "../data/user";
import { PROJECTS } from "../data/projects";

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
        title: `${USER.displayName} — ${USER.jobTitle}`,
        description: USER.bio,
        site: context.site ?? USER.website,
        items: PROJECTS.map((p) => ({
            title: p.title,
            description: p.description ?? "",
            link: p.link,
            pubDate: parsePeriod(p.period.start),
            categories: p.skills,
        })),
        customData: `<language>en-us</language>`,
    });
};
