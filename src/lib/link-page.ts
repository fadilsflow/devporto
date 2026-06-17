import { type PortfolioConfig, type LinkItem } from "../data";
import { decodeContact } from "./utils";

export function buildLinkPageData(config: PortfolioConfig) {
  const { profile, linkPage, socialLinks } = config;
  const email = decodeContact(profile.email, profile.contactEncoding);
  const phone = decodeContact(profile.phoneNumber, profile.contactEncoding);

  const primaryLinks: LinkItem[] = [
    ...socialLinks
      .filter((link) => link.placements.includes("linksPrimary"))
      .map((link) => ({
        title: link.title.toLowerCase(),
        href: link.href,
        external: true,
      })),
    ...linkPage.primaryLinks,
  ];

  const secondaryLinks: LinkItem[] = [
    ...socialLinks
      .filter((link) => link.placements.includes("linksSecondary"))
      .map((link) => ({
        title: link.title.toLowerCase(),
        href: link.href,
        external: true,
      })),
    ...linkPage.secondaryLinks,
    ...(email
      ? [{ title: "mail" as const, href: `mailto:${email}`, external: true }]
      : []),
    ...(phone
      ? [{ title: "ph" as const, href: `https://wa.me/${phone}`, external: true }]
      : []),
  ];

  return { primaryLinks, secondaryLinks };
}
