'use client'

import Link from 'next/link'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { AnimatedBackground } from './motion-primitives/animated-background'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

const SOCIAL_LINKS = [
  {
    label: 'Linkedin¹',
    href: 'https://linkedin.com/in/fadilsflow',
  },
  {
    label: 'Instagram²',
    href: 'https://instagram.com/fadilsflow',
  },
  {
    label: 'Twitter³',
    href: 'https://twitter.com/fadilsflow',
  },
  {
    label: 'Reading⁴',
    href: '/reading',
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {THEMES_OPTIONS.map((theme) => {
        return (
          <button
            key={theme.id}
            className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
            type="button"
            aria-label={`Switch to ${theme.label} theme`}
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/50 bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12">
          {/* Theme Toggle */}
        

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - Version */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-border px-2 py-1 font-mono text-xs">
                  v4.3.0
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  LAST UPDATED 2025-03-28
                </span>
              </div>
            </div>

            {/* Center Column - Links */}
            <div className="flex flex-col items-start gap-4">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Column - CTA */}
            <div className="flex flex-col items-start gap-4">
              <span className="font-mono text-xs">
                Let's build something together.
              </span>
              <Link
                href="mailto:wahyufadil1140@gmail.com"
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                wahyufadil1140@gmail.com
              </Link>
            </div>
          </div>
        </div>
          <div className="flex justify-end">
            <ThemeSwitch />
          </div>
      </div>
    </footer>
  )
}
