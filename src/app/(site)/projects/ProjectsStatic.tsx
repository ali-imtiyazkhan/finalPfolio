import { StaticImageData } from "next/image"
import { Card } from "@/components/ProjectCard/Card"
import iaoPreview from "@/../public/images/iao-preview-v2.webp"
import bespokePreview from "@/../public/images/bespoke-preview-v2.webp"
import automedicsPreview from "@/../public/images/automedics-preview-v2.webp"
import entitledPreview from "@/../public/images/entitled-preview-v2.webp"
import zeroPreview from "@/../public/images/react-zero-ui-preview.jpg"
import codesyncPreview from "@/../public/images/codesync-preview.webp"
import leetcodematePreview from "@/../public/images/leetcodemate-preview.webp"
import contestplatformPreview from "@/../public/images/contestplatform-preview.webp"
import filekeeperPreview from "@/../public/images/filekeeper-preview.webp"
import canavaxPreview from "@/../public/images/canavax-preview.webp"
import { Link } from "@/lib/Link"
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
    text: "Live preview",
    href: externalLinks.zeroCore,
    dataText: "Live PreView",
    ariaLabel: "View React Zero UI on GitHub",
    isExternal: true,
  },
  {
    id: "bespoke",
    src: bespokePreview,
    alt: "E -Com Preview",
    color: "#024EFC",
    type: "E-Comm  Website",
    text: "See On GitHub",
    href: SITE_SLUGS.projectLinks.bespoke,
    dataText: "See On GitHub",
    ariaLabel: "See Bespoke Website Build Case Study",
    isExternal: false,
  },

  {
    id: "automedics",
    src: automedicsPreview,
    alt: "Chat App Preview",
    color: "#000000",
    type: "Chat App Preview",
    text: "See on GitHub",
    href: SITE_SLUGS.projectLinks.automedics,
    dataText: "See On GitHub",
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
    dataText: "Live Preview",
    ariaLabel: "See Iron & Oak Website Build Case Study",
    isExternal: false,
  },
  {
    id: "entitled",
    src: entitledPreview,
    alt: "School Management",
    color: "#DA961AA5",
    type: "school Management Web App",
    text: "View Website",
    href: externalLinks.entitled,
    dataText: "See On GitHub",
    ariaLabel: "View Entitled Website",
    isExternal: true,
  },
  {
    id: "codesync",
    src: codesyncPreview,
    alt: "CodeSync - Preview",
    color: "#2ecc71",
    type: "Collaborative Code Editor",
    text: "Live Preview",
    href: SITE_SLUGS.projectLinks.codesync,
    dataText: "Live Preview",
    ariaLabel: "View CodeSync Live",
    isExternal: true,
  },
  {
    id: "leetcodemate",
    src: leetcodematePreview,
    alt: "LeetCodeMate - Preview",
    color: "#f1c40f",
    type: "LeetCode Assistant",
    text: "See on GitHub",
    href: SITE_SLUGS.projectLinks.leetcodemate,
    dataText: "See On GitHub",
    ariaLabel: "See LeetCodeMate on GitHub",
    isExternal: false,
  },
  {
    id: "contestplatform",
    src: contestplatformPreview,
    alt: "ContestPlatform - Preview",
    color: "#3498db",
    type: "Coding Contest Platform",
    text: "Live Preview",
    href: SITE_SLUGS.projectLinks.contestplatform,
    dataText: "Live Preview",
    ariaLabel: "View ContestPlatform Live",
    isExternal: true,
  },
  {
    id: "filekeeper",
    src: filekeeperPreview,
    alt: "FileKeeper - Preview",
    color: "#9b59b6",
    type: "File Management System",
    text: "Live Preview",
    href: SITE_SLUGS.projectLinks.filekeeper,
    dataText: "Live Preview",
    ariaLabel: "View FileKeeper Live",
    isExternal: true,
  },
  {
    id: "canavax",
    src: canavaxPreview,
    alt: "Canavax - Preview",
    color: "#e67e22",
    type: "Canvas Drawing Tool",
    text: "Live Preview",
    href: SITE_SLUGS.projectLinks.canavax,
    dataText: "Live Preview",
    ariaLabel: "View Canavax Live",
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