"use client"

import React from "react"
import Image, { StaticImageData } from "next/image"
import bespokePreview from "@/../public/images/bespoke-preview-v2.webp"
import automedicsPreview from "@/../public/images/automedics-preview-v2.webp"
import entitledPreview from "@/../public/images/entitled-preview-v2.webp"
import zeroPreview from "@/../public/images/react-zero-ui-preview.jpg"
import codesyncPreview from "@/../public/images/codesync-preview.webp"
import emailbotPreview from "@/../public/images/emailbot-preview.webp"
import flowsilkPreview from "@/../public/images/flowsilk.webp"
import bhartlensPreview from "@/../public/images/Bharatlens.webp"
import repoInfoPreview from "@/../public/images/repoinfo.webp"
import leetcodematePreview from "@/../public/images/leetcodemate-preview.webp"
import contestplatformPreview from "@/../public/images/contestPlatform.webp"
import filekeeperPreview from "@/../public/images/filekeeper-preview.webp"
import canavaxPreview from "@/../public/images/canavax-preview.webp"
import skillScribePreview from "@/../public/images/skillscribe.webp"
import jwdInterprisePreview from "@/../public/images/jwd-preew.webp"
import fairDealPreview from "@/../public/images/fairdeal.webp"
import { externalLinks, SITE_SLUGS } from "@/config/siteConfig"

export type StaticProject = {
  id: string
  title: string
  date: string
  description: string
  tags: string[]
  src: StaticImageData
  alt: string
  color: string
  type: string
  text: string
  href: string
  dataText: string
  ariaLabel: string
  isExternal: boolean
  freelance?: boolean
}

