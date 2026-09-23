"use client"

import { m } from "framer-motion"
import { MotionDiv } from "@/lib/lazy-ui"
import { AnimatedH2 } from "@/components/ui/AnimatedH2"

import {
  FaRocket,
  FaTrophy,
  FaGithub,
  FaGraduationCap,
  FaBolt,
  FaTerminal
} from "react-icons/fa"

type TimelineItem = {
  year: string
  title: string
  subtitle: string
  description: string
  tag: "education" | "project" | "achievement" | "opensource"
  icon: any
}

const TAG_STYLES: Record<string, { bg: string; text: string; dot: string }> = {
  education: { bg: "bg-blue-50 dark:bg-blue-950/60", text: "text-blue-600 dark:text-blue-400", dot: "bg-blue-500" },
  project: { bg: "bg-emerald-50 dark:bg-emerald-950/60", text: "text-emerald-600 dark:text-emerald-400", dot: "bg-emerald-500" },
  achievement: { bg: "bg-amber-50 dark:bg-amber-950/60", text: "text-amber-600 dark:text-amber-400", dot: "bg-amber-500" },
  opensource: { bg: "bg-purple-50 dark:bg-purple-950/60", text: "text-purple-600 dark:text-purple-400", dot: "bg-purple-500" },
}

const TAG_LABELS: Record<string, string> = {
  education: "Education",
  project: "Project",
  achievement: "Achievement",
  opensource: "Open Source",
}

const TIMELINE: TimelineItem[] = [
  {
    year: "2025 – Present",
    title: "Building Full-Stack Products",
    subtitle: "CodeSync, ContestPlatform, FileKeeper & more",
    description:
      "Shipping production-grade apps with Next.js, TypeScript, WebRTC, and PostgreSQL. Building real-time collaborative tools and scalable platforms used by real users.",
    tag: "project",
    icon: FaRocket,
  },
  {
    year: "2025",
    title: "550+ LeetCode Problems Solved",
    subtitle: "Contest Rating: 1,473 · Top 53%",
    description:
      "Consistently solving algorithmic challenges across arrays, trees, graphs, and dynamic programming. Competed in biweekly contests with a peak max streak of 37 days.",
    tag: "achievement",
    icon: FaTrophy,
  },
  {
    year: "2025",
    title: "Open Source Contributions",
    subtitle: "Kana Dojo, Harbor Satellite, Cal.com & more",
    description:
      "Contributing to real-world open-source projects — fixing bugs, adding features, and collaborating with global developer communities on GitHub.",
    tag: "opensource",
    icon: FaGithub,
  },
  {
    year: "2024",
    title: "Deep Dive into Full-Stack Development",
    subtitle: "React, Next.js, Node.js, Express, MongoDB, PostgreSQL",
    description:
      "Mastered the MERN stack and beyond — learned server-side rendering, REST APIs, authentication, database design, and deployment pipelines with Docker and CI/CD.",
    tag: "education",
    icon: FaGraduationCap,
  },
  {
    year: "2024",
    title: "First Projects Shipped",
    subtitle: "Blog Platform, E-commerce, Movie Booking",
    description:
      "Built and deployed my first full-stack applications — a blog platform, an e-commerce site, and a movie ticket booking system with payment integration.",
    tag: "project",
    icon: FaBolt,
  },
  {
    year: "2023",
    title: "Started Coding Journey",
    subtitle: "C++, Data Structures & Algorithms",
    description:
      "Began learning programming with C++ and competitive programming. Built a strong foundation in DSA that now powers my problem-solving approach in every project.",
    tag: "education",
    icon: FaTerminal,
  },
]

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
  const style = TAG_STYLES[item.tag]
  const isLeft = index % 2 === 0

  return (
    <m.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="group relative flex gap-6 md:gap-8"
    >
      {/* Timeline line & dot */}
      <div className="relative flex flex-col items-center">
        <div className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)] text-[var(--bg)] shadow-md transition-transform duration-300 group-hover:scale-110`}>
          <item.icon size={18} />
        </div>
        {index < TIMELINE.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-[var(--border)] to-[var(--border-subtle)]" />
        )}
      </div>

      {/* Content card */}
      <div className="mb-10 flex-1 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 shadow-sm transition-all duration-300 hover:border-[var(--border-hover)] hover:shadow-md">
        {/* Year + Tag */}
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold tracking-wider text-[var(--text-muted)] uppercase">{item.year}</span>
          <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${style.bg} ${style.text}`}>
            {TAG_LABELS[item.tag]}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-base font-semibold text-[var(--text-primary)] md:text-lg">{item.title}</h4>
        <p className="mt-0.5 text-sm font-medium text-[var(--text-secondary)]">{item.subtitle}</p>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{item.description}</p>
      </div>
    </m.div>
  )
}

export const ExperienceTimeline = ({ className = "" }: { className?: string }) => {
  return (
    <section className={`inside-container border-t border-[var(--border)] bg-[var(--bg)] transition-colors duration-200 ${className}`}>
      <AnimatedH2>
        My <br />
        <span className="text-[var(--text-muted)]">Journey</span>
      </AnimatedH2>

      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="relative mx-auto mt-12 max-w-2xl"
      >
        {TIMELINE.map((item, i) => (
          <TimelineCard key={item.title} item={item} index={i} />
        ))}

        {/* Bottom "dot" */}
        <div className="flex justify-start pl-[13px]">
          <div className="h-3.5 w-3.5 rounded-full border-2 border-[var(--border)] bg-[var(--bg-surface)]" />
        </div>
      </MotionDiv>
    </section>
  )
}
