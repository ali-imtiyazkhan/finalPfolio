import { HeroV2 } from "../components/HeroV2"
import { ProjectsSection } from "../components/ProjectSection"
import { AboutSectionV2 } from "../components/AboutSectionV2"
import { ServicesSectionV2 } from "../components/ServicesSectionV2"
import { RecruiterContact } from "../components/RecruiterContact"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Web Developer Portfolio | Imtiyaz A. KHan | React & Next.js",
  description:
    "Explore the web developer portfolio of Imtiyaz A. Khan, a full-stack engineer building fast, modern web applications. See what a professional coding portfolio looks like, featuring projects in React, Next.js, and the custom-built React-Zero-UI library.",

  keywords: [
    "Web Developer Portfolio",
    "Imtiyaz A.KHan",
    "React Zero-UI",
    "Next.js",
    "React",
    "TypeScript",
    "Full-Stack Engineer",

    "React Developer Portfolio",
  ],
  authors: [{ name: "Imtiyaz Ali Khan" }],
  creator: "Imtiyaz Ali Khan",
  alternates: {
    canonical: SITE_SLUGS.home,
  },
}

const PortfolioPage: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <HeroV2 />
      <div className="border-b border-gray-200" />
      <ProjectsSection />
      <AboutSectionV2 />
      <ServicesSectionV2 />
      <RecruiterContact />
    
    </main>
  )
}
export default PortfolioPage