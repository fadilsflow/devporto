import { NAME, LOCATION, SOCIAL_LINKS, BIO, EMAIL } from "@/app/data";
import Image from "next/image";
import { SocialLink } from "@/components/social-link";
import { TimeDisplay } from "@/components/time-display";

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
    <div className=" flex flex-col items-center sm:items-start">
      <h1 className="text-xl md:text-xl font-bold tracking-tight">{NAME}</h1>
      <p className="text-sm font-ligh text-muted-foreground">
        Full Stack Developer
      </p>
    </div>
    <p className="text-sm text-md font-light text-center sm:text-left">{BIO}</p>
    <div className="flex justify-center sm:justify-start gap-2">
      {SOCIAL_LINKS.map((link) => (
        <SocialLink key={link.href} {...link} />
      ))}
    </div>

    <div className="text-center sm:text-left">
      <p className="text-sm font-bold inline-flex items-center gap-2 text-muted-foreground">
        <span>Interested in working together?</span>
        <a className="text-foreground hover:underline" href={`mailto:${EMAIL}`}>
          Email me!
        </a>
      </p>
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
