import { StaticImageData } from "next/image"
import { Card } from "@/app/components/ProjectCard/Card"
import iaoPreview from "../../../../public/images/iao-preview-v2.webp"
import bespokePreview from "../../../../public/images/bespoke-preview-v2.webp"
import automedicsPreview from "../../../../public/images/automedics-preview-v2.webp"
import entitledPreview from "../../../../public/images/entitled-preview-v2.webp"
import IconSpritePreview from "../../../../public/images/zero-icon-sprite-preview.jpg"
import zeroPreview from "../../../../public/images/react-zero-ui-preview.jpg"
import vetsChoiceInsurancePreview from "../../../../public/images/vets-choice-insurance-preview.webp"
import { Link } from "@/app/utils/Link"
import { externalLinks, SITE_SLUGS } from "@/config/siteConfig"

type StaticProject = {
  id: string
  src: StaticImageData
  alt: string
  color: string
  type: string
  text: string
  href: string
  dataText: string
  ariaLabel: string
  isExternal: boolean
}

export const STATIC_PROJECTS: StaticProject[] = [
  {
    id: "react-zero-ui",
    src: zeroPreview,
    alt: "Movies Booking Web - Preview",
    color: "#3B06D1",
    type: "Movies Booking Web",
    text: "View on GitHub",
    href: externalLinks.zeroCore,
    dataText: "View on GitHub",
    ariaLabel: "View React Zero UI on GitHub",
    isExternal: true,
  },
  {
    id: "bespoke",
    src: bespokePreview,
    alt: "E -Com Preview",
    color: "#024EFC",
    type: "E Comm  Website",
    text: "See Case Study",
    href: SITE_SLUGS.projectLinks.bespoke,
    dataText: "See Case Study",
    ariaLabel: "See Bespoke Website Build Case Study",
    isExternal: false,
  },

  {
    id: "automedics",
    src: automedicsPreview,
    alt: "Chat App Preview",
    color: "#000000",
    type: "Chat App Preview",
    text: "See Case Study",
    href: SITE_SLUGS.projectLinks.automedics,
    dataText: "See Case Study",
    ariaLabel: "See Automedics Website Build Case Study",
    isExternal: false,
  },

  {
    id: "iron-oak",
    src: iaoPreview,
    alt: "Blog Preview",
    color: "#13739C",
    type: "Blog Website",
    text: "Live Preview",
    href: SITE_SLUGS.projectLinks.iao,
    dataText: "See Case Study",
    ariaLabel: "See Iron & Oak Website Build Case Study",
    isExternal: false,
  },
  {
    id: "entitled",
    src: entitledPreview,
    alt: "Event Preview",
    color: "#DA961AA5",
    type: "school Management Web App",
    text: "View Website",
    href: externalLinks.entitled,
    dataText: "View Website",
    ariaLabel: "View Entitled Website",
    isExternal: true,
  },
]

export const ProjectsStatic: React.FC = () => {
  return (
    <section className="border-t border-slate-200">
      <div className="inside-container-small">
        <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          {STATIC_PROJECTS.map((project) => {
            const ProjectWrapper = project.isExternal ? "a" : Link
            const wrapperProps = project.isExternal
              ? {
                  href: project.href,
                  target: "_blank",
                  rel: "noopener",
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                }
              : {
                  href: project.href,
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                  prefetch: true,
                }

            return (
              <ProjectWrapper key={project.id} {...wrapperProps}>
                <Card src={project.src} alt={project.alt} color={project.color} type={project.type} reveal={false} text={project.text} />
              </ProjectWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}