export const STATIC_PROJECTS: StaticProject[] = [
  {
    id: "codesync",
    title: "CodeSync",
    date: "Sep . 2025",
    description: "A real-time collaborative code editor with instant room sharing, live cursor tracking, and multi-language syntax highlighting.",
    tags: ["Next.js", "TypeScript", "Socket.io", "Monaco Editor", "Tailwind CSS", "WebRTC", "Nodejs", "docker", "excalidrew", "express", "Redis", "postgres", "prisma ORM"],
    src: codesyncPreview,
    alt: "CodeSync - Preview",
    color: "#2ecc71",
    type: "Collaborative Code Editor",
    text: "Live link",
    href: SITE_SLUGS.projectLinks.codesync,
    dataText: "Live link",
    ariaLabel: "View CodeSync Live",
    isExternal: true,
  },
  {
    id: "emailbot",
    title: "Emailbot",
    date: "Sep . 2026",
    description: "A email bot that redirect your importent email to your whatsapp ",
    tags: ["Next.js", "TypeScript", "kafka", "Tailwind CSS", "Redis", "postgres", "gemini", "prisma", "Docker"],
    src: emailbotPreview,
    alt: "Emailbot - Preview",
    color: "#2ecc71",
    type: "Emailbot",
    text: "Live link",
    href: SITE_SLUGS.projectLinks.emailbot,
    dataText: "Live link",
    ariaLabel: "View Emailbot Live",
    isExternal: true,
  },
  {
    id: "movie booking",
    title: "Movies Booking Web",
    date: "Aug . 2025",
    description: "A high-performance full-stack cinema ticket reservation and movie booking platform with real-time seat selection.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js"],
    src: zeroPreview,
    alt: "Movies Booking Web - Preview",
    color: "#3B06D1",
    type: "Movies Booking Web",
    text: "Live link",
    href: externalLinks.zeroCore,
    dataText: "Live link",
    ariaLabel: "View Movies Booking Web",
    isExternal: true,
  },
  {
    id: "contestplatform",
    title: "ContestPlatform",
    date: "Jul . 2025",
    description: "Competitive programming and coding contest platform featuring automated test runners, leaderboards, and submission history.",
    tags: ["React", "TypeScript", "Node.js", "Docker", "PostgreSQL", "Express"],
    src: contestplatformPreview,
    alt: "ContestPlatform - Preview",
    color: "#3498db",
    type: "Coding Contest Platform",
    text: "Live link",
    href: SITE_SLUGS.projectLinks.contestplatform,
    dataText: "Live link",
    ariaLabel: "View ContestPlatform Live",
    isExternal: true,
  },
  {
    id: "Bhartlens",
    title: "BhartLens",
    date: "Jul . 2025",
    description: "BhartLens is a website that helps people find the best places to visit in India. It provides information about the best places to visit in India, as well as the best time to visit them.",
    tags: ["React", "TypeScript", "Node.js", "Docker", "PostgreSQL", "Express"],
    src: bhartlensPreview,
    alt: "BhartLens - Preview",
    color: "#3498db",
    type: "Tourism Platform",
    text: "Live link",
    href: SITE_SLUGS.projectLinks.bharatlens,
    dataText: "Live link",
    ariaLabel: "View BhartLens Live",
    isExternal: true,
  },
  {
    id: "filekeeper",
    title: "FileKeeper",
    date: "Jun . 2025",
    description: "A secure cloud file storage and digital asset management system with sharing controls and fast preview rendering.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "AWS S3", "Tailwind CSS"],
    src: filekeeperPreview,
    alt: "FileKeeper - Preview",
    color: "#9b59b6",
    type: "File Management System",
    text: "Live link",
    href: SITE_SLUGS.projectLinks.filekeeper,
    dataText: "Live link",
    ariaLabel: "View FileKeeper Live",
    isExternal: true,
  },
  {
    id: "leetcodemate",
    title: "LeetCodeMate",
    date: "May . 2025",
    description: "A developer tool and companion app designed to track LeetCode problem patterns, daily streaks, and contest performance.",
    tags: ["React", "TypeScript", "Tailwind CSS", "LeetCode API", "Vite"],
    src: leetcodematePreview,
    alt: "LeetCodeMate - Preview",
    color: "#f1c40f",
    type: "LeetCode Assistant",
    text: "See on GitHub",
    href: SITE_SLUGS.projectLinks.leetcodemate,
    dataText: "See On GitHub",
    ariaLabel: "See LeetCodeMate on GitHub",
    isExternal: false,
  },
  {
    id: "canavax",
    title: "Canavax",
    date: "Mar . 2025",
    description: "An interactive HTML5 canvas digital whiteboard and drawing application with shapes, export tools, and undo/redo history.",
    tags: ["React", "TypeScript", "HTML5 Canvas", "Tailwind CSS"],
    src: canavaxPreview,
    alt: "Canavax - Preview",
    color: "#e67e22",
    type: "Canvas Drawing Tool",
    text: "Live link",
    href: SITE_SLUGS.projectLinks.canavax,
    dataText: "Live link",
    ariaLabel: "View Canavax Live",
    isExternal: true,
  },
  {
    id: "shopping web",
    title: "Shopping Website",
    date: "Dec . 2024",
    description: "A modern e-commerce storefront build optimized for fast conversions, responsive micro-animations, and seamless checkout.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Framer Motion"],
    src: bespokePreview,
    alt: "E -Com Preview",
    color: "#024EFC",
    type: "E-Comm Website",
    text: "See On GitHub",
    href: SITE_SLUGS.projectLinks.bespoke,
    dataText: "See On GitHub",
    ariaLabel: "See Bespoke Website Build Case Study",
    isExternal: false,
  },
  {
    id: "automedics",
    title: "Chat App Preview",
    date: "Oct . 2024",
    description: "A simple chat application with real-time messaging and user authentication.",
    tags: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
    src: automedicsPreview,
    alt: "Chat App Preview",
    color: "#000000",
    type: "Chat App Preview",
    text: "See on GitHub",
    href: SITE_SLUGS.projectLinks.automedics,
    dataText: "See On GitHub",
    ariaLabel: "See Automedics Website Build Case Study",
    isExternal: false,
  },
  {
    id: "school-management",
    title: "School-management",
    date: "Jun . 2024",
    description: "A school and institute management web portal for managing student records, attendance, grades, and faculty schedules.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    src: entitledPreview,
    alt: "School Management",
    color: "#DA961AA5",
    type: "School Management Web App",
    text: "Live link",
    href: externalLinks.entitled,
    dataText: "Live link",
    ariaLabel: "View Entitled Website",
    isExternal: true,
  },
  {
    id: "flowsilk",
    title: "flow-silk",
    date: "Jun . 2026",
    description: "Skilled based tasked distribution system using AI",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "github", "resume-parser", "llm"],
    src: flowsilkPreview,
    alt: "flow-silk",
    color: "#DA961AA5",
    type: "Skilled based tasked distribution system",
    text: "See on Github",
    href: externalLinks.flowsilk,
    dataText: "See on Github",
    ariaLabel: "View flow-silk",
    isExternal: false,
  },
  {
    id: "repoinfo",
    title: "Repo Info",
    date: "Jun . 2026",
    description: "chat with any git repo and find out project info ",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "github", "resume-parser", "llm"],
    src: repoInfoPreview,
    alt: "repoInfo",
    color: "#DA961AA5",
    type: "Skilled based tasked distribution system",
    text: "Live link",
    href: SITE_SLUGS.projectLinks.repoInfo,
    dataText: "Live link",
    ariaLabel: "View repoInfo",
    isExternal: false,
  },
  {
    id: "skillScribe",
    title: "skillScribe",
    date: "Jun . 2026",
    description: "AI intervew practice platform",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "github", "resume-parser", "llm"],
    src: skillScribePreview,
    alt: "skillScribe",
    color: "#DA961AA5",
    type: "AI intervew practice platform",
    text: "See on Github",
    href: externalLinks.skillScreab,
    dataText: "See on Github",
    ariaLabel: "View skillScribe",
    isExternal: false,
  },
  {
    id: "fair deal gurugram web",
    title: "Fair Deal Gurugram Web",
    date: "June . 2025",
    description:
      "Freelance client build — a fair deal gurugram web is a platform that helps you to manage your fair deal gurugram this is a property listing web site with filter and sort options",
    tags: ["Freelance", "Next.js", "React", "TypeScript", "Tailwind CSS"],
    src: fairDealPreview,
    alt: "fair deal gurugram web preview",
    color: "#22d3ee",
    type: "Freelance · Property Listing Web Site with filter and sort options",
    text: "Live link",
    href: SITE_SLUGS.projectLinks.fairDeal,
    dataText: "Live link",
    ariaLabel: "View fair deal gurugram web Live",
    isExternal: false,
    freelance: true,
  },
  {
    id: "jwd-interprise",
    title: "JWD Interprise",
    date: "Jun . 2026",
    description:
      "Freelance client build — a clothing catalog for JWD Interprise with collection browsing, filters, and sort. Designed for customers to find products fast, not a generic template.",
    tags: ["Freelance", "Next.js", "React", "TypeScript", "Tailwind CSS"],
    src: jwdInterprisePreview,
    alt: "JWD Interprise clothing catalog preview",
    color: "#22d3ee",
    type: "Freelance · Clothing Catalog",
    text: "Live link",
    href: SITE_SLUGS.projectLinks.jwdInterprise,
    dataText: "Live link",
    ariaLabel: "View JWD Interprise Live",
    isExternal: true,
    freelance: true,
  },

]

