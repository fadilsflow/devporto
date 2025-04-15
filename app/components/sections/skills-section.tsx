
// src/components/sections/SkillsSection.tsx
'use client'

import { memo } from 'react'
import Link from 'next/link'
import { Section } from './Section'


interface Skill {
  label: string
  link: string
}

interface SkillsSectionProps {
  skills: Skill[]
}

export const SkillsSection = memo(({ skills }: SkillsSectionProps) => (
  <Section id="skills-heading" title="Technical Skills">
    <div className="flex flex-wrap gap-3 max-w-md">
      {skills.map((skill) => (
        <div key={skill.label}>
          <Link href={skill.link} target="_blank" rel="noopener noreferrer">
              @{skill.label}

          </Link>
        </div>
      ))}
    </div>
  </Section>
))

SkillsSection.displayName = 'SkillsSection'
