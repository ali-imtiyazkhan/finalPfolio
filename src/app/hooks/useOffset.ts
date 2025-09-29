import { useReducer, useRef } from "react"
import { HeroOffset } from "../components/ProjectCard/AnimatedCard"
import { debounce } from "../utils/debounce"
import { useIsoMorphicEffect } from "./uselsoMorphicEffict"

const initialOffsets: Record<string, Partial<HeroOffset>> = {
  automedics: {
    x: 459.296875,
    y: -980.328125,
  },
  "react-zero-ui": {
    x: 459.296875,
    y: -748,
  },
  "iron-and-oak": {
    x: 118.796875,
    y: -748,
  },
  bespoke: {
    x: 118.796875,
    y: -980.328125,
  },
}
export function useOffset(cardIds: string[]) {
  const offsetsRef = useRef(initialOffsets)
  const [, force] = useReducer((x) => x + 1, 0) // cheap re-render trigger

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