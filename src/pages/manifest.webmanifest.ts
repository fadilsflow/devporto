import type { APIRoute } from "astro";
import { PORTFOLIO } from "../data";

export const GET: APIRoute = () => {
    const { site, profile } = PORTFOLIO;

    return new Response(
        JSON.stringify(
            {
                name: `${profile.displayName} — ${profile.jobTitle}`,
                short_name: profile.displayName,
                description: site.description,
                start_url: "/",
                scope: "/",
                display: "standalone",
                background_color: site.themeColor.dark,
                theme_color: site.themeColor.dark,
                icons: [
                    {
                        src: "/web-app-manifest-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                    {
                        src: "/web-app-manifest-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                ],
            },
            null,
            2,
        ),
        {
            headers: {
                "Content-Type": "application/manifest+json; charset=utf-8",
            },
        },
    );
};
