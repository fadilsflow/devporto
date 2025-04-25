"use client";

import Link from "next/link";
import ThemeSwitch from "./theme-switch";

export function Footer() {
  return (
    <footer className="mt-10">
      <div className="max-w-3xl mx-auto flex justify-between items-center gap-6   ">
        <div className="relative text-xs font-mono tracking-wider w-fit ">
          &copy; 2025 / <span className=" font-bold">fadils</span> / Build your
          portfolio with{" "}
          <span className="font-bold text-green-500">
            <a href="https://www.vercel.com">devporto</a>
          </span>
        </div>
        <div className=" w-fit">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  );
}
