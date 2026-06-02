import portfolio from "./portfolio";
import { portfolioSchema } from "./portfolio.schema";

export const PORTFOLIO = portfolioSchema.parse(portfolio);

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
