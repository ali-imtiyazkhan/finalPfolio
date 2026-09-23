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
      let foundAny = false
      for (const id of cardIds) {
        const grid = document.querySelector(`[data-grid-id="${id}"]`)
        const hero = document.querySelector("[data-stack-target-id]")
        if (!grid || !hero) continue
        const g = grid.getBoundingClientRect()
        const h = hero.getBoundingClientRect()
        next[id] = { x: h.left - g.left, y: h.top - g.top }
        foundAny = true
      }
      if (foundAny) {
        offsetsRef.current = { ...offsetsRef.current, ...next }
        force()
      }
    }

    const debouncedCalc = debounce(calc, 60)
    window.addEventListener("resize", debouncedCalc)
    const ro = new ResizeObserver(debouncedCalc)
    ro.observe(document.documentElement)

    // Run immediately and after layout settles
    calc()
    const timer = setTimeout(calc, 150)

    return () => {
      window.removeEventListener("resize", debouncedCalc)
      ro.disconnect()
      clearTimeout(timer)
    }
  }, [cardIds])

  return offsetsRef.current
}