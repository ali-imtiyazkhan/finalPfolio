import Link from "next/link"
import { TextSlider } from "./TextSlider"
import { Socials } from "../Socials"
import { SITE_NAP, SITE_SLUGS } from "@/config/siteConfig"
import { H2 } from "@/app/ui/Elements"

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
    <footer className="relative overflow-hidden bg-black">
      <div className="xs:pb-32 mx-auto flex w-full max-w-6xl flex-col gap-12 px-5.5 pt-12 pb-24 text-white sm:pb-40 md:gap-16 md:px-11 md:pt-16 lg:pb-54">
        <div className="flex flex-col gap-8 md:gap-12">
          <H2 className="text-5xl leading-12 text-white md:text-6xl md:leading-14">
            Lets&nbsp;
            <TextSlider words={words} height={50} mobileHeight={41} />
            <br />
            <span className="text-gray-500">incredible work together.</span>
          </H2>
          <ul className="flex flex-col justify-between gap-5.5 border-b border-gray-500 pb-6 text-sm md:flex-row md:items-center md:gap-8">
            <li className="flex flex-col gap-1 md:gap-2">
              <span className="text-gray-500">Email</span>
              <Link href="itmtiyaj.codes@gmail.com" className="w-fit text-sm transition-colors duration-200 hover:text-gray-300">
                imtiyaj.codes@gmail.com
              </Link>
            </li>
            <li className="flex flex-col gap-2">
              <span className="text-gray-500">Socials</span>
              <Socials socialLinks={socialLinks} />
            </li>
          </ul>

          <div className="footer-links flex gap-4">
            <Link href={SITE_SLUGS.home} className="text-sm transition-colors duration-200 hover:text-gray-300">
              Home
            </Link>
            <Link href={SITE_SLUGS.projects} className="text-sm transition-colors duration-200 hover:text-gray-300">
              Projects
            </Link>
            <Link href={SITE_SLUGS.about} className="text-sm transition-colors duration-200 hover:text-gray-300">
              About
            </Link>
            <Link href={SITE_SLUGS.contact} className="text-sm transition-colors duration-200 hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between gap-2 text-xs text-nowrap md:flex-row">
          <div className="flex items-center gap-5.5 max-sm:flex-wrap">
            <h3>
              <span className="text-[#b8b8b8]">Based in </span> Rajsthan, India
            </h3>
            <div className="flex gap-4">
            </div>
          </div>
          <span className="text-[#b8b8b8]">© 2025 Imtiyaz Khan</span>
        </div>
        <h2 className="large-brand-text absolute -bottom-16 left-0 flex w-full items-center justify-center font-medium whitespace-nowrap text-white md:text-[180px] lg:text-[240px]">
          Imtiyaz
        </h2>
      </div>
    </footer>
  )
}