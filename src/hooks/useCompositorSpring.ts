import { MotionValue } from "motion/react"
import { type RefObject } from "react"
import { useIsoMorphicEffect } from "./uselsoMorphicEffict"

export interface SpringOffset {
  x?: number
  y?: number
  rot?: number
  s?: number
}

export function useCompositorSpring(
  ref: RefObject<HTMLElement | null>,
  progress: MotionValue<number>,
  offset?: SpringOffset
) {
  useIsoMorphicEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = "1"

    const tx = offset?.x ?? 0
    const ty = offset?.y ?? 0
    const rot = offset?.rot ?? 0
    const sc = offset?.s ?? 1

    const anim = el.animate(
      [
        {
          transform: `translate3d(${tx}px, ${ty}px, 0) scale(${sc}) rotate(${rot}deg)`,
        },
        {
          transform: `translate3d(0px, 0px, 0px) scale(1) rotate(0deg)`,
        },
      ],
      { duration: 1000, fill: "both", easing: "linear" }
    )
    anim.pause()
    const total = 1000

    const update = (p: number) => {
      const clamped = Math.max(0, Math.min(1, p))
      anim.currentTime = clamped * total
    }

    update(progress.get() ?? 0)
    const unsubscribe = progress.on("change", update)

    return () => {
      unsubscribe()
      anim.cancel()
    }
  }, [progress, offset?.x, offset?.y, offset?.rot, offset?.s])
}