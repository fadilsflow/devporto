"use client";

import {
  NAME,
  SOCIAL_LINKS,
  EMAIL,
  NICKNAME,
  LINKS_PAGE_LINKS,
} from "@/app/data";
import Image from "next/image";
import { SocialLink } from "@/components/social-link";
import Link from "next/link";
import { ShareButton } from "@/components/share-button";
import { BreadNav } from "@/components/bread-nav";
const ProfileImage = () => (
  <div className="relative flex-shrink-0">
    <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] relative">
      <Image
        src="/profile.png"
        alt={`${NAME}&apos;s profile picture`}
        fill
        className="rounded-full bg-muted border-4 border-border border-double object-cover"
        priority
      />
    </div>
  </div>
);

const ProfileInfo = () => (
  <div className="space-y-3 text-center w-full">
    <div className="space-y-2 flex flex-col items-center">
      <h1 className="text-xl font-mono md:text-xl font-bold tracking-tight">
        Hi, I&apos;m {NICKNAME}. Mostly code, sometimes design. you&apos;re
        probably here for one of these things...
      </h1>
    </div>
    <div className="flex justify-center gap-2">
      {SOCIAL_LINKS.map((link) => (
        <SocialLink key={link.href} {...link} />
      ))}
    </div>
    <div className="text-center">
      <p className="text-sm font-bold inline-flex items-center gap-2 text-muted-foreground">
        <span>Interested in working together?</span>
        <a className="text-foreground hover:underline" href={`mailto:${EMAIL}`}>
          Email me!
        </a>
      </p>
    </div>
  </div>
);

const LinkCard = ({ link }: { link: (typeof LINKS_PAGE_LINKS)[0] }) => (
  <div className="w-full h-auto  flex items-center justify-center border border-border rounded-lg bg-card/50 hover:bg-card/30 transition-all">
    <Link
      href={link.href}
      className="w-full flex flex-col items-center gap-1 px-4 py-4 "
    >
      <span className="text-lg font-semibold">{link.label}</span>
      <p className="text-sm text-muted-foreground text-center line-clamp-2">
        {link.description}
      </p>
    </Link>
  </div>
);

export default function LinksPage() {
  return (
    <div className="min-h-screen relative max-w-md mx-auto">
      <main className="space-y-8">
        <div className="flex justify-between ">
          <BreadNav />
          <ShareButton />
        </div>
        <div className="relative flex flex-col gap-6 items-center justify-center text-center">
          <ProfileImage />
          <ProfileInfo />
          <div className="w-full space-y-4">
            {LINKS_PAGE_LINKS.map((link) => (
              <LinkCard key={link.href} link={link} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
