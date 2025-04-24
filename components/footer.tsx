"use client";

import Link from "next/link";
import ThemeSwitch from "./theme-switch";

export function Footer() {
  return (
    <footer className="mt-10">
      <div className="max-w-3xl mx-auto flex justify-between items-center gap-6   ">
        <Link href="/">
          <div className="relative text-xs font-mono tracking-wider border bg-card px-2 py-1 rounded-full w-fit ">
            <span className=" font-bold">fadils</span>.xzy
          </div>
        </Link>
        <div className=" w-fit">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  );
}
