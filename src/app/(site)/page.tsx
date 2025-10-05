import { HeroV2 } from "../components/HeroV2"
import { ProjectsSection } from "../components/ProjectSection"
import { AboutSectionV2 } from "../components/AboutSectionV2"
import { ServicesSectionV2 } from "../components/ServicesSectionV2"
import { RecruiterContact } from "../components/RecruiterContact"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Imtiyaz A. Khan | Full-Stack Web Developer – React, Next.js & Node.js",
  description:
    "Portfolio of Imtiyaz A. Khan, a full-stack web developer specializing in React, Next.js, Node.js, Express, MongoDB, PostgreSQL, and TypeScript. Explore modern web applications, backend integrations, services, and contact options.",
  keywords: [
    "Full-Stack Web Developer",
    "Backend Developer",
    "Node.js Developer",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "REST API Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
  ],
  authors: [{ name: "Imtiyaz A. Khan" }],
  creator: "Imtiyaz A. Khan",
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