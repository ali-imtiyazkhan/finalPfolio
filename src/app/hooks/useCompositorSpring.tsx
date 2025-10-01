import { MotionValue } from "motion/react"
import { type RefObject } from "react"
// import { useIsoMorphicEffect } from ".uselsoMorphicEffict"
import { useIsoMorphicEffect } from "./uselsoMorphicEffict"

export function useCompositorSpring(ref: RefObject<HTMLElement | null>, progress: MotionValue<number>) {
  useIsoMorphicEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = "1"
 
    const anim = el.animate(
      [
        {
          transform: `translate3d(var(--tx, 0), var(--ty, 0), 0) scale(var(--sc, 1)) rotate(var(--rot, 0))`,
        },
        { transform: "translate3d(0, 0, 0) scale(1) rotate(0)" },
      ],
      { duration: 1000, fill: "both", easing: "ease-out" }
    )
    anim.pause() // we'll scrub it manually
    const total = anim.effect!.getComputedTiming().endTime // 1000 ms

    /* Spring drives only .currentTime ------------------------ */
    const unsubscribe = progress.on("change", (p) => (anim.currentTime = p * Number(total)))
    return () => unsubscribe()
  }, [progress])
}