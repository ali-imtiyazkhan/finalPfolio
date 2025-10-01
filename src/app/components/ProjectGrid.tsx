"use client"
import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard"
import iaoPreview from "../../../public/images/iao-preview-v2.webp"
import bespokePreview from "../../../public/images/bespoke-preview-v2.webp"
import automedicsPreview from "../../../public/images/automedics-preview-v2.webp"
import reactZeroUIPreview from "../../../public/images/react-zero-ui-preview.jpg"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useMediaQuery"
import { useRef, useEffect } from "react"
import { useScroll, useSpring } from "motion/react"
import { useUI } from "@react-zero-ui/core"
import { externalLinks } from "@/config/siteConfig"

const ids = ["automedics", "react-zero-ui", "iron-and-oak", "bespoke"]

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const isSmallScreen = useIsMobile(576)
  const responsiveScale = isMobile ? 0.34 : 0.8
  const [, setReveal] = useUI<"true" | "false">("reveal", "false")

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["start start", "10% start"] : ["start start", "15% start"],
  })
  const stiffness = isMobile ? 120 : 220
  const damping = isMobile ? 50 : 90

  const progress = useSpring(scrollYProgress, { stiffness, damping })

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    "react-zero-ui": { rot: 9, s: responsiveScale, dx: isMobile ? -220 : -30, dy: isMobile ? -120 : -40 },
    "iron-and-oak": { rot: -5, s: responsiveScale, dx: isMobile ? -230 : -60, dy: isMobile ? -130 : -40 },
    automedics: { rot: 5, s: responsiveScale, dx: isMobile ? -225 : -45, dy: isMobile ? -130 : -25 },
    bespoke: { rot: 12, s: responsiveScale, dx: isMobile ? -230 : -50, dy: isMobile ? -110 : -10 },
  }

  const offsets = Object.fromEntries(
    ids.map((id) => {
      const base = rawOffsets[id]
      const t = OFFSET_TUNING[id]
      return [
        id,
        {
          x: base.x! + t.dx!,
          y: base.y! + t.dy!,
          rot: t.rot!,
          s: t.s ?? 1,
        },
      ]
    })
  )

  const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.5
  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      if (latest >= triggerProgress) {
        setReveal("true") // Reveal ON
      } else {
        setReveal("false") // Reveal OFF
      }
    })

    return unsubscribe
  }, [progress, setReveal, triggerProgress])
  return (
    <section id="projects-grid" className={clsx("relative scroll-mt-36", className)} ref={ref}>
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
        <AnimatedCard
          key={"Movies Booking Website"}
          src={reactZeroUIPreview}
          alt={"Movies Booking Website - Preview"}
          offset={offsets["react-zero-ui"]}
          gridId="react-zero-ui"
          color="#3B06D1"
          type="Movies Booking Website"
          progress={progress}
          href="https://github.com/ali-imtiyazkhan/moviesBooking"
          dataText="View on GitHub"
        />
        <AnimatedCard
          key="E-com WebSite"
          src={bespokePreview}
          alt={"E-com WebSite Preview"}
          offset={offsets["bespoke"]}
          gridId="bespoke"
          color="#024EFC"
          type="E-com WebSite"
          progress={progress}
          href={externalLinks.zeroCore}
          dataText="View Case Study"
        />

        <AnimatedCard
          key="Chat App"
          src={automedicsPreview}
          alt={"Chat App"}
          offset={offsets["automedics"]}
          gridId="automedics"
          color="#DA961A"
          type="Chat App"
          progress={progress}
          href="https://github.com/ali-imtiyazkhan/chat-app"
          dataText="View Case Study"
        />
        <AnimatedCard
          key={"Blog WebSite"}
          src={iaoPreview}
          alt={"Blog WebSite"}
          offset={offsets["iron-and-oak"]}
          gridId="iron-and-oak"
          color="#13739C"
          type="Blog WebSite"
          progress={progress}
          href="https://blog-website-9qk3.vercel.app"
          dataText="Live Preview"
        />
      </div>
    </section>
  )
}