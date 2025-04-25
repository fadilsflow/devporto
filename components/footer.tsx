"use client";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";
import BreadNav from "./bread-nav";

export function Footer() {
  return (
    <footer className="mt-10">
      <div className="max-w-3xl mx-auto mb-4">
        <BreadNav />
      </div>
      <div className="max-w-3xl mx-auto flex justify-between items-center gap-6   ">
        <div className="relative text-xs  tracking-wider w-fit ">
          &copy; 2025 /{" "}
          <Link href="/" className=" font-bold">
            fadils
          </Link>{" "}
          / Build your portfolio with{" "}
          <span className="font-bold text-green-500">
            <a href="https://www.vercel.com">Devporto</a>
          </span>
        </div>
        <div className=" w-fit">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  );
}
