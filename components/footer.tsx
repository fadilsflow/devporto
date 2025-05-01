"use client";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";
import { NAME } from "@/app/data";

export function Footer() {
  return (
    <footer className="mt-10">
      <div className="max-w-3xl mx-auto flex justify-between items-center gap-6   ">
        <div className="relative text-xs  tracking-wider w-fit ">
          &copy; 2025 /{" "}
          <Link href="/" className=" font-bold">
            {NAME}
          </Link>{" "}
          / Build your portfolio with{" "}
          <span className="font-black ">
            <a href="https://www.devporto.xyz">Devporto</a>
          </span>
        </div>
        <div className=" w-fit">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  );
}
