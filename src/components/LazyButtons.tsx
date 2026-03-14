"use client"
import dynamic from "next/dynamic"

export const LazyCarouselButtons = /*PURE */ dynamic(() => import("@/components/CarouselButtons").then((mod) => mod.CarouselButtons), {
  ssr: false,
})