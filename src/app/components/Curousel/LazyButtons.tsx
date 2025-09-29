"use client"
import dynamic from "next/dynamic"

export const LazyCarouselButtons = /*PURE */ dynamic(() => import("./CarouselButtons").then((mod) => mod.CarouselButtons), {
  ssr: false,
})