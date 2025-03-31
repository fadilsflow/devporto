import { BriefcaseIcon, HomeIcon, UserIcon } from "lucide-react";

type Work = {
    company: string;
    href: string;
    title: string;
    location: string;
    logoUrl: string;
    start: string;
    end: string;
    description: string;

}

export const NAME = "Wahyu Akhmad Fadillah";
export const JOB = "Full Stack Developer"
export const EMAIL = "wahyufadil1140@gmail.com"
export const PHONE = "+62 812-3456-7890"
export const TIMEZONE = "Asia/Jakarta (GMT+7)"
export const GITHUB_USERNAME = "fadilsflow"


export const SOCIAL_LINKS = [
    {
        href: "https://github.com/yourusername",
        icon: "github",
        label: "GitHub"
    },
    {
        href: "https://linkedin.com/in/yourusername",
        icon: "linkedin",
        label: "LinkedIn"
    },
    {
        href: "https://instagram.com/yourusername",
        icon: "instagram",
        label: "Instagram"
    },
    {
        href: "https://wa.me/yourphonenumber",
        icon: "whatsapp",
        label: "WhatsApp"
    }
]
export const WORK = [
    {
        company: "Bulba Cloud",
        href: "https://bulba.cloud",
        location: "Remote",
        title: "Software Engineer",
        logoUrl: "/bulba.svg",
        start: "February 2025",
        end: "Present",
        description:
            "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",

    },
    {
        company: "Freelance",
        // href: "https://.com",
        location: "Remote",
        title: "Full-stack Web Developer",
        logoUrl: "/freelance.svg",
        start: "February 2025",
        end: "Present",
        description:
            "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",

    },
]

export const NAVBAR = [
    {
        href: "/",
        icon: HomeIcon,
        label: "Home"
    },
    {
        href: "/about",
        icon: UserIcon,
        label: "About"
    },
    {
        href: "/projects",
        icon: BriefcaseIcon,
        label: "Projects"
    }

]