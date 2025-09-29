"use client"
import type { SpringOptions } from "motion/react"
import { useRef, useCallback } from "react"
import { useMotionValue, useSpring } from "motion/react"
import { MotionDiv } from "../utils/lazy-ui"

export interface TiltedWrapperProps {
  children: React.ReactNode
  height?: React.CSSProperties["height"]
  width?: React.CSSProperties["width"]
  scaleOnHover?: number
  rotateAmplitude?: number
  className?: string
  borderRadius?: string
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
}

export function TiltedWrapper({
  children,
  height = "100%",
  width = "100%",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  className = "",
  borderRadius = "15px",
}: TiltedWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const lastUpdateTimeRef = useRef(0)

  // Use motion values directly - no state!
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(0, springValues)
  const rotateY = useSpring(0, springValues)
  const scale = useSpring(1, springValues)

  // Update motion values directly without causing re-renders
  const handleMouse = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return

      const now = performance.now()
      // Throttle to ~60fps
      if (now - lastUpdateTimeRef.current < 16) return
      lastUpdateTimeRef.current = now

      const rect = ref.current.getBoundingClientRect()
      const offsetX = e.clientX - rect.left - rect.width / 2
      const offsetY = e.clientY - rect.top - rect.height / 2

      const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude
      const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude

      // Update motion values directly - no state updates!
      x.set(e.clientX - rect.left)
      y.set(e.clientY - rect.top)
      rotateX.set(rotationX)
      rotateY.set(rotationY)
    },
    [rotateAmplitude, x, y, rotateX, rotateY]
  )

  const handleMouseEnter = useCallback(() => {
    scale.set(scaleOnHover)
  }, [scale, scaleOnHover])

  const handleMouseLeave = useCallback(() => {
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
    x.set(0)
    y.set(0)
  }, [scale, rotateX, rotateY, x, y])

  return (
    <div
      ref={ref}
      className={`relative flex h-full w-full flex-col items-center justify-center [perspective:800px]`}
      style={{ height, width }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MotionDiv
        className={`xxs:w-full relative h-full will-change-transform [transform-style:preserve-3d] ${className}`}
        style={{
          rotateX,
          rotateY,
          scale,
          borderRadius,
          // Use GPU acceleration
          transform: "translateZ(0)",
        }}
      >
        <div className="absolute top-0 left-0 h-full w-full overflow-hidden" style={{ borderRadius }}>
          {children}
        </div>
      </MotionDiv>
    </div>
  )
}
