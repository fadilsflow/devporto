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
import React, { useMemo } from "react";
import { NAVIGATION_LINKS } from "@/app/data";
import Script from "next/script";
import { BASE_URL } from "@/app/data";

export function BreadNav() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  // Generate JSON-LD structured data for breadcrumbs
  const breadcrumbJsonLd = useMemo(() => {
    if (pathSegments.length === 0) return null;

    const breadcrumbList = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
    ];

    pathSegments.forEach((segment, index) => {
      const href = `${BASE_URL}/${pathSegments.slice(0, index + 1).join("/")}`;
      const formattedSegment = segment.replace(/-/g, " ");

      breadcrumbList.push({
        "@type": "ListItem",
        position: index + 2,
        name:
          formattedSegment.charAt(0).toUpperCase() + formattedSegment.slice(1),
        item: href,
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbList,
    };
  }, [pathSegments]);

  if (pathname === "/") {
    return (
      <div className="flex items-center gap-4 w-full">
        {NAVIGATION_LINKS.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-xs font-medium hover:underline"
          >
            {item.label}
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
    <>
      {breadcrumbJsonLd && (
        <Script
          id="breadcrumb-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      <Breadcrumb className="pb-5 capitalize text-sm md:text-base overflow-x-auto py-2 w-full">
        <BreadcrumbList className="flex-wrap gap-1 md:gap-2">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          {/* Generate breadcrumbs dynamically based on path depth */}
          {pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const isLast = index === pathSegments.length - 1;
            const formattedSegment = segment.replace(/-/g, " ");

            return (
              <React.Fragment key={href}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="truncate max-w-[120px] sm:max-w-none">
                      {formattedSegment}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      className="truncate max-w-[100px] sm:max-w-none"
                      href={href}
                    >
                      {formattedSegment}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
