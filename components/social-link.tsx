import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface SocialLinkProps {
    href: string
    icon: string
    label: string
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
    return (
        <Button variant="link" className="border-none p-0" asChild>
            <Link href={href} target="_blank" rel="noopener noreferrer">
                <Image
                    src={`/${icon}.svg`}
                    alt={label}
                    width={15}
                    height={15}
                    className="dark:invert invert-0 opacity-50 hover:opacity-100 transition-all duration-300"
                />
            </Link>
        </Button>
    )
} 