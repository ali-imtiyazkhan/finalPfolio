import { MotionProps } from "motion/react"
import { ReactNode, ElementType } from "react"
import { MotionDiv, MotionH1, MotionH2, MotionP, MotionSpan } from "@/app/utils/lazy-ui"

interface AnimatedElementProps<T extends ElementType> extends MotionProps {
  element: T
  delay?: number
  duration?: number
  className?: string
  children?: ReactNode
  fadeDirection?: "left" | "right" | "bottom" | "top" | "none"
  offsetPx?: number

  style?: React.CSSProperties
  margin?: string
}

const directionOffset = (dir: "left" | "right" | "top" | "bottom" | "none", offset: number) =>
  dir === "left" ? { x: -offset } : dir === "right" ? { x: offset } : dir === "top" ? { y: -offset } : dir === "bottom" ? { y: offset } : {}

export const AnimatedElement = <T extends ElementType>({
  element,
  delay = 0,
  duration = 0.5,
  fadeDirection = "none",
  offsetPx = 500,
  margin = "0px 0px 100px 0px",
  ...rest
}: AnimatedElementProps<T>) => {
  const MotionTag = {
    h1: MotionH1,
    h2: MotionH2,
    p: MotionP,
    div: MotionDiv,
    span: MotionSpan,
  }[element as keyof typeof MotionTag] as ElementType

  const variants = {
    hidden: { opacity: 0, ...directionOffset(fadeDirection, offsetPx) },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration, delay, ease: [0.2, 0.65, 0.3, 0.9] } },
  }

  return <MotionTag initial="hidden" whileInView="visible" viewport={{ once: true, margin: margin }} variants={variants} {...rest} />
}