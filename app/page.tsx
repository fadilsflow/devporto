import { NAME } from "./data";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Moon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen   bg-gradient-to-b from-background to-muted/50">
      {/* Header */}
      <header className="border-b pl-10  border-x flex justify-between items-center ">
        <h1 className="font-medium">FADILS.XYZ</h1>
        <div className="flex items-center gap-2">
          <p className="border-l text-sm text-muted-foreground px-3 py-3">HOME</p>
          <p className="border-l text-sm text-muted-foreground px-3 py-3">ABOUT</p>
          <p className="border-l text-sm text-muted-foreground px-3 py-3">PROJECTS</p>
          <p className="border-l text-sm text-muted-foreground px-3 py-3">BLOG</p>
          <p className="border-l text-sm text-muted-foreground px-3 py-3"><Moon width={15} height={15} /></p>

        </div>
      </header>

      <main className="md:grid-cols-[1fr_1.5fr]  px-10 text-sm grid grid-cols-1  ">
        {/* Left Section */}
        <div className="space-y-5 border-x md:border-r border-0 pr-1 py-5 px-10">
          <section className="" >
            <div className="flex container justify-between items-center gap-4">
              <div className="flex flex-col  text-left space-y-2">
                <h2 className="text-muted-foreground ">ABOUT</h2>
                <p className="font-medium text-normal  ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus pariatur cumque ratione quaerat quia beatae, ut rerum in voluptates maxime. Ex ea dolore dicta hic distinctio ipsa quia voluptatem ducimus!
                </p>
                <Link href="/about">
                  <Button variant="ghost">
                    <Github />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

        </div>


        {/* Right Section */}
        <div className="space-y-12 py-5 border-x ">
          <section className="space-y-6 px-10 border-t md:border-t-0 border-0 pt-5">
            <div className="flex justify-between">
              <h3 className="uppercase text-muted-foreground">TEAM</h3>
              <h3 className="uppercase text-muted-foreground">DESCRIPTION</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <div>
                  <h4 >Bulba Cloud</h4>
                  <p className="text-sm">2025 - Present</p>
                </div>
                <div className="text-right">
                  <p>Building Beautiful Tools For Your</p>
                  <p>Life's Work.</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h4 className="font-medium">Freelance Web Developer</h4>
                  <p className="text-sm">2025 - Present</p>
                </div>
                <div className="text-right">
                  <p>Building Beautiful Tools For Your</p>
                  <p>Life's Work.</p>
                </div>
              </div>
            </div>
          </section>


          <section className="border-t  border-b pt-5">
            <div className="flex container justify-between items-center px-10 gap-4">
              <div className="flex flex-col  text-left space-y-2">
                <h2 className="text-sm text-muted-foreground ">BLOG</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquam, nihil doloribus explicabo consectetur culpa molestiae alias! Quam dolores nam eum laborum dolor, modi eveniet. Atque alias tempore esse laudantium?</p>
              </div>
            </div>
          </section>
        </div>


      </main>
    </div>
  )
}

