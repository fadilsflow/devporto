import type { APIRoute } from "astro";
import { PORTFOLIO } from "../data/portfolio";

export const GET: APIRoute = ({ site }) => {
    const base = site?.toString().replace(/\/$/, "") ?? PORTFOLIO.site.url.replace(/\/$/, "");

    const body = `User-agent: *
Allow: /

# AI crawlers — explicit allow for discoverability
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /

Sitemap: ${base}/sitemap-index.xml
`;

    return new Response(body, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
};
