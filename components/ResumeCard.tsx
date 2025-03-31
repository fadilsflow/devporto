"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

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
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none">
                <div className="flex items-start gap-4 space-y-2">
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
                    <div className="flex-grow min-w-0">
                        <AccordionTrigger className="py-0 flex flex-col hover:no-underline">
                            <div className="flex items-center justify-between w-full cursor-pointer">
                                <div className="flex items-center gap-x-2">
                                    <h3 className="font-medium text-sm flex flex-col">
                                        {title}
                                        {subtitle && (
                                            <span className="text-xs">
                                                {subtitle}
                                            </span>
                                        )}
                                    </h3>
                                </div>
                                <div className="text-muted-foreground tabular-nums">
                                    {period}
                                </div>
                            </div>
                        </AccordionTrigger>
                        {description && (
                            <AccordionContent className="mt-2 text-md">
                                {description}
                            </AccordionContent>
                        )}
                    </div>
                </div>
            </AccordionItem>
        </Accordion>
    );
};