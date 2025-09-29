"use client"
// import { BeforeAfterSliderSkeleton } from "/skeletons/BeforeAfterSliderSkeleton"
import { BeforeAfterSliderSkeleton } from "@/app/skeletons/BeforAfterSkeletons"

import dynamic from "next/dynamic"
import Image from "next/image"
import { HeaderText } from "@/app/ui/HeaderText"
import { StaticImageData } from "next/image"

const BeforeAfterSlider = dynamic(() => import("@/app/ui/BeforeAfterSlider").then((mod) => mod.BeforeAfterSlider), {
  ssr: false,
  loading: () => <BeforeAfterSliderSkeleton />,
})

interface BeforeAfterSectionProps {
  heroBefore: StaticImageData
  beforeAltText: string
  heroBeforeMobile: StaticImageData
  beforeMobileAltText: string
  iframe?: string
  heroAfter?: StaticImageData
  afterAltText: string
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  heroBefore,
  heroBeforeMobile,
  iframe,
  heroAfter,
  beforeAltText,
  beforeMobileAltText,
  afterAltText,
}) => {
  return (
    <section className="relative border-y border-gray-200">
      <div className="inside-container-large flex flex-col gap-12 pt-12 lg:pt-16">
        <HeaderText
          title="Before and after."
          titleHighlight="See the difference."
          description="Use the slider to see the difference between the before and after."
        />
        <BeforeAfterSlider
          initialPosition={70}
          before={
            <>
              <Image src={heroBefore} alt={beforeAltText} fill className="hidden rounded-xl object-cover object-top lg:block" priority sizes="80vw" />
              <Image
                src={heroBeforeMobile}
                alt={beforeMobileAltText}
                fill
                className="block rounded-xl object-cover object-top lg:hidden"
                priority
                sizes="80vw"
              />
            </>
          }
          after={
            iframe ? (
              <iframe title="Bespoke Hero After" src={iframe} className="h-full w-full rounded-xl border-0 bg-white" scrolling="no" loading="lazy" />
            ) : (
              heroAfter && <Image src={heroAfter} alt={afterAltText} fill className="rounded-xl object-cover object-top" priority sizes="80vw" />
            )
          }
        />
      </div>
    </section>
  )
}