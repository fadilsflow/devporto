"use client";
import { NAME, NAVIGATION_LINKS, SOCIAL_LINKS } from "@/app/data";
import ThemeSwitch from "./theme-switch";
import { SocialLink } from "./social-link";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-10">
      <div className="container mx-auto px-4 ">
        <div className="max-w-3xl mx-auto  ">
          {/* Bottom Section */}

          <div className="flex flex-wrap justify-between  items-center gap-3">
            <div className="flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <SocialLink key={link.href} icon={link.label} {...link} />
              ))}
            </div>
            <div className="flex gap-4 ">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center gap-6 py-12">
            <div className="text-xs tracking-wider">{NAME} &copy; 2025</div>
            <div className="border px-2 py-1 rounded-full w-fit">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
