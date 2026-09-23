import Link from "next/link"
import { TextSlider } from "./TextSlider"
import { Socials } from "../Socials"
import { SITE_NAP, SITE_SLUGS } from "@/config/siteConfig"
import { H2 } from "@/components/ui/Elements"
import { PixelPet } from "./PixelPet"
import { DotMatrix } from "./DotMatrix"

const words: [string, string, string, string] = ["build", "create", "design", "make"]

export const socialLinks = [
  {
    href: SITE_NAP.profiles.linkedIn,
    icon: "linkedin",
  },
  {
    href: SITE_NAP.profiles.github,
    icon: "github",
  },
  {
    href: SITE_NAP.profiles.x,
    icon: "x",
  },
]

export const FooterV2: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5.5 pt-12 pb-16 md:gap-16 md:px-11 md:pt-16">
        <div className="flex flex-col gap-8 md:gap-12">
          <H2 className="text-5xl leading-12 text-white md:text-6xl md:leading-14">
            Lets&nbsp;
            <TextSlider words={words} height={50} mobileHeight={41} />
            <br />
            <span className="text-zinc-500">incredible work together.</span>
          </H2>
          <ul className="flex flex-col justify-between gap-5.5 border-b border-zinc-800 pb-6 text-sm md:flex-row md:items-center md:gap-8">
            <li className="flex flex-col gap-1 md:gap-2">
              <span className="text-zinc-500">Email</span>
              <a href={`mailto:${SITE_NAP.email}`} className="w-fit text-sm transition-colors duration-200 hover:text-zinc-300">
                {SITE_NAP.email}
              </a>
            </li>
            <li className="flex flex-col gap-2">
              <span className="text-zinc-500">Socials</span>
              <Socials socialLinks={socialLinks} />
            </li>
          </ul>

          <div className="footer-links flex flex-wrap gap-6">
            <Link href={SITE_SLUGS.home} className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white">
              Home
            </Link>
            <Link href={SITE_SLUGS.projects} className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white">
              Projects
            </Link>
            <Link href={SITE_SLUGS.about} className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white">
              About
            </Link>
            <Link href={SITE_SLUGS.contact} className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        {/* Minimalist Bottom Bar with Crosshairs and Sleeping Pixel Pet */}
        <div className="relative mt-4 border-t border-zinc-900 pt-8">
          {/* Subtle Crosshairs on Grid Intersections */}
          <span className="absolute -top-2 left-0 font-mono text-xs text-zinc-700 select-none">+</span>
          <span className="absolute -top-2 right-0 font-mono text-xs text-zinc-700 select-none">+</span>

          <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-end">
            <div className="flex flex-col gap-1.5 font-mono text-xs text-zinc-400">
              <p className="font-semibold text-zinc-200">© 2025 Imtiyaz Khan</p>
              <p className="text-zinc-500">Turning ideas into things that work.</p>
              <p className="text-[11px] text-zinc-600">Based in Rajasthan, India</p>
            </div>

            {/* Sleeping Pet */}
            <div className="flex items-center justify-end">
              <PixelPet />
            </div>
          </div>

          {/* Dot Matrix Pattern */}
          <DotMatrix className="mt-6" />
        </div>
      </div>
    </footer>
  )
}