"use client";


import { ResumeCard } from "@/components/ResumeCard";
import {
  WORK,
  type Work,

  CONTACT_BIO,
  SKILLS,
  projects,
} from "./data";

import Link from "next/link";


import { ContactBio } from "@/components/contact";
import { SkillsSection } from "./components/sections/SkillsSection";
import { BentoGrid } from "@/components/BentoGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



export default function Home() {
  return (
    <div className="min-h-screen relative px-5">
      {/* Header */}
    
      <main className="flex flex-row pt-5">

        {/* Main Content */}
        <div className="min-h-screen flex-1 text-sm space-y-5">
        <div className="md:grid-cols-[1.2fr_1fr] border-0 grid grid-cols-1">
            {/* Left Section */}
            <div className="space-y-5 ">
              <section className="space-y-6">

                  <div className="flex  flex-col text-left space-y-2 max-w-md">
                <h3 className="uppercase text-muted-foreground font-mono ">ABOUT</h3>
                    <p className="font-semibold text-normal leading-relaxed">
                      Hi, I&apos;m Fadil — a 19-year-old fullstack developer
                      from Indonesia. specialist with over 2 years of experience. I use TypeScript, React, Next.js, Tailwind,
                      PostgreSQL, and Bun.
                      <Link
                        href="/link"
                        className="relative inline-block underline decoration-dotted hover:bg-yellow-200/5  hover:text-yellow-400 underline-offset-1 decoration-1"
                      >
                        Available for work or tech collaborations
                      </Link>
                      .
                    </p>
                    <div className="flex gap-5 pt-5">
                      {CONTACT_BIO.map((link) => (
                        <ContactBio
                          key={link.href}
                          href={link.href}
                          label={link.label}
                        />
                      ))}

                  </div>
                </div>
              </section>
              <section className="space-y-6">
                  {/* <SkillsSection skills={SKILLS}/> */}
              </section>

           
            </div>

            {/* Right Section */}
            <div className="space-y-5 ">
              <section className="space-y-6 ">
                <div className="flex flex-col text-left   gap-4">
                  <h3 className="uppercase text-muted-foreground font-mono ">WORK</h3>
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
              <section className="space-y-6 ">
                <div className="flex flex-col text-left   gap-4">
                  <h3 className="uppercase text-muted-foreground font-mono ">BLOG</h3>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <Link href="/blog">Blog</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    </p>
                  </CardContent>
                </Card>
                </div>
              </section>
            </div>
          </div>
          <BentoGrid projects={projects}/>
        </div>
       
      </main>

    </div>
  );
}
