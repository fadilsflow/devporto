// src/components/sections/Section.tsx
import React from 'react'

interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
}

export const Section = ({ id, title, children }: SectionProps) => (
  <section aria-labelledby={id} className="py-16 first:pt-8">
    <h2
      id={id}
      className="uppercase text-muted-foreground pb-4"
    >

      {title}
    </h2>
    {children}
  </section>
)
