// hooks/useMediaQuery.ts
"use client"
import { useSyncExternalStore } from "react"
import { getMediaQueryStore } from "../utils/getMediaQueryStore"

// Generic hook: pass any valid media query string
export function useMediaQuery(query: string) {
  const store = getMediaQueryStore(query)
  return useSyncExternalStore(
    (cb) => {
      store.subs.add(cb)
      return () => store.subs.delete(cb)
    },
    () => store.isMatch,
    () => false // SSR snapshot
  )
}

// Convenience shims mirroring your API
export function useIsMobile(bp = 768, fn?: () => void) {
  const isMobile = useMediaQuery(`(max-width: ${bp - 0.1}px)`)
  if (isMobile && fn) fn()
  return isMobile
}
export function useTouch() {
  return useMediaQuery(`(any-hover: none) and (any-pointer: coarse)`)
}