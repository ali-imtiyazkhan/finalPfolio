"use client"

import { AnimatedCard, HeroOffset } from "@/components/ProjectCard/AnimatedCard"
import codesyncPreview from "@/../public/images/codesync-preview.webp"
import skillScribePreview from "@/../public/images/skillscribe.webp"
import flowsilkPreview from "@/../public/images/flowsilk.webp"
import emailbotPreview from "@/../public/images/emailbot-preview.webp"
import clsx from "clsx"
import { useOffset } from "@/hooks/useOffset"
import { useIsMobile } from "@/hooks/useMediaQuery"
import { useRef, useEffect } from "react"
import { useScroll, useSpring, useTransform } from "motion/react"
import { useUI } from "@react-zero-ui/core"
import { externalLinks, SITE_SLUGS } from "@/config/siteConfig"

const ids = ["codesync", "flowsilk", "emailbot", "skillScribe"]

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const responsiveScale = isMobile ? 0.42 : 0.75
  const [, setReveal] = useUI<"true" | "false">("reveal", "false")

  // Accurate scroll tracking: from top of page (0) to when projects section begins (~360px)
  const { scrollY } = useScroll()
  const scrollRange = isMobile ? [0, 240] : [0, 360]
  const scrollProgress = useTransform(scrollY, scrollRange, [0, 1], { clamp: true })

  const stiffness = isMobile ? 140 : 180
  const damping = isMobile ? 26 : 28

  const progress = useSpring(scrollProgress, { stiffness, damping, restDelta: 0.001 })

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    codesync: { rot: 8, s: responsiveScale, dx: isMobile ? -140 : -20, dy: isMobile ? -70 : -30 },
    emailbot: { rot: -6, s: responsiveScale, dx: isMobile ? -160 : -45, dy: isMobile ? -80 : -30 },
    skillScribe: { rot: 4, s: responsiveScale, dx: isMobile ? -150 : -30, dy: isMobile ? -75 : -15 },
    flowsilk: { rot: 10, s: responsiveScale, dx: isMobile ? -155 : -40, dy: isMobile ? -65 : -10 },
  }

  const offsets = Object.fromEntries(
    ids.map((id) => {
      const base = rawOffsets?.[id]
      const t = OFFSET_TUNING[id] || { dx: 0, dy: 0, rot: 0, s: 1 }
      return [
        id,
        {
          x: (base?.x ?? 0) + (t.dx ?? 0),
          y: (base?.y ?? 0) + (t.dy ?? 0),
          rot: t.rot ?? 0,
          s: t.s ?? 1,
        },
      ]
    })
  )

  const triggerProgress = 0.6
  useEffect(() => {
    const current = progress.get()
    if (current >= triggerProgress) {
      setReveal("true")
    } else {
      setReveal("false")
    }

    const unsubscribe = progress.on("change", (latest) => {
      if (latest >= triggerProgress) {
        setReveal("true")
      } else {
        setReveal("false")
      }
    })

    return unsubscribe
  }, [progress, setReveal, triggerProgress])

  return (
    <section id="projects-grid" className={clsx("relative scroll-mt-36", className)} ref={ref}>
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
        <AnimatedCard
          key="CodeSync"
          src={codesyncPreview}
          alt="CodeSync - Real-time Collaborative Code Editor"
          offset={offsets["codesync"]}
          gridId="codesync"
          color="#2ecc71"
          type="Collaborative Code Editor"
          progress={progress}
          href={SITE_SLUGS.projectLinks.codesync}
          dataText="Live Preview"
        />
        <AnimatedCard
          key="emailbot"
          src={emailbotPreview}
          alt="emailbot - AI Email Assistant"
          offset={offsets["emailbot"]}
          gridId="emailbot"
          color="#f1c40f"
          type="AI Email Assistant"
          progress={progress}
          href={SITE_SLUGS.projectLinks.emailbot}
          dataText="Live Preview"
        />
        <AnimatedCard
          key="skillScribe"
          src={skillScribePreview}
          alt="skill-Scribe - Ai powered interview platform"
          offset={offsets["skillScribe"]}
          gridId="skillScribe"
          color="#9b59b6"
          type="Intreview Platform"
          progress={progress}
          href={externalLinks.skillScreab}
          dataText="View On Github"
        />
        <AnimatedCard
          key="flowsilk"
          src={flowsilkPreview}
          alt="flowsilk - Skilled based tasked distribution system"
          offset={offsets["canavax"]}
          gridId="canavax"
          color="#e67e22"
          type="Skilled based tasked distribution system"
          progress={progress}
          href={externalLinks.flowsilk}
          dataText="View On Github"
        />
      </div>
    </section>
  )
}