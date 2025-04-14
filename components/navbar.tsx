import { NAME } from "@/app/data";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className=" flex bg-background sticky top-0 z-50 py-2 border-b justify-between items-center">
    <div className="flex px-5   items-center gap-2 py-2">
        <Link href="/" className="font-medium text-md">
            {NAME}
        </Link>


    </div>
    <div className="items-center hidden md:flex">
      <div className="flex  py-5 pl-10 text-xs gap-10 pr-10"></div>
      <p className="text-xs text-muted-foreground">

      </p>
    </div>
  </header>

  );
}