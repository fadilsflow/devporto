import type { APIRoute } from "astro";
import { USER } from "../data/user";
import { PROJECTS } from "../data/projects";
import { EXPERIENCES } from "../data/experiences";
import { SOCIAL_LINKS } from "../data/social-links";

export const GET: APIRoute = ({ site }) => {
    const base = site?.toString().replace(/\/$/, "") ?? "https://fadils.web.id";

    const body = `# ${USER.displayName}

> ${USER.bio}

- Name: ${USER.displayName}
- Role: ${USER.jobTitle}
- Location: ${USER.address}
- Website: ${USER.website}
- Pronouns: ${USER.pronouns}

## Pages

- [Portfolio](${base}/): Home page with profile, social links, about, tech stack, experience and projects.
- [Resume](${base}/resume): Full professional resume.

## Projects

${PROJECTS.map(
    (p) =>
        `- [${p.title}](${p.link}) (${p.period.start}${p.period.end ? ` – ${p.period.end}` : " – present"}): ${(p.description ?? "").split("\n").join(" ").trim()}`,
).join("\n")}

## Experience

${EXPERIENCES.map(
    (e) =>
        `- ${e.companyName}${e.isCurrentEmployer ? " (current)" : ""}: ${e.positions.map((p) => `${p.title} (${p.employmentPeriod.start}${p.employmentPeriod.end ? ` – ${p.employmentPeriod.end}` : " – present"})`).join("; ")}`,
).join("\n")}

## Links

${SOCIAL_LINKS.map((s) => `- [${s.title}](${s.href})`).join("\n")}

## Machine-readable

- Sitemap: ${base}/sitemap-index.xml
- Full content: ${base}/llms-full.txt
`;

    return new Response(body, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
};
