import React from "react"
import { ProjectsGrid } from "@/components/ProjectGrid"
import { AnimatedText } from "@/components/AnimatedText"
import Link from "next/link"
import { Icon } from "@/components/Icon"
import { SITE_SLUGS } from "@/config/siteConfig"

export const ProjectsSection: React.FC = () => {
  return (
    <section className="inside-container bg-[var(--bg)] transition-colors duration-200">
      <div className="pointer-events-none relative z-5 mix-blend-exclusion">
        <AnimatedText
          text="Latest Projects "
          margin={300}
          once={true}
          className="inline-block text-4xl leading-9 tracking-tighter whitespace-nowrap text-white md:text-5xl md:leading-12 lg:text-6xl"
        />
      </div>

      <ProjectsGrid />

      <Link href={SITE_SLUGS.projects} className="group flex items-center justify-center gap-2">
        <span className="underline-hover text-xl leading-6 tracking-tight text-[var(--text-secondary)] transition-colors group-hover:text-[var(--text-primary)] md:text-2xl">
          View More Projects
        </span>
        <Icon name="arrow-right" height={25} width={18} className="text-[var(--text-secondary)] transition-colors group-hover:animate-wiggle-right group-hover:text-[var(--text-primary)]" strokeWidth={0.5} />
      </Link>
    </section>
  )
}