"use client"
import clsx from "clsx"
import { useMotionValueEvent } from "motion/react"
import { useScroll } from "motion/react"
import { useIsMobile, useTouch } from "../../hooks/useMediaQuery"
import { DotMenuIcon } from "./DotMenuIcon"
import { useUI } from "@react-zero-ui/core"

export const MobileMenuButton: React.FC = () => {
  const [, setScrolled] = useUI<"up" | "down">("scrolled", "up")
  const [, setMobileMenu] = useUI<"open" | "closed">("mobile-menu", "closed")

  const { scrollY } = useScroll()
  const isDesktop = !useIsMobile(768)
  const isTouch = useTouch()

  useMotionValueEvent(scrollY, "change", (current) => {
    if (!isDesktop) return
    const previous = scrollY.getPrevious() ?? current
    const diff = current - previous
    const direction = diff > 0 ? "up" : "down"
    setScrolled(direction)
  })

  return (
    <button
      type="button"
      tabIndex={isDesktop ? -1 : 0}
      aria-label="Toggle navigation"
      {...(isDesktop && !isTouch && { onPointerEnter: () => setScrolled("down") })}
      onClick={() => (isDesktop ? setScrolled("down") : setMobileMenu((prev) => (prev === "open" ? "closed" : "open")))}
      className={clsx(
        "md:scrolled-down:opacity-0 md:scrolled-down:pointer-events-none group right-3 h-6 w-6 text-sm transition-all duration-300 ease-in-out hover:cursor-pointer md:absolute"
      )}
    >
      <DotMenuIcon />
    </button>
  )
}