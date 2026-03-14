"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "@react-zero-ui/icon-sprite"

type Props = {
  total: number
  desktopVis: number
  autoPlayInterval?: number | undefined
  activeState: boolean
}

const btn =
  "bg-white/80 border-2 border-gray-300 animate-click absolute z-1 rounded-full p-1.5 backdrop-blur-sm transition-all duration-300 hover:scale-110 translate-y-20 bubble-hover active before:opacity-20 "

export function CarouselButtons({ total, desktopVis, autoPlayInterval, activeState }: Props) {
  // ---------- refs & cached DOM ----------
  const prevBtnRef = useRef<HTMLButtonElement>(null)
  const rootRef = useRef<HTMLElement | null>(null)
  const trackRef = useRef<HTMLElement | null>(null)
  const itemsRef = useRef<HTMLElement[]>([])
  const currentActiveElRef = useRef<HTMLElement | null>(null)

  // autoplay lifecycle
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const pausedRef = useRef(false)

  // IO for offscreen pause
  const ioRef = useRef<IntersectionObserver | null>(null)
  // RO for layout/viewport changes

  // ---------- helpers (no DOM queries; only use cached refs) ----------
  const readState = () => {
    const t = trackRef.current
    if (!t) {
      return { vis: desktopVis, start: 0, active: 1 }
    }
    const cs = getComputedStyle(t)
    const vis = Number(cs.getPropertyValue("--vis")) || desktopVis
    const start = Number(cs.getPropertyValue("--carousel-idx").trim() || "0") || 0 // 0-based
    const active = Number(cs.getPropertyValue("--active").trim() || t.dataset.active || "1") || 1 // 1-based
    return { vis, start, active }
  }

  const writeStart = (s: number) => {
    const t = trackRef.current
    if (!t) return
    const { vis } = readState()
    const max = Math.max(0, total - vis)
    const clamped = Math.max(0, Math.min(s, max))
    // dedup
    const current = Number(getComputedStyle(t).getPropertyValue("--carousel-idx").trim() || "0") || 0
    if (clamped !== current) t.style.setProperty("--carousel-idx", String(clamped))
  }

  const setActive = (target: number) => {
    const t = trackRef.current
    if (!t) return

    // dedup: skip if already active
    const cur = Number(t.dataset.active || "1")
    if (cur === target) return

    // toggle DOM data-active using cached nodes
    const prevEl = currentActiveElRef.current || t.querySelector<HTMLElement>('[data-active="true"]')
    if (prevEl) prevEl.setAttribute("data-active", "false")

    const idx = target - 1 // data-i is 1-based in your markup
    const nextEl = itemsRef.current[idx] || t.querySelector<HTMLElement>(`[data-i="${target}"]`)
    if (nextEl) {
      nextEl.setAttribute("data-active", "true")
      currentActiveElRef.current = nextEl
    }

    // reflect track-level state
    t.dataset.active = String(target)
    t.style.setProperty("--active", String(target))

    // keep active in view using current vis/start snapshot (reads once)
    const { vis, start } = readState()
    const first = start + 1
    const last = start + vis
    if (target > last) writeStart(target - vis)
    else if (target < first) writeStart(target - 1)
  }

  const next = () => {
    if (activeState) {
      // Active state mode: change active state, slide only if needed
      const current = readState().active
      const nextSlide = current >= total ? 1 : current + 1
      setActive(nextSlide)
    } else {
      // Normal mode: always slide the carousel
      const { start, vis } = readState()
      const maxStart = Math.max(0, total - vis)
      const nextStart = start >= maxStart ? 0 : start + 1
      writeStart(nextStart)
    }
  }
  const prev = () => {
    if (activeState) {
      // Active state mode: change active state, slide only if needed
      const current = readState().active
      const prevSlide = current <= 1 ? total : current - 1
      setActive(prevSlide)
    } else {
      // Normal mode: always slide the carousel
      const { start, vis } = readState()
      const maxStart = Math.max(0, total - vis)
      const prevStart = start <= 0 ? maxStart : start - 1
      writeStart(prevStart)
    }
  }

  // ---------- autoplay ----------
  const startAutoplay = () => {
    if (!autoPlayInterval || pausedRef.current || intervalRef.current) return
    intervalRef.current = setInterval(() => {
      if (!pausedRef.current) next()
    }, autoPlayInterval)
  }
  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }
  const resetAutoplay = () => {
    stopAutoplay()
    startAutoplay()
  }

  // ---------- mount: cache DOM once ----------
  useEffect(() => {
    const root = prevBtnRef.current?.closest<HTMLElement>("[data-carousel-root]") || null
    const track = root?.querySelector<HTMLElement>("[data-carousel-track]") || null
    rootRef.current = root
    trackRef.current = track || null

    if (track) {
      // cache item nodes once
      itemsRef.current = Array.from(track.querySelectorAll<HTMLElement>("[data-i]"))
      // seed current active
      const activeIdx = Number(track.dataset.active || "1") - 1
      currentActiveElRef.current = itemsRef.current[activeIdx] || null
    }

    // initial clamp (if CSS vis/start mismatch)
    const { vis, start, active } = readState()
    const max = Math.max(0, total - vis)
    if (start > max) writeStart(max)
    setActive(active) // also ensures correct data-active node

    return () => {
      itemsRef.current = []
      currentActiveElRef.current = null
      rootRef.current = null
      trackRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total])

  // ---------- autoplay lifecycle + pause conditions ----------
  useEffect(() => {
    // respect reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    pausedRef.current = pausedRef.current || prefersReduced

    // pause when offscreen
    const track = trackRef.current
    if (track && !ioRef.current) {
      ioRef.current = new IntersectionObserver(
        ([e]) => {
          pausedRef.current = !e.isIntersecting
          if (!pausedRef.current) startAutoplay()
        },
        { root: null, threshold: 0 }
      )
      ioRef.current.observe(track)
    }

    // pause on tab hide/show
    const onVis = () => {
      pausedRef.current = document.visibilityState !== "visible"
      if (!pausedRef.current) startAutoplay()
    }
    document.addEventListener("visibilitychange", onVis, { passive: true })

    // // pause on hover/focus within root
    const r = rootRef.current
    const onEnter = () => {
      pausedRef.current = true
      stopAutoplay()
    }
    const onLeave = () => {
      pausedRef.current = false
      startAutoplay()
    }
    r?.addEventListener("pointerenter", onEnter, { passive: true })
    r?.addEventListener("pointerleave", onLeave, { passive: true })
    r?.addEventListener("focusin", onEnter)
    r?.addEventListener("focusout", onLeave)

    // kick it off
    startAutoplay()

    return () => {
      stopAutoplay()
      document.removeEventListener("visibilitychange", onVis)
      r?.removeEventListener("pointerenter", onEnter)
      r?.removeEventListener("pointerleave", onLeave)
      r?.removeEventListener("focusin", onEnter)
      r?.removeEventListener("focusout", onLeave)
      ioRef.current?.disconnect()
      ioRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlayInterval])

  // ---------- react to layout/viewport changes (vis may change) ----------
  useEffect(() => {
    const onResize = () => {
      setActive(1)
    }
    const mediaQuery = window.matchMedia("(min-width: 576px) and (max-width: 1024px)")
    mediaQuery.addEventListener("change", onResize)
    return () => mediaQuery.removeEventListener("change", onResize)
  }, [total])

  return (
    <>
      <button
        ref={prevBtnRef}
        type="button"
        onClick={() => {
          prev()
          resetAutoplay()
        }}
        aria-label="Previous"
        className={btn + " bottom-8 left-4"}
      >
        <ArrowRight strokeWidth={2.5} size={24} className="rotate-180" />
      </button>
      <button
        type="button"
        onClick={() => {
          next()
          resetAutoplay()
        }}
        aria-label="Next"
        className={btn + " right-4 bottom-8"}
      >
        <ArrowRight strokeWidth={2.5} size={24} />
      </button>
    </>
  )
}