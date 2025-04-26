import type { Viewport } from "next";
import { FAVICONS } from "../data";

/**
 * Default viewport configuration
 * Next.js has moved viewport and themeColor from metadata to viewport
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-viewport
 */
export const defaultViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: FAVICONS.theme_color },
    { media: "(prefers-color-scheme: dark)", color: FAVICONS.background },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark light",
};
