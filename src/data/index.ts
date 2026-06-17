import portfolio from "./portfolio";
import { portfolioSchema } from "./portfolio.schema";
import { decodeContact } from "../lib/utils";

const _parsed = portfolioSchema.parse(portfolio);

const computed = {
  email: decodeContact(_parsed.profile.email, _parsed.profile.contactEncoding),
  phone: decodeContact(_parsed.profile.phoneNumber, _parsed.profile.contactEncoding),
  homeSocialLinks: _parsed.socialLinks.filter((link) =>
    link.placements.includes("home"),
  ),
  siteUrl: _parsed.site.url.replace(/\/$/, ""),
};

export const PORTFOLIO = Object.assign(_parsed, { computed });

export type {
  Experience,
  ExperiencePosition,
  LinkItem,
  NavigationItem,
  PortfolioConfig,
  PortfolioInput,
  Profile,
  Project,
  SocialLink,
  TechStack,
} from "./portfolio.schema";