export const ProjectsStatic: React.FC = () => {
  return (
    <section className="border-t border-[var(--border)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-8 md:px-11 md:py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {STATIC_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-4 md:p-5 transition-all duration-300 hover:border-[var(--border-hover)] hover:shadow-lg"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-neutral-900/5 dark:bg-neutral-900">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Content */}
              <div className="mt-4 flex flex-1 flex-col justify-between gap-3">
                <div>
                  {/* Title & Date */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex min-w-0 items-center gap-2">
                      <h2 className="truncate text-lg font-semibold tracking-tight text-[var(--text-primary)]">
                        {project.title}
                      </h2>
                      {project.freelance && (
                        <span className="shrink-0 rounded-full bg-cyan-500/15 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-cyan-500 uppercase ring-1 ring-cyan-500/30">
                          Freelance
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs text-[var(--text-muted)]">
                      {project.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[var(--pill-border)] bg-[var(--pill-bg)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--pill-text)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live Link Button */}
                <div className="mt-3 border-t border-[var(--border-subtle)] pt-3 text-center">
                  <a
                    href={project.href}
                    target={project.isExternal ? "_blank" : undefined}
                    rel={project.isExternal ? "noopener noreferrer" : undefined}
                    aria-label={project.ariaLabel}
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    <span>{project.text}</span>
                    <svg
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}