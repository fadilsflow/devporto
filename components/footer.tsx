"use client";

import ThemeSwitch from "./theme-switch";

export function Footer() {
  return (
    <footer className="mt-10">
      <div className="max-w-3xl mx-auto flex justify-between items-center gap-6 py-12  ">
        <div className="relative text-xs font-mono tracking-wider border bg-card px-2 py-1 rounded-full w-fit ">
          {" "}
          <span className=" font-bold">fadils</span>.xzy
        </div>
        <div className=" w-fit">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  );
}
