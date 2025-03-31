import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SocialLink } from "@/components/social-link";
import ModeToggle from "@/components/mode-toggle";
import { NAME, SOCIAL_LINKS, TIMEZONE, WORK } from "./data";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { GridPattern } from "@/components/grid-pattern";
import { cn } from "@/lib/utils";
import { ResumeCard } from "@/components/ResumeCard";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="border-b border-t flex justify-between items-center sticky top-0 z-50 bg-background backdrop-blur-3xl">
        <h1 className="py-1 px-10 font-mono font-medium">fadils<span className="text-muted-foreground text-xs">.xyz</span></h1>
        <div className="items-center hidden md:flex">
          <div className="flex border-l py-5 pl-10 text-xs gap-10 pr-10">
            <p >ABOUT</p>
            <p >PROJECTS</p>
            <p >BLOG</p>
          </div>
          <p className=" text-xs text-muted-foreground border-l px-2 py-2 ">
            <ModeToggle />
          </p>
        </div>
      </header >

      <main className="flex flex-row">
        {/* Left Stripe Pattern */}
        <div className="hidden md:block w-14 relative" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(100, 100, 120, 0.2) 0px, rgba(100, 100, 120, 0.2) 1px, transparent 1px, transparent 10px)'
        }}></div>

        {/* Main Content */}
        <div className="min-h-screen flex-1 border-x text-sm">
          <div className="space-y-5">
            {/* Profile Section */}
            <section className="relative">
              <div className="flex container p-10 items-center justify-center gap-x-6 relative z-10">
                <div className="flex flex-col">
                  <Image src="/profile.png" alt="profile" width={100} height={100} className="border rounded-full bg-muted/50" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xs text-left">{NAME}</h1>
                  <p className="text-muted-foreground font-light text-xs">{TIMEZONE}</p>
                  <p className="text-xs text-left">{ }</p>
                  <div className="flex gap-3">
                    {SOCIAL_LINKS.map((link) => (
                      <SocialLink
                        key={link.icon}
                        href={link.href}
                        icon={link.icon}
                        label={link.label}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="md:grid-cols-[1fr_1.5fr] border-0 md:border-t grid grid-cols-1">
            {/* Left Section */}
            <div className="space-y-5 md:border-r border-0">
              <section className="space-y-6 border-t md:border-t-0 border-0 px-5 py-5">
                <div className="flex container justify-between items-center gap-4">
                  <div className="flex flex-col text-left space-y-2">
                    <h2 className="text-muted-foreground">ABOUT</h2>
                    <p className="font-medium text-normal">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus pariatur cumque ratione quaerat quia beatae, ut rerum in voluptates maxime. Ex ea dolore dicta hic distinctio ipsa quia voluptatem ducimus!
                    </p>
                  </div>
                </div>
              </section>
              <section className="space-y-6 border-t md:border-t-0 border-0 px-5 py-5">
                <div className="flex container justify-between items-center gap-4">
                  <div className="flex flex-col text-left space-y-2">
                    <h2 className="text-muted-foreground">ABOUT</h2>
                    <p className="font-medium text-normal">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus pariatur cumque ratione quaerat quia beatae, ut rerum in voluptates maxime. Ex ea dolore dicta hic distinctio ipsa quia voluptatem ducimus!
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Section */}
            <div className="space-y-5">
              <section id="work-experience" className="px-5 py-5">
                <div className="flex min-h-0 flex-col gap-y-3">
                  <h3 className="uppercase text-muted-foreground">Work Experience</h3>
                  {/* <ResumeCard
                    logoUrl="/bulba.svg"
                    altText="Logo"
                    title="Bulba Cloud"
                    subtitle="Software Engineer"
                    period="February 2025 - Present"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium quam reiciendis facere corporis iusto assumenda perspiciatis temporibus asperiores cupiditate tempore, quas animi ducimus ea ipsam iste sit, iure eligendi?"
                  /> */}

                  {WORK.map((work, id) => (
                    <ResumeCard
                      key={work.company}
                      logoUrl={work.logoUrl}
                      altText={work.company}
                      title={work.company}
                      subtitle={work.title}
                      href={work.href}

                      period={`${work.start} - ${work.end ?? "Present"}`}
                      description={work.description}
                    />
                  ))}

                  {/* {DATA.work.map((work, id) => (
                    <BlurFade
                      key={work.company}
                      delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                    >
                      <ResumeCard
                        key={work.company}
                        logoUrl={work.logoUrl}
                        altText={work.company}
                        title={work.company}
                        subtitle={work.title}
                        href={work.href}
                        badges={work.badges}
                        period={`${work.start} - ${work.end ?? "Present"}`}
                        description={work.description}
                      />
                    </BlurFade>
                   ))} */}
                </div>
              </section>

              <section className="space-y-6 border-t px-5 py-5">
                <div className="flex container justify-between items-center gap-4">
                  <div className="flex flex-col text-left space-y-2">
                    <h2 className="text-sm text-muted-foreground">BLOG</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquam, nihil doloribus explicabo consectetur culpa molestiae alias! Quam dolores nam eum laborum dolor, modi eveniet. Atque alias tempore esse laudantium?
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Right Stripe Pattern */}
        < div className="hidden md:block w-14 relative" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(100, 100, 120, 0.2) 0px, rgba(100, 100, 120, 0.2) 1px, transparent 1px, transparent 10px)'
        }
        }></div >
      </main >

      <footer className="border-t">
        <div className="flex flex-col justify-center container items-center py-5 text-center gap-4">
          <p className="text-muted-foreground">
            &copy; 2025 Fadil. All rights reserved.
          </p>
        </div>
      </footer>
    </div >
  );
}