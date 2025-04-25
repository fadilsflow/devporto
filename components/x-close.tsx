import { X } from "lucide-react";
import Link from "next/link";

export function XClose({ href }: { href: string }) {
  return (
    <div>
      <Link
        href={href}
        className=" absolute right-0 top-0 text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
      >
        <X />
      </Link>
    </div>
  );
}
