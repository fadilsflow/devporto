import { NAME, LOCATION, SOCIAL_LINKS, BIO } from "@/app/data";
import Image from "next/image";
import { SocialLink } from "./social-link";
import { TimeDisplay } from "./time-display";
import { Badge } from "./ui/badge";

const ProfileImage = () => (
  <div className="relative flex-shrink-0">
    <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] relative">
      <Image
        src="/profile.png"
        alt={`${NAME}'s profile picture`}
        fill
        className="rounded-full bg-muted border-4 border-border border-double object-cover"
        priority
      />
    </div>
  </div>
);

const ProfileInfo = () => (
  <div className="space-y-3 text-center sm:text-left w-full">
    <div className="space-y-2 flex flex-col items-center sm:items-start">
      <h1 className="text-xl font-mono md:text-xl font-bold tracking-tight">
        {NAME}
      </h1>
      <Badge className="text-[10px] font-bold" variant={"outline"}>
        Full Stack Developer
      </Badge>
    </div>
    <p className="text-sm text-md font-light text-center sm:text-left">{BIO}</p>
    <div className="flex justify-center sm:justify-start gap-2">
      {SOCIAL_LINKS.map((link) => (
        <SocialLink key={link.href} icon={link.label} {...link} />
      ))}
    </div>
    <div className="text-center sm:text-left">
      <a
        href="mailto:wahyufadil1140@gmail.com"
        className="text-sm font-bold inline-flex items-center gap-2 text-muted-foreground hover:text-foreground/80 transition-colors"
      >
        <span>Interested in working together?</span>
        <span className="text-foreground">Email me!</span>
      </a>
    </div>
  </div>
);

export default function Header() {
  return (
    <header className="group relative">
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        <ProfileImage />
        <ProfileInfo />
        <div className="absolute right-2 top-2 sm:flex hidden">
          <TimeDisplay location={LOCATION} />
        </div>
      </div>
    </header>
  );
}
