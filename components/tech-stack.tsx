
import Image from "next/image"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface TechStackProps {
  title: string;
  description: string;
  icon: string;
  href: string
}
export default function TechStack({ href, icon, title, description }: TechStackProps) {
  return (
    <Tooltip >
      <TooltipTrigger asChild>
        <a href={href} target="_blank" rel="noopener noreferrer" className="border-none flex items-center p-2 rounded-full hover:rotate-12 transition-all duration-300 hover:scale-110">
          
          <Image
            src={icon}
            alt={title}
            width={30}
            height={30}
            className="dark:invert invert-0 opacity-50 hover:opacity-100 transition-all duration-300"
          />
        </a>
      </TooltipTrigger>
      <TooltipContent >

        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@{title}</h4>
          <p className="text-sm">
            {description}
          </p>
          <div className="flex items-center pt-2">
          </div>
        </div>
      </TooltipContent >

    </Tooltip>
  )
} 