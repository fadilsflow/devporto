import type { APIRoute } from "astro";
import { PORTFOLIO } from "../data/portfolio";
import { decodeContact } from "../lib/utils";

export const GET: APIRoute = ({ site }) => {
    const { profile, projects, experiences, socialLinks, techStack } = PORTFOLIO;
    const base = site?.toString().replace(/\/$/, "") ?? PORTFOLIO.site.url.replace(/\/$/, "");
    const email = decodeContact(profile.email, profile.contactEncoding);

    const body = `# ${profile.displayName}

> ${profile.bio}

## Profile

- Full name: ${profile.firstName} ${profile.lastName}
- Display name: ${profile.displayName}
- Username: ${profile.username}
- Pronouns: ${profile.pronouns ?? ""}
- Job title: ${profile.jobTitle}
- Location: ${profile.address.label}
- Website: ${profile.website}
- Email: ${email ?? ""}
- Avatar: ${profile.avatar}
- Keywords: ${profile.keywords.join(", ")}

## About

${profile.about.trim()}

## Current employment

${profile.jobs.map((j) => `- ${j.title} at ${j.website ? `[${j.company}](${j.website})` : j.company}`).join("\n")}

## Tech stack

${techStack.map((t) => `- ${t.title} (${t.categories.join(", ")}) — ${t.href}`).join("\n")}

## Experience

${experiences.map((e) => {
    const positions = e.positions
        .map((p) => {
            const period = `${p.employmentPeriod.start}${p.employmentPeriod.end ? ` – ${p.employmentPeriod.end}` : " – present"}`;
            const type = p.employmentType ? ` (${p.employmentType})` : "";
            const skills = p.skills?.length ? `\n  Skills: ${p.skills.join(", ")}` : "";
            const desc = p.description ? `\n${p.description.trim().split("\n").map((l) => `  ${l}`).join("\n")}` : "";
            return `- ${p.title} — ${period}${type}${skills}${desc}`;
        })
        .join("\n");
    return `### ${e.companyName}${e.isCurrentEmployer ? " (current)" : ""}\n\n${positions}`;
}).join("\n\n")}

## Projects

${projects.items.map((p) => {
    const period = `${p.period.start}${p.period.end ? ` – ${p.period.end}` : " – present"}`;
    return `### ${p.title}\n\n- Link: ${p.link}\n- Period: ${period}\n- Tech: ${p.skills.join(", ")}\n\n${(p.description ?? "").trim()}`;
}).join("\n\n")}

## Social links

${socialLinks.map((s) => `- ${s.title}: ${s.href} (${s.description})`).join("\n")}

## Machine-readable

- Site: ${base}
- Sitemap: ${base}/sitemap-index.xml
- Summary: ${base}/llms.txt
`;

    return new Response(body, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
};
