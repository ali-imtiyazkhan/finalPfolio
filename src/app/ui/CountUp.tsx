"use client"
import { useMotionValue, useTransform, animate } from "motion/react"
import { MotionSpan } from "../utils/lazy-ui"

interface CountUpProps {
  to: number
  from?: number
  direction?: "up" | "down"
  delay?: number
  duration?: number
  className?: string
  startWhen?: boolean
  separator?: string
  onStart?: () => void
  onEnd?: () => void
  margin?: `${number}${"px" | "%"}`
  once?: boolean
}

export function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
  margin = "0px",
  once = true,
}: CountUpProps) {
  const initialValue = direction === "down" ? to : from
  const targetValue = direction === "down" ? from : to

  const motionValue = useMotionValue(initialValue)

  const damping = 20 + 40 * (1 / duration) // Adjust this formula for finer control
  const stiffness = 200 * (1 / duration) // Adjust this formula for finer control

  const rounded = useTransform(motionValue, (latest) => {
    const options = {
      useGrouping: !!separator,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }
    const formattedNumber = Intl.NumberFormat("en-US", options).format(Number(latest.toFixed(0)))
    return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber
  })
  return (
    <MotionSpan
      className={className}
      initial={{ opacity: 1 }}
      viewport={{ once, margin: `0px 0px ${margin} 0px` }}
      onViewportEnter={() => {
        if (startWhen) {
          onStart?.()
          animate(motionValue, targetValue, {
            delay,
            duration,
            type: "spring",
            stiffness,
            damping,
            onComplete: () => onEnd?.(),
          })
        }
      }}
    >
      {rounded}
    </MotionSpan>
  )
}
