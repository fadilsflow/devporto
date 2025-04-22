"use client"

import { Menu, X } from 'lucide-react';
import Link from 'next/link';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/articles', label: 'Articles' },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" px-4 md:px-6 sticky top-0 z-50 w-fit ">
      <div className="border-border/50">
        <div className="container ">
       <div className="flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" p-2 -mr-2 inline-flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-b border-border/50">
          <div className="container mx-auto py-4 px-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block font-mono text-xs transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            {pathname !== '/' && (
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Close
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
} 