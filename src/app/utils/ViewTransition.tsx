// app/_components/ViewTransitions.tsx
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

type VTDoc = Document & {
  // Safari/Chromium: present when supported
  startViewTransition?: (cb: () => void) => { finished: Promise<void> }
}
function isHashOnlyChange(url: URL) {
  return url.origin === location.origin && url.pathname === location.pathname && url.search === location.search && url.hash !== "" && url.hash !== location.hash
}

function isModifiedClick(e: MouseEvent, el: HTMLAnchorElement) {
  const target = el.getAttribute("target")
  return (target && target !== "_self") || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.which === 2
}

export function ViewTransitions() {
  const router = useRouter()

  // CHANGES: replace your onClick with this version
  const onClick = (e: MouseEvent) => {
    // Event delegation: only anchors with data-vt
    const el = (e.target as Element)?.closest?.("a[data-vt]") as HTMLAnchorElement | null
    if (!el) return

    // Respect default behavior for modified clicks
    if (isModifiedClick(e, el)) return

    // Ignore explicit download/external intents
    if (el.hasAttribute("download")) return
    const rel = (el.getAttribute("rel") || "").toLowerCase()
    if (rel.includes("external") || rel.includes("opener")) return

    const href = el.getAttribute("href")
    if (!href) return

    // Resolve URL safely (handles relative hrefs)
    const url = new URL(href, location.origin)

    // Bail on non-http(s) schemes (mailto:, tel:, etc.)
    if (url.protocol !== "http:" && url.protocol !== "https:") return

    // Cross-origin? Let the browser handle it.
    if (url.origin !== location.origin) return

    // Hash-only in-page jump? Let the browser scroll natively.
    if (isHashOnlyChange(url)) return

    // We will handle it.
    e.preventDefault()

    const hrefStr = url.pathname + url.search + url.hash

    // Optional per-link scroll control: <a data-scroll="false">
    const scrollAttr = el.getAttribute("data-scroll")
    const scroll = scrollAttr == null ? true : scrollAttr !== "false"

    // Optional animation variant: <a data-vt-anim="fade|up|...">
    const variant = el.getAttribute("data-vt-anim")
    const root = document.documentElement
    if (variant) root.setAttribute("data-vt-anim", variant)

    const go = () => {
      if (el.hasAttribute("data-replace")) router.replace(hrefStr, { scroll })
      else router.push(hrefStr, { scroll })
    }

    const start = (document as VTDoc).startViewTransition?.bind(document)
    if (start) {
      const vt = start(go)
      vt.finished.finally(() => {
        if (variant) root.removeAttribute("data-vt-anim")
      })
    } else {
      go()
      if (variant) root.removeAttribute("data-vt-anim")
    }
  }

  useEffect(() => {
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  return null
}