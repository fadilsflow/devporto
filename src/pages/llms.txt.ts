import type { APIRoute } from "astro";
import { PORTFOLIO } from "../data/portfolio";

export const GET: APIRoute = ({ site }) => {
    const { profile, projects, experiences, socialLinks } = PORTFOLIO;
    const base = site?.toString().replace(/\/$/, "") ?? PORTFOLIO.site.url.replace(/\/$/, "");

    const body = `# ${profile.displayName}

> ${profile.bio}

- Name: ${profile.displayName}
- Role: ${profile.jobTitle}
- Location: ${profile.address.label}
- Website: ${profile.website}
- Pronouns: ${profile.pronouns ?? ""}

## Pages

- [Portfolio](${base}/): Home page with profile, social links, about, tech stack, experience and projects.
- [Resume](${base}/resume): Full professional resume.

## Projects

${projects.items.map(
    (p) =>
        `- [${p.title}](${p.link}) (${p.period.start}${p.period.end ? ` – ${p.period.end}` : " – present"}): ${(p.description ?? "").split("\n").join(" ").trim()}`,
).join("\n")}

## Experience

${experiences.map(
    (e) =>
        `- ${e.companyName}${e.isCurrentEmployer ? " (current)" : ""}: ${e.positions.map((p) => `${p.title} (${p.employmentPeriod.start}${p.employmentPeriod.end ? ` – ${p.employmentPeriod.end}` : " – present"})`).join("; ")}`,
).join("\n")}

## Links

${socialLinks.map((s) => `- [${s.title}](${s.href})`).join("\n")}

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
