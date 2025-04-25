"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "./ui/breadcrumb";

export default function BreadNav() {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((name) => name);

  const route = [
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Projects",
      href: "/projects",
    },
  ];
  if (pathname === "/") {
    return (
      <div className="flex gap-2">
        {route.map((item, index) => (
          <Link key={index} href={item.href} className="text-xs ">
            {item.name}
          </Link>
        ))}
      </div>
    );
  }
  // Handle empty paths
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <Breadcrumb className="capitalize text-sm md:text-base overflow-x-auto py-2 w-full">
      <BreadcrumbList className="flex-wrap gap-1 md:gap-2">
        <BreadcrumbItem>
          <Link href="/">
            <BreadcrumbLink>Home</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>

        {/* Generate breadcrumbs dynamically based on path depth */}
        {pathnames.map((name, index) => {
          const href = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <BreadcrumbItem key={href}>
              <BreadcrumbSeparator />
              {isLast ? (
                <BreadcrumbPage className="truncate max-w-[120px] sm:max-w-none">
                  {name}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink
                  className="truncate max-w-[100px] sm:max-w-none"
                  asChild
                >
                  <Link href={href}>{name}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
