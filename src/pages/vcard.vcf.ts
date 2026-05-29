import type { APIRoute } from "astro";
import { USER } from "../data/user";
import { decodeBase64 } from "../lib/utils";

export const GET: APIRoute = () => {
    const email = decodeBase64(USER.email);
    const phone = decodeBase64(USER.phoneNumber);
    const job = USER.jobs[0];

    // RFC 6350 vCard 3.0
    const lines = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `N:${USER.lastName};${USER.firstName};;;`,
        `FN:${USER.displayName}`,
        job && `ORG:${job.company}`,
        job && `TITLE:${job.title}`,
        `TEL;TYPE=CELL:${phone}`,
        `EMAIL;TYPE=INTERNET:${email}`,
        `ADR;TYPE=HOME:;;${USER.address};;;;`,
        `URL:${USER.website}`,
        `PHOTO;VALUE=URI:${USER.avatar}`,
        `NOTE:${USER.bio.replace(/\n/g, "\\n")}`,
        `REV:${new Date().toISOString()}`,
        "END:VCARD",
    ].filter(Boolean);

    return new Response(lines.join("\r\n"), {
        headers: {
            "Content-Type": "text/vcard; charset=utf-8",
            "Content-Disposition": `attachment; filename=${USER.username}-vcard.vcf`,
            "Cache-Control": "public, max-age=3600",
        },
    });
};
