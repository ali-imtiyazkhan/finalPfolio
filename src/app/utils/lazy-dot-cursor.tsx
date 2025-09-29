"use client"
import dynamic from "next/dynamic"
import { useMediaQuery } from "../hooks/useMediaQuery"

export const DotCursor = /*#__PURE__*/ dynamic(() => import("../components/DotCursor").then((m) => m.DotCursor), {
  ssr: false,
})

export function DesktopCursor() {
  const hasFinePointer = useMediaQuery("(pointer:fine)")

  if (!hasFinePointer) return null
  return <DotCursor />
}