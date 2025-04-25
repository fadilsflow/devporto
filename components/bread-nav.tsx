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
} from "@/components/ui/breadcrumb";
import React from "react";

export function BreadNav() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

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
  if (pathSegments.length === 0) {
    return null;
  }

  return (
    <Breadcrumb className="capitalize text-sm md:text-base overflow-x-auto py-2 w-full">
      <BreadcrumbList className="flex-wrap gap-1 md:gap-2">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {/* Generate breadcrumbs dynamically based on path depth */}
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="truncate max-w-[120px] sm:max-w-none">
                    {segment}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    className="truncate max-w-[100px] sm:max-w-none"
                    href={href}
                  >
                    {segment}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
