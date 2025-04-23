import { NAME, LOCATION, SOCIAL_LINKS, BIO } from "@/app/data";
import Image from "next/image";
import { SocialLink } from "./social-link";
import { TimeDisplay } from "./time-display";

export default function Header() {
  return (
    <div className="group relative">
      <div className="flex  gap-6 ">
        <div className="relative">
          <Image
            src="/profile.png"
            alt={`${NAME}'s profile picture`}
            width={200}
            height={200}
            className="rounded-full bg-muted border-4 border-border border-double"
            priority
          />
        </div>

        <div className="space-y-1 text-center sm:text-left">
          <div className="space-y-1 flex flex-col justify-start items-start">
            <h1 className="text-xl font-mono md:text-xl font-bold tracking-tight">
              {NAME}
            </h1>
            <p className="text-[10px] text-foreground font-bold border-green-600 border bg-green-700 py-[2px] px-[6px] rounded-full w-fit ">
              Full Stack Developer
            </p>
          </div>
          <div>
            <p className="text-sm text-md font-light  text-left ">{BIO}</p>
          </div>

          <div className="space-y-1 flex">
            {SOCIAL_LINKS.map((link) => (
              <SocialLink key={link.href} icon={link.label} {...link} />
            ))}
          </div>
        </div>

        <div className="absolute right-2 top-2  sm:flex hidden ">
          <TimeDisplay location={LOCATION} />
        </div>
      </div>
    </div>
  );
}
