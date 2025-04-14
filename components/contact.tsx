import { ArrowUpRight } from "lucide-react";

interface ContactBioProps {
  href: string;

  label: string;
}

export function ContactBio({ href, label }: ContactBioProps) {
  return (
    <div >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="border-none rounded-fulltransition-all duration-300 flex "
      >
        <p className="pl-2 text-xs font-bold text-muted-foreground">{label}</p>
        <ArrowUpRight className="w-4 h-4" />


      </a>
    </div>
  );
}
