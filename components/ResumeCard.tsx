"use client";

import React from "react";

interface ResumeCardProps {
    title: string;
    period: string;
    description?: string;
    href?: string;
}

export const ResumeCard = ({
    title,
    period,
    description,
    href,
}: ResumeCardProps) => {
    const TitleComponent = () => (
        <h3 className=" text-sm mb-1">
            {title}
            {href && <span className="absolute -top-1/40 -right-2 text-[8px] text-yellow-500">↗</span>}
        </h3>
    );

    return (
        <div className="w-full font-medium ">
            <div className="flex gap-8">
                <div className="flex-1">
                    {href ? (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-block underline decoration-dotted hover:bg-yellow-200/10 hover:text-yellow-400 underline-offset-1 decoration-1"
                        >
                            <TitleComponent />
                        </a>
                    ) : (
                        <div className="relative inline-block">
                            <TitleComponent />
                        </div>
                    )}
                    <p >
                        {period}
                    </p>
                </div>
                {description && (
                    <div className="flex-1">
                        <p className="text-sm leading-relaxed">
                            {description}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};