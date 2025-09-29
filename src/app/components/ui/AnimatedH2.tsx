import { Children, isValidElement } from "react"
import clsx from "clsx"
import type { Variants } from "motion"
import { MotionH2, MotionSpan } from "@/app/utils/lazy-ui"

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
}

const child: Variants = {
  hidden: { y: 20, opacity: 0, filter: "blur(4px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { ease: [0.2, 0.65, 0.3, 0.9], duration: 0.6 },
  },
}

/** Recursively wrap every immediate text/span/br in an m.span */
function wrap(node: React.ReactNode) {
  if (typeof node === "string" || typeof node === "number") {
    return <MotionSpan variants={child}>{node}</MotionSpan>
  }

  if (isValidElement(node)) {
    const { children, ...rest } = node.props as { children: React.ReactNode; [key: string]: unknown }
    // Don't wrap <br/> - leave as is
    if (node.type === "br") return node
    return (
      <MotionSpan variants={child} {...rest}>
        {Children.map(children, wrap)}
      </MotionSpan>
    )
  }

  return node
}

export function AnimatedH2({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <MotionH2
      className={clsx("text-4xl tracking-tighter text-slate-900 md:text-5xl md:leading-13 lg:text-6xl lg:leading-15", className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      {Children.map(children, wrap)}
    </MotionH2>
  )
}