"use client"
import { AnimatedCard, HeroOffset } from "@/components/ProjectCard/AnimatedCard"
import codesyncPreview from "@/../public/images/codesync-preview.webp"
import leetcodematePreview from "@/../public/images/leetcodemate-preview.webp"
import filekeeperPreview from "@/../public/images/filekeeper-preview.webp"
import canavaxPreview from "@/../public/images/canavax-preview.webp"
import clsx from "clsx"
import { useOffset } from "@/hooks/useOffset"
import { useIsMobile } from "@/hooks/useMediaQuery"
import { useRef, useEffect } from "react"
import { useScroll, useSpring } from "motion/react"
import { useUI } from "@react-zero-ui/core"
import { SITE_SLUGS } from "@/config/siteConfig"

const ids = ["codesync", "leetcodemate", "filekeeper", "canavax"]

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
    codesync: { rot: 9, s: responsiveScale, dx: isMobile ? -220 : -30, dy: isMobile ? -120 : -40 },
    leetcodemate: { rot: -5, s: responsiveScale, dx: isMobile ? -230 : -60, dy: isMobile ? -130 : -40 },
    filekeeper: { rot: 5, s: responsiveScale, dx: isMobile ? -225 : -45, dy: isMobile ? -130 : -25 },
    canavax: { rot: 12, s: responsiveScale, dx: isMobile ? -230 : -50, dy: isMobile ? -110 : -10 },
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
          key="LeetCodeMate"
          src={leetcodematePreview}
          alt="LeetCodeMate - LeetCode Assistant"
          offset={offsets["leetcodemate"]}
          gridId="leetcodemate"
          color="#f1c40f"
          type="LeetCode Assistant"
          progress={progress}
          href={SITE_SLUGS.projectLinks.leetcodemate}
          dataText="View On GitHub"
        />
        <AnimatedCard
          key="FileKeeper"
          src={filekeeperPreview}
          alt="FileKeeper - File Management System"
          offset={offsets["filekeeper"]}
          gridId="filekeeper"
          color="#9b59b6"
          type="File Management System"
          progress={progress}
          href={SITE_SLUGS.projectLinks.filekeeper}
          dataText="Live Preview"
        />
        <AnimatedCard
          key="Canavax"
          src={canavaxPreview}
          alt="Canavax - Canvas Drawing Tool"
          offset={offsets["canavax"]}
          gridId="canavax"
          color="#e67e22"
          type="Canvas Drawing Tool"
          progress={progress}
          href={SITE_SLUGS.projectLinks.canavax}
          dataText="Live Preview"
        />
      </div>
    </section>
  )
}