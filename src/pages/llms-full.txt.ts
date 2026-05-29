import type { APIRoute } from "astro";
import { USER } from "../data/user";
import { PROJECTS } from "../data/projects";
import { EXPERIENCES } from "../data/experiences";
import { SOCIAL_LINKS } from "../data/social-links";
import { TECH_STACK } from "../data/tech-stack";
import { decodeBase64 } from "../lib/utils";

export const GET: APIRoute = ({ site }) => {
    const base = site?.toString().replace(/\/$/, "") ?? "https://fadils.web.id";
    const email = decodeBase64(USER.email);

    const body = `# ${USER.displayName}

> ${USER.bio}

## Profile

- Full name: ${USER.firstName} ${USER.lastName}
- Display name: ${USER.displayName}
- Username: ${USER.username}
- Pronouns: ${USER.pronouns}
- Job title: ${USER.jobTitle}
- Location: ${USER.address}
- Website: ${USER.website}
- Email: ${email}
- Avatar: ${USER.avatar}
- Keywords: ${USER.keywords.join(", ")}

## About

${USER.about.trim()}

## Current employment

${USER.jobs.map((j) => `- ${j.title} at [${j.company}](${j.website})`).join("\n")}

## Tech stack

${TECH_STACK.map((t) => `- ${t.title} (${t.categories.join(", ")}) — ${t.href}`).join("\n")}

## Experience

${EXPERIENCES.map((e) => {
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

${PROJECTS.map((p) => {
    const period = `${p.period.start}${p.period.end ? ` – ${p.period.end}` : " – present"}`;
    return `### ${p.title}\n\n- Link: ${p.link}\n- Period: ${period}\n- Tech: ${p.skills.join(", ")}\n\n${(p.description ?? "").trim()}`;
}).join("\n\n")}

## Social links

${SOCIAL_LINKS.map((s) => `- ${s.title}: ${s.href} (${s.description})`).join("\n")}

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
