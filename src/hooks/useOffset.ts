import { useReducer, useRef } from "react"
import { HeroOffset } from "../components/ProjectCard/AnimatedCard"
import { debounce } from "@/lib/utils"
import { useIsoMorphicEffect } from "./uselsoMorphicEffict"

const initialOffsets: Record<string, Partial<HeroOffset>> = {
  codesync: {
    x: 459.296875,
    y: -748,
  },
  leetcodemate: {
    x: 118.796875,
    y: -748,
  },
  filekeeper: {
    x: 459.296875,
    y: -980.328125,
  },
  canavax: {
    x: 118.796875,
    y: -980.328125,
  },
}
export function useOffset(cardIds: string[]) {
  const offsetsRef = useRef(initialOffsets)
  const [, force] = useReducer((x) => x + 1, 0)

  useIsoMorphicEffect(() => {
    const calc = () => {
      const next: Record<string, Partial<HeroOffset>> = {}
      for (const id of cardIds) {
        const grid = document.querySelector(`[data-grid-id="${id}"]`)
        const hero = document.querySelector("[data-stack-target-id]")
        if (!grid || !hero) continue
        const g = grid.getBoundingClientRect()
        const h = hero.getBoundingClientRect()
        next[id] = { x: h.left - g.left, y: h.top - g.top }
      }
      offsetsRef.current = next

      force() // tell React styles changed
    }
    const debouncedCalc = debounce(calc, 50)
    const ro = new ResizeObserver(debouncedCalc) // auto-recompute on resize
    ro.observe(document.documentElement)

    calc()

    return () => ro.disconnect()
  }, [cardIds])

  return offsetsRef.current
}