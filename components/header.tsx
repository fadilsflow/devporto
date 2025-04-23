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
            className="rounded-full bg-muted ring-2 ring-border/50"
            priority
          />
        </div>

        <div className="space-y-3 text-center sm:text-left">
          <div className="space-y-1 flex flex-col justify-start items-start gap-2">
            <h1 className="text-xl md:text-xl font-bold tracking-tight">
              {NAME}
            </h1>
            <p className="text-xs text-foreground font-bold bg-green-600 py-1 px-2 rounded-full w-fit ">
              Full Stack Developer
            </p>
          </div>
          <div>
            <p className="text-sm text-md font-light  text-left ">
              {BIO}
            </p>
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
