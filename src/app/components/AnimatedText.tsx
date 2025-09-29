import clsx from "clsx"
import type { Variants } from "motion"
import { MotionH2, MotionSpan } from "../utils/lazy-ui"

interface Props {
  text: string

  once?: boolean
  className?: string
  margin?: number
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
}

const letter: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
}

export const AnimatedText = ({ text, once = false, className = "", margin = 0, ...rest }: Props) => {
  return (
    <MotionH2
      {...rest}
      className={clsx(className)}
      aria-label={text}
      role="heading"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: `0px 0px -${margin}px 0px` }}
    >
      {text.split("").map((char, i) => (
        <MotionSpan key={i} variants={letter} aria-hidden="true" className="inline-block">
          {char === " " ? "\u00A0" : char}
        </MotionSpan>
      ))}
    </MotionH2>
  )
}