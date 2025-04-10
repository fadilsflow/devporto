import { useState } from "react";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface TechStackProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export default function TechStack({
  href,
  icon,
  title,
  description,
}: TechStackProps) {
  return (
    <div className="flex flex-col items-center gap-2 p-2 rounded-lg transition-all duration-300  w-24 sm:w-28">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-2  shadow-sm hover:shadow-md transition-all duration-300 "
      >
        <Image
          src={icon}
          alt={title}
          width={25}
          height={25}
          className="dark:invert invert-0 opacity-70 hover:opacity-100 transition-all duration-300"
        />
      </a>

      <div className="text-center">
        <h4 className="text-xs font-medium ">@{title}</h4>
        {/* <p className="text-xs bg-red line-clamp-2">
          {description}
        </p> */}
      </div>
    </div>
  );
}
