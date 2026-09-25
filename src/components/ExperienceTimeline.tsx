"use client"

import { useRef } from "react"
import { useScroll, useSpring, useTransform } from "motion/react"
import { MotionDiv, MotionSpan } from "@/lib/lazy-ui"
import { AnimatedH2 } from "@/components/ui/AnimatedH2"
import {
  FaRocket,
  FaTrophy,
  FaGithub,
  FaGraduationCap,
  FaBolt,
  FaTerminal,
  FaBriefcase,
  FaHome,
} from "react-icons/fa"

type TimelineTag = "education" | "project" | "achievement" | "opensource" | "freelance"

type TimelineItem = {
  year: string
  title: string
  subtitle: string
  description: string
  tag: TimelineTag
  icon: typeof FaRocket
}

const TAG_META: Record<
  TimelineTag,
  { label: string; color: string; glow: string; wash: string }
> = {
  freelance: {
    label: "Freelance",
    color: "#22d3ee",
    glow: "rgba(34, 211, 238, 0.45)",
    wash: "rgba(34, 211, 238, 0.14)",
  },
  education: {
    label: "Education",
    color: "#60a5fa",
    glow: "rgba(96, 165, 250, 0.45)",
    wash: "rgba(96, 165, 250, 0.14)",
  },
  project: {
    label: "Project",
    color: "#34d399",
    glow: "rgba(52, 211, 153, 0.45)",
    wash: "rgba(52, 211, 153, 0.14)",
  },
  achievement: {
    label: "Achievement",
    color: "#fbbf24",
    glow: "rgba(251, 191, 36, 0.45)",
    wash: "rgba(251, 191, 36, 0.14)",
  },
  opensource: {
    label: "Open Source",
    color: "#c084fc",
    glow: "rgba(192, 132, 252, 0.45)",
    wash: "rgba(192, 132, 252, 0.14)",
  },
}

