"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
    logoUrl: string;
    altText: string;
    title: string;
    subtitle?: string;
    href?: string;
    period: string;
    description?: string;
}

export const ResumeCard = ({
    logoUrl,
    altText,
    title,
    subtitle,
    href,
    period,
    description,
}: ResumeCardProps) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (description) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <div className="group">
            <div className="flex items-start gap-4">
                <div className="flex-none">
                    <Link href={href || "#"} className="block">
                        <Avatar className="size-10 bg-foreground p-1.5">
                            <AvatarImage
                                src={logoUrl}
                                alt={altText}
                                className="object-contain"
                            />
                            <AvatarFallback>{altText[0]}</AvatarFallback>
                        </Avatar>
                    </Link>
                </div>
                <div className="flex-grow min-w-0 cursor-pointer" onClick={handleClick}>
                    <div className="flex items-center justify-between gap-x-2">
                        <div className="flex items-center gap-x-2">
                            <h3 className="font-medium text-sm">
                                {title}
                            </h3>
                            <ChevronRightIcon
                                className={cn(
                                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                                    isExpanded ? "rotate-90" : "rotate-0"
                                )}
                            />
                        </div>
                        <div className="text-muted-foreground tabular-nums">
                            {period}
                        </div>
                    </div>
                    {subtitle && (
                        <div className="text-xs">
                            {subtitle}
                        </div>
                    )}
                    {description && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: isExpanded ? 1 : 0,
                                height: isExpanded ? "auto" : 0,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="mt-2 text-md "
                        >
                            {description}
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};