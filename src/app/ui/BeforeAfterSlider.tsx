"use client"
import { useRef, useCallback, memo, useState, useEffect } from "react"
import { MotionDiv } from "@/app/utils/lazy-ui"
import { useMotionValue, useSpring, useTransform, useInView } from "motion/react"

interface BeforeAfterProps {
  before: React.ReactNode
  after: React.ReactNode
  /** Initial slider position (0-100) */
  initialPosition?: number
  /** Spring animation config */
  springConfig?: {
    stiffness?: number
    damping?: number
  }
  /** Accessibility label for the slider */
  ariaLabel?: string
}

export const BeforeAfterSlider: React.FC<BeforeAfterProps> = memo(
  ({ before, after, initialPosition = 50, springConfig = { stiffness: 500, damping: 40 }, ariaLabel = "Before and after comparison slider" }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.9 })
    const isDragging = useRef(false)
    const [isDraggingState, setIsDraggingState] = useState(false)

    // Single spring motion value - everything derives from this
    const sliderPosition = useMotionValue(initialPosition)
    const springPosition = useSpring(sliderPosition, springConfig)

    // All transforms derive from the single spring value
    const clipPath = useTransform(springPosition, [0, 100], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])
    const sliderLeft = useTransform(springPosition, (value) => `${value}%`)
    const afterLabelOpacity = useTransform(sliderPosition, (value) => (value > 50 ? 1 : 0))
    const beforeLabelOpacity = useTransform(sliderPosition, (value) => (value < 50 ? 1 : 0))

    const updatePosition = useCallback(
      (clientX: number) => {
        if (!containerRef.current) return

        try {
          const rect = containerRef.current.getBoundingClientRect()
          const x = clientX - rect.left
          const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
          sliderPosition.set(percentage)
        } catch (error) {
          console.warn("BeforeAfterSlider: Error updating position", error)
        }
      },
      [sliderPosition]
    )

    const handleMouseMove = useCallback(
      (e: React.MouseEvent) => {
        if (isDragging.current) updatePosition(e.clientX)
      },
      [updatePosition]
    )

    const handleTouchMove = useCallback(
      (e: React.TouchEvent) => {
        if (isDragging.current) {
          updatePosition(e.touches[0].clientX)
        }
      },
      [updatePosition]
    )

    const handleTouchStart = useCallback(() => {
      isDragging.current = true
      setIsDraggingState(true)
    }, [])

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
      e.preventDefault()
      isDragging.current = true
      setIsDraggingState(true)
    }, [])

    const handleEnd = useCallback(() => {
      isDragging.current = false
      setIsDraggingState(false)
    }, [])

    // Keyboard support
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        const currentPos = sliderPosition.get()
        let newPos = currentPos

        switch (e.key) {
          case "ArrowLeft":
            e.preventDefault()
            newPos = Math.max(0, currentPos - 5)
            break
          case "ArrowRight":
            e.preventDefault()
            newPos = Math.min(100, currentPos + 5)
            break
          case "Home":
            e.preventDefault()
            newPos = 0
            break
          case "End":
            e.preventDefault()
            newPos = 100
            break
          default:
            return
        }

        sliderPosition.set(newPos)
      },
      [sliderPosition]
    )

    useEffect(() => {
      if (isInView) {
        setTimeout(() => {
          springPosition.set(initialPosition + 10)
        }, 200)

        setTimeout(() => {
          springPosition.set(initialPosition)
        }, 600)
      }
    }, [isInView])

    return (
      <div
        className="relative"
        onMouseLeave={() => {
          handleEnd()
        }}
      >
        <div
          ref={containerRef}
          className="relative max-h-[860px] min-h-[860px] w-full rounded-xl border border-gray-200 bg-gray-300 shadow-xl"
          onMouseMove={handleMouseMove}
          onMouseUp={handleEnd}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleEnd}
          role="img"
          aria-label={ariaLabel}
          style={{ cursor: isDraggingState ? "grabbing" : "", touchAction: "pan-y pinch-zoom" }}
        >
          {before}

          <MotionDiv className="pointer-events-none absolute inset-0" style={{ clipPath }}>
            {after}
          </MotionDiv>

          {/* Slider */}
          <MotionDiv
            className="absolute top-0 bottom-0 z-5 flex items-center justify-center bg-transparent"
            style={{ left: sliderLeft, transform: "translateX(-50%)" }}
          >
            <div className="h-full w-0.5 bg-white shadow-lg">
              <MotionDiv
                whileTap={{ scale: 0.8, color: "#493BFF", cursor: "grabbing" }}
                className="absolute top-1/2 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white shadow-lg"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="button"
                style={{ cursor: "grab" }}
                aria-label="Drag to compare before and after"
              >
                <svg className="h-6 w-6 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </MotionDiv>
            </div>
          </MotionDiv>
        </div>
        {/* Labels */}
        <div className="absolute top-30 left-1/2 z-5 grid -translate-x-1/2">
          <MotionDiv
            className="col-start-1 row-start-1 rounded-full border border-white/30 bg-black/50 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-md"
            style={{ opacity: afterLabelOpacity }}
            transition={{ delay: 0.4, duration: 0.5 }}
            aria-hidden="true"
          >
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-400">
                <div className="h-2 w-2 animate-ping rounded-full bg-green-400" />
              </div>
              <span>After</span>
            </div>
          </MotionDiv>

          <MotionDiv
            className="col-start-1 row-start-1 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-md duration-200"
            style={{ opacity: beforeLabelOpacity }}
            aria-hidden="true"
          >
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-red-400">
                <div className="h-2 w-2 animate-ping rounded-full bg-red-400"></div>
              </div>
              <span>Before</span>
            </div>
          </MotionDiv>
        </div>
      </div>
    )
  }
)

BeforeAfterSlider.displayName = "BeforeAfterSlider"
