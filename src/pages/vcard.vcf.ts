import type { APIRoute } from "astro";
import { PORTFOLIO } from "../data/portfolio";
import { decodeContact } from "../lib/utils";

export const GET: APIRoute = () => {
    const { profile } = PORTFOLIO;
    const email = decodeContact(profile.email, profile.contactEncoding);
    const phone = decodeContact(profile.phoneNumber, profile.contactEncoding);
    const job = profile.jobs[0];

    // RFC 6350 vCard 3.0
    const lines = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `N:${profile.lastName};${profile.firstName};;;`,
        `FN:${profile.displayName}`,
        job && `ORG:${job.company}`,
        job && `TITLE:${job.title}`,
        phone && `TEL;TYPE=CELL:${phone}`,
        email && `EMAIL;TYPE=INTERNET:${email}`,
        `ADR;TYPE=HOME:;;${profile.address.label};;;;`,
        `URL:${profile.website}`,
        `PHOTO;VALUE=URI:${profile.avatar}`,
        `NOTE:${profile.bio.replace(/\n/g, "\\n")}`,
        `REV:${new Date().toISOString()}`,
        "END:VCARD",
    ].filter(Boolean);

    return new Response(lines.join("\r\n"), {
        headers: {
            "Content-Type": "text/vcard; charset=utf-8",
            "Content-Disposition": `attachment; filename=${profile.username}-vcard.vcf`,
            "Cache-Control": "public, max-age=3600",
        },
    });
};
