"use client";
import { NAME, NAVIGATION_LINKS, SOCIAL_LINKS } from "@/app/data";
import ThemeSwitch from "./theme-switch";
import { SocialLink } from "./social-link";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-10">
      <div className="container mx-auto  ">
        <div className="max-w-3xl mx-auto  ">
          {/* Bottom Section */}

          <div className="flex flex-wrap justify-between relative items-center bg-card gap-3 px-8 border py-8 rounded-lg">
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
            <div className="relative text-xs font-mono tracking-wider border bg-card px-2 py-1 rounded-full w-fit "> <span className="text-green-600 font-bold">fadils</span>.xzy</div>
            <div className=" relative bg-card border px-2 py-1 rounded-full w-fit">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
