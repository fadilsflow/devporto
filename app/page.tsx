
import ModeToggle from "@/components/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b flex justify-between items-center">
        <h1 className="font-medium py-3 px-10">FADILS.XYZ</h1>
        <div className="items-center  hidden md:flex">
          <p className="border-l text-sm text-muted-foreground px-5 py-5">HOME</p>
          <p className="border-l text-sm text-muted-foreground px-5 py-5">ABOUT</p>
          <p className="border-l text-sm text-muted-foreground px-5 py-5">PROJECTS</p>
          <p className="border-l text-sm text-muted-foreground px-5 py-5  ">BLOG</p>
          <p className="border-l text-sm text-muted-foreground px-2 py-3 ">
            <ModeToggle />
          </p>
        </div>
      </header>


      <main className="min-h-screen   bg-gradient-to-b mx-0 md:mx-14 border-x from-background to-muted/50  text-sm">
        <div className="space-y-5 pr-1 px-5 py-5">
          <section>
            <div className="flex flex-col container text-center  items-center gap-2">
              <Image src={"/profile.png"} alt="profile" width={100} height={100} className="border bg-muted/50 rounded-full" />
              <h1 className="text-2xl text-muted-foreground font-black">Wahyu Akhmad Fadillah</h1>
              <p className="text-2xl text-muted-foreground">Full Stack Developer</p>
            </div>
          </section>
        </div>
        <div className="md:grid-cols-[1fr_1.5fr] border-t  grid grid-cols-1">
          {/* Left Section */}
          <div className="space-y-5 md:border-r border-0 pr-1 px-5 py-5">
            <section>
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
          <div className="space-y-5  ">

            <section className="space-y-6 border-t md:border-t-0 border-0 px-5  py-5 ">
              <div className="flex justify-between">
                <h3 className="uppercase text-muted-foreground">TEAM</h3>
                <h3 className="uppercase text-muted-foreground">DESCRIPTION</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium">Bulba Cloud</h4>
                    <p className="text-sm text-muted-foreground">2023 - Present</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Building Beautiful Tools For Your</p>
                    <p className="text-muted-foreground">Life's Work</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium">Freelance Web Developer</h4>
                    <p className="text-sm text-muted-foreground">2023 - Present</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Creating Modern Web Experiences</p>
                    <p className="text-muted-foreground">With Latest Technologies</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6 border-t  px-5  py-5 ">
              <div className="flex container justify-between items-center gap-4">
                <div className="flex flex-col text-left space-y-2">
                  <h2 className="text-sm text-muted-foreground">BLOG</h2>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquam, nihil doloribus explicabo consectetur culpa molestiae alias! Quam dolores nam eum laborum dolor, modi eveniet. Atque alias tempore esse laudantium?
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
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

