import Image from "next/image";

interface ContactBioProps {
  href: string;
  icon: string;
  label: string;
}

export function ContactBio({ href, icon, label }: ContactBioProps) {
  return (
    <div className="px-1.5 py-0.5 rounded-md border bg-card">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="border-none rounded-fulltransition-all duration-300 flex "
      >
        <Image
          src={`/${icon}.svg`}
          alt={label}
          width={15}
          height={15}
          className="dark:invert invert-0 opacity-50 hover:opacity-100 transition-all duration-300"
        />
        <p className="pl-2 text-xs font-bold text-muted-foreground">{label}</p>
      </a>
    </div>
  );
}
