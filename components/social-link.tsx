
import Image from "next/image"

interface SocialLinkProps {
    href: string
    icon: string
    label: string
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
    return (

        <a href={href} target="_blank" rel="noopener noreferrer" className="border-none p-2 rounded-full hover:rotate-12 transition-all duration-300 hover:scale-110">
            <Image
                src={`/${icon}.svg`}
                alt={label}
                width={20}
                height={20}
                className="dark:invert invert-0 opacity-50 hover:opacity-100 transition-all duration-300"
            />
        </a>

    )
} 