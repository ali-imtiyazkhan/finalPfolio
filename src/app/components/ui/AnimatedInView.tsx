import { MotionH1, MotionH2, MotionP, MotionDiv, MotionSpan, MotionArticle } from "@/app/utils/lazy-ui"
import { MotionProps } from "motion/react"
import { ElementType, ReactNode } from "react"

export interface AnimatedInViewProps<T extends ElementType> extends MotionProps {
  element: T
  delay?: number
  duration?: number
  className?: string
  children?: ReactNode
  fadeDirection?: "left" | "right" | "bottom" | "top" | "none"
  offsetPx?: number
  blur?: number
  once?: boolean
  margin?: string
  style?: React.CSSProperties
  stagger?: number
}

export const AnimatedInView: React.FC<AnimatedInViewProps<ElementType>> = ({
  element,
  delay = 0,
  duration = 0.5,
  className = "",
  children,
  fadeDirection = "none",
  offsetPx = 50,
  blur = 5,
  once = true,
  margin = "-100px",
  style,
  stagger,
  ...rest
}) => {
  const MotionTag = {
    h1: MotionH1,
    h2: MotionH2,
    p: MotionP,
    div: MotionDiv,
    span: MotionSpan,
    article: MotionArticle,
  }[element as keyof typeof MotionTag] as ElementType

  const directions = {
    left: { x: -offsetPx },
    right: { x: offsetPx },
    top: { y: -offsetPx },
    bottom: { y: offsetPx },
    none: { x: 0, y: 0 },
  }

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: margin }}
      variants={{
        hidden: {
          opacity: 0,
          filter: `blur(${blur}px)`,
          ...directions[fadeDirection],
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration,
            delay,
            ease: [0.2, 0.65, 0.3, 0.9],
            staggerChildren: stagger,
          },
        },
      }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}