const TIMELINE: TimelineItem[] = [
  {
    year: "jan . 2026 – Present",
    title: "Freelance Full-Stack Engineer",
    subtitle: "fair deal gurugram · property listing site with filters and sort",
    description:
      "Freelance work for fair deal gurugram — a property listing site with filters and sort so shoppers can browse properties quickly. Owned the UI, listing UX, and shipping the build.",
    tag: "freelance",
    icon: FaHome,
  },
  {
    year: "2025 – December . 2025",
    title: "Freelance Full-Stack Engineer",
    subtitle: "JWD Interprise clothing catalog · client delivery",
    description:
      "Freelance work for JWD Interprise — a clothing listing site with filters and sort so shoppers can browse collections quickly. Owned the UI, listing UX, and shipping the build.",
    tag: "freelance",
    icon: FaBriefcase,
  },
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
  const meta = TAG_META[item.tag]
  const isLeft = index % 2 === 0
  const Icon = item.icon

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid grid-cols-[2.75rem_1fr] gap-4 md:grid-cols-[1fr_3.5rem_1fr] md:gap-0"
    >
      {/* Desktop spacer so cards zigzag around the spine */}
      <div className={`hidden md:block ${isLeft ? "order-3" : "order-1"}`} />

      {/* Spine node */}
      <div className="relative z-10 flex justify-center md:order-2">
        <div
          className="journey-node relative mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[var(--bg)]"
          style={{
            background: `linear-gradient(145deg, ${meta.color}, color-mix(in srgb, ${meta.color} 55%, #0f172a))`,
            boxShadow: `0 0 0 4px color-mix(in srgb, ${meta.color} 22%, transparent), 0 0 28px ${meta.glow}`,
          }}
        >
          <Icon size={16} />
        </div>
      </div>

      {/* Card */}
      <div className={`mb-10 md:mb-16 ${isLeft ? "md:order-1 md:pr-10 md:text-right" : "md:order-3 md:pl-10"}`}>
        <article
          className="group relative overflow-hidden rounded-2xl border p-5 shadow-sm transition-[transform,box-shadow] duration-500 hover:-translate-y-1 md:p-6"
          style={{
            borderColor: `color-mix(in srgb, ${meta.color} 32%, var(--border))`,
            background: `linear-gradient(${isLeft ? "125deg" : "235deg"}, ${meta.wash} 0%, var(--bg-card) 42%, var(--bg-card) 100%)`,
            boxShadow: `0 18px 40px -28px ${meta.glow}`,
          }}
        >
          <div
            className={`pointer-events-none absolute -top-16 h-36 w-36 rounded-full blur-3xl opacity-70 transition-opacity duration-500 group-hover:opacity-100 ${isLeft ? "right-[-1.5rem]" : "left-[-1.5rem]"}`}
            style={{ background: meta.glow }}
          />
          <div
            className={`absolute top-0 h-full w-1 ${isLeft ? "md:right-0 md:left-auto left-0" : "left-0"}`}
            style={{ background: `linear-gradient(180deg, ${meta.color}, transparent)` }}
          />

          <div className={`relative mb-3 flex flex-wrap items-center gap-2 ${isLeft ? "md:justify-end" : ""}`}>
            <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-[var(--text-muted)] uppercase">
              {item.year}
            </span>
            <span
              className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase"
              style={{
                color: meta.color,
                background: `color-mix(in srgb, ${meta.color} 16%, transparent)`,
                boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${meta.color} 35%, transparent)`,
              }}
            >
              {meta.label}
            </span>
          </div>

          <h4 className="relative text-base font-semibold tracking-tight text-[var(--text-primary)] md:text-lg">
            {item.title}
          </h4>
          <p className="relative mt-1 text-sm font-medium text-[var(--text-secondary)]">{item.subtitle}</p>
          <p className="relative mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{item.description}</p>
        </article>
      </div>
    </MotionDiv>
  )
}

export const ExperienceTimeline = ({ className = "" }: { className?: string }) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.85", "end 0.35"],
  })
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 22, restDelta: 0.001 })
  const lineGlow = useTransform(scrollYProgress, [0, 1], [0.25, 0.85])

  return (
    <section className={`relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg)] transition-colors duration-200 ${className}`}>
      <div className="pointer-events-none absolute inset-0">
        <div className="journey-orb journey-orb-a" />
        <div className="journey-orb journey-orb-b" />
        <div className="journey-orb journey-orb-c" />
      </div>

      <div className="inside-container relative">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <AnimatedH2>
            My <br />
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-300 bg-clip-text text-transparent">
              Journey
            </span>
          </AnimatedH2>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--text-muted)] md:pb-2 md:text-right">
            From first C++ programs to freelance client work — a path of shipping, learning, and raising the bar.
          </p>
        </div>

        <div ref={trackRef} className="relative mx-auto mt-14 max-w-5xl">
          <div className="pointer-events-none absolute top-5 bottom-8 left-[1.375rem] w-px bg-[var(--border)] md:left-1/2 md:-translate-x-px" />
          <MotionDiv
            className="pointer-events-none absolute top-5 bottom-8 left-[1.375rem] w-[3px] origin-top rounded-full md:left-1/2 md:-translate-x-[1.5px]"
            style={{
              scaleY: lineScale,
              opacity: lineGlow,
              background:
                "linear-gradient(180deg, #22d3ee 0%, #34d399 28%, #c084fc 55%, #fbbf24 78%, #60a5fa 100%)",
              boxShadow: "0 0 18px rgba(34, 211, 238, 0.45)",
            }}
          />

          {TIMELINE.map((item, i) => (
            <TimelineCard key={item.title} item={item} index={i} />
          ))}

          <div className="relative z-10 flex justify-start pl-[14px] md:justify-center md:pl-0">
            <MotionSpan
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="h-3.5 w-3.5 rounded-full"
              style={{
                background: "linear-gradient(135deg, #22d3ee, #c084fc)",
                boxShadow: "0 0 16px rgba(192, 132, 252, 0.7)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
