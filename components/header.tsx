import { NAME, LOCATION, SOCIAL_LINKS } from "@/app/data";
import Image from "next/image";
import { SocialLink } from "./social-link";
import { TimeDisplay } from "./time-display";

export default function Header() {
    return (
        <div className="group relative">
            <div className="flex flex-col sm:flex-row items-center gap-6 ">
                <div className="relative">
                    <Image 
                        src="/profile.png" 
                        alt={`${NAME}'s profile picture`} 
                        width={100} 
                        height={100}  
                        className="rounded-full bg-muted ring-2 ring-border/50"
                        priority
                    />

                </div>

                <div className="space-y-3 text-center sm:text-left">
                    <div className="space-y-1">
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{NAME}</h1>
                        <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        {SOCIAL_LINKS.map((link) => (
                            <SocialLink 
                                key={link.href} 
                                icon={link.label}
                                {...link} 
                            />
                        ))}
                    </div>
                </div>

                <div className="absolute right-2 top-2   p-3 backdrop-blur-sm">
                    <TimeDisplay location={LOCATION} />
                </div>
            </div>
        </div>
    )
}
