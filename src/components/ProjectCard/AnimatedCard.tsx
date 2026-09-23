"use client"
import { MotionValue } from "motion/react"
import { StaticImageData } from "next/image"
import { Card } from "./Card"
import clsx from "clsx"
import { Link } from "@/lib/Link"
import { useRef } from "react"
import { useCompositorSpring } from "@/hooks/useCompositorSpring"
import { SITE_SLUGS } from "@/config/siteConfig"

export type HeroOffset = {
  x: number
  y: number
  rot: number
  s: number
  dx?: number // fine-tune X
  dy?: number // fine-tune Y
}

export interface AnimatedCardProps {
  src: StaticImageData
  alt: string
  offset: HeroOffset
  color: string
  type: string
  gridId: string
  progress: MotionValue<number>
  dataText?: string
  href?: string
}

export function AnimatedCard({ src, alt, offset, color, type, gridId, progress, dataText = "View Website ↗", href }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const safeOffset = offset ?? { x: 0, y: 0, rot: 0, s: 1 }
  useCompositorSpring(ref, progress, safeOffset)
  return (
    <Link
      data-text={dataText}
      aria-label={alt}
      target={href ? "_blank" : undefined}
      href={href ?? `${SITE_SLUGS.projects}/${gridId}`}
      data-grid-id={gridId}
      className="reveal-false:pointer-events-none"
    >
      <div
        ref={ref}
        style={
          {
            "--tx": `${safeOffset.x ?? 0}px`,
            "--ty": `${safeOffset.y ?? 0}px`,
            "--rot": `${safeOffset.rot ?? 0}deg`,
            "--sc": `${safeOffset.s ?? 1}`,
          } as React.CSSProperties
        }
        className={clsx("group relative h-full w-full transform-gpu opacity-1 will-change-[transform,opacity] contain-content backface-hidden")}
      >
        <Card src={src} alt={alt} color={color} type={type} text={dataText} />
      </div>
    </Link>
  )
}