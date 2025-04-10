"use client";

import ModeToggle from "@/components/mode-toggle";
import { ResumeCard } from "@/components/ResumeCard";
import {
  WORK,
  NAME,
  type Work,
  TECHSTACK,
  CONTACT_BIO,
} from "./data";
import Image from "next/image";
import Link from "next/link";

import TechStack from "@/components/tech-stack";
import { ContactBio } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="border-b border-t flex justify-between items-center sticky top-0 z-50 bg-background backdrop-blur-3xl">
        <div className="flex lg:pl-20 md:pl-20 pl-5 items-center gap-2 py-2">
          <Image
            src={"/profile.png"}
            alt="wahyu akhmad fadillah"
            width={35}
            height={35}
            className="rounded-full border-4 "
          />
          <h1 className="font-mono font-medium">{NAME}</h1>
        </div>
        <div className="items-center hidden md:flex">
          <div className="flex  py-5 pl-10 text-xs gap-10 pr-10"></div>
          <p className="text-xs text-muted-foreground border-l px-2 py-2">
            <ModeToggle />
          </p>
        </div>
      </header>

      <main className="flex flex-row">
        {/* Left Stripe Pattern */}
        <div
          className="hidden md:block w-14 relative"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(100, 100, 120, 0.2) 0px, rgba(100, 100, 120, 0.2) 1px, transparent 1px, transparent 10px)",
          }}
        ></div>

        {/* Main Content */}
        <div className="min-h-screen flex-1 border-x text-sm">
          <div className="md:grid-cols-[1.2fr_1fr] border-0 md:border-t border-dashed grid grid-cols-1">
            {/* Left Section */}
            <div className="space-y-5 ">
              <section className="space-y-6 border-t border-dashed md:border-t-0 border-0 px-5  py-5">
                <div className="flex container justify-between items-center gap-4">
                  <div className="flex  flex-col text-left space-y-2 max-w-md">
                    <h2 className="text-muted-foreground">ABOUT</h2>
                    <p className="font-medium text-normal leading-relaxed">
                      Hi, I&apos;m Fadil — a 19-year-old fullstack developer
                      from Indonesia who builds fast, accessible, and modern web
                      apps. I use TypeScript, React, Next.js, Tailwind,
                      PostgreSQL, and Bun.
                      <Link
                        href="/link"
                        className="relative inline-block underline decoration-dotted hover:bg-yellow-200/5  hover:text-yellow-400 underline-offset-1 decoration-1"
                      >
                        Available for work or tech collaborations
                      </Link>
                      .
                    </p>
                    <div className="flex gap-5">
                      {CONTACT_BIO.map((link) => (
                        <ContactBio
                          key={link.href}
                          href={link.href}
                          icon={link.icon}
                          label={link.label}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <section className="space-y-6 border border-dashed rounded-tr-4xl px-5 py-5">
                <div className="flex container justify-between items-start gap-4">
                  <div className="flex flex-col text-left space-y-2 w-full">
                    <h2 className="text-muted-foreground">
                      CURRENT TECHNOLOGIES
                    </h2>
                    <div className="flex flex-wrap gap-2 justify-start">
                      {TECHSTACK.map((tech) => (
                        <TechStack
                          key={tech.href}
                          href={tech.href}
                          icon={tech.icon}
                          title={tech.title}
                          description={tech.description}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Section */}
            <div className="space-y-5 ">
              <section className="space-y-6 border-t border-dashed md:border-t-0 border-0 px-5 py-5">
                <div className="flex flex-col text-left container justify-between gap-4">
                  <h3 className="uppercase text-muted-foreground">WORK</h3>
                  {WORK.map((work: Work) => (
                    <ResumeCard
                      key={work.company}
                      title={work.company}
                      period={`${work.start} - ${work.end ?? "Present"}`}
                      description={work.description}
                      href={work.href}
                    />
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* <section id="projects" className="border-t border-dashed">
            <div className="flex min-h-0 flex-col gap-y-3 px-5 py-5">
              <h3 className="uppercase text-muted-foreground">PROJECTS</h3>
              <p className="text-muted-foreground">
                Here are some of the projects I've worked on.
              </p>
              <BentoGrid projects={projects} />
            </div>
          </section> */}
        </div>

        {/* Right Stripe Pattern */}
        <div
          className="hidden md:block w-14 relative"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(100, 100, 120, 0.2) 0px, rgba(100, 100, 120, 0.2) 1px, transparent 1px, transparent 10px)",
          }}
        ></div>
      </main>

      <footer className="border-t">
        <div className="flex flex-col justify-center container items-center py-5 text-center gap-4">
          <p className="text-muted-foreground">
            &copy; 2025 Fadil. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
