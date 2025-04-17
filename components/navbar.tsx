"use client"

import { Menu, X } from 'lucide-react';
import Link from 'next/link';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/articles', label: 'Articles' },
  { href: '/contact', label: 'Contact' },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="border-b border-border/50">
        <div className="container mx-auto">
          <div className="flex h-16 items-center justify-between">
            {/* Left side - Name */}
            <Link 
              href="/" 
              className="font-mono text-xs hover:text-primary transition-colors"
            >
              wahyu akhmad fadillah
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-mono text-xs transition-colors hover:text-primary",
                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>


            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 -mr-2 inline-flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
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
        <div className="md:hidden border-b border-border/50">
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