import type { WithContext, CollectionPage, ProfilePage, BreadcrumbList } from "schema-dts"
import { SITE_CONFIG, SITE_NAP, SITE_SLUGS, externalLinks } from "./siteConfig"

interface ProjectItem {
  name: string
  url: string
  date: string
  description: string
  isExternal: boolean
}

const projectsData: ProjectItem[] = [
  {
    name: "Movies Booking",
    url: externalLinks.zeroCore,
    date: "2025-06-01",
    description: "Movies Booking website",
    isExternal: true,
  },
  {
    name: "Shopping ",
    url: SITE_SLUGS.projectLinks.bespoke,
    date: "2025-03-11",
    description: "Automotive Styling Website",
    isExternal: false,
  },

  {
    name: "Zero Icon Sprite",
    url: externalLinks.zeroIconSprite,
    date: "2024-06-15",
    description: "SVG Build Tool",
    isExternal: true,
  },
 
  {
    name: "Iron & Oak",
    url: SITE_SLUGS.projectLinks.iao,
    date: "2024-06-15",
    description: "Private Security Website",
    isExternal: false,
  },
  {
    name: "Entitled",
    url: externalLinks.entitled,
    date: "2024-02-10",
    description: "Event Management Web App",
    isExternal: true,
  },
]

export const projectsSchema: WithContext<CollectionPage> = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects - Imtiyaz",
  url: `${SITE_CONFIG.url}${SITE_SLUGS.projects}`,
  about: "Projects and case studies by Imityaz (Next.js, React, TypeScript).",
  mainEntity: {
    "@type": "ItemList",
    itemListOrder: "Descending",
    numberOfItems: projectsData.length,
    itemListElement: projectsData.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: project.isExternal ? project.url : `${SITE_CONFIG.url}${project.url}`,
      name: project.name,
      description: project.description,
      dateCreated: project.date,
    })),
  },
}

export const profilePageSchema: WithContext<ProfilePage> = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "About - Imtiyaz",
  url: `${SITE_CONFIG.url}/about`,
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE_CONFIG.url}/#imtiyaz`,
    name: "Imtiyaz A. Khan",
    url: SITE_CONFIG.url,
    jobTitle: "Full-Stack Engineer",
    email: SITE_NAP.email,
    sameAs: Object.values(SITE_NAP.profiles),
  },
}

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_CONFIG.url}/contact`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Hiring",
      email: SITE_NAP.email,
      areaServed: "US",
      availableLanguage: ["en"],
    },
  ],
}

export const breadcrumbSchema: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.url },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_CONFIG.url}${SITE_SLUGS.projects}` },
  ],
}

// Function to generate project-specific breadcrumb schema
export const createProjectBreadcrumbSchema = (projectName: string, projectUrl: string): WithContext<BreadcrumbList> => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.url },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_CONFIG.url}${SITE_SLUGS.projects}` },
    { "@type": "ListItem", position: 3, name: projectName, item: `${SITE_CONFIG.url}${projectUrl}` },
  ],
})

const projectBreadcrumbSchema: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "Person",
      "@id": "https://serbyte.dev/#austin",
      name: "Imtiyaz Khan",
      url: SITE_CONFIG.url,
      jobTitle: "Full-Stack Engineer",
      image: { "@id": "https://serbyte.dev/#headshot" },
      worksFor: { "@id": "https://serbyte.dev/#serbyte" },
      sameAs: Object.values(SITE_NAP.profiles).map((profiles) => profiles),
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Open to work",
          email: SITE_NAP.email,
          areaServed: "india",
          availableLanguage: ["en","Hin"],
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.url}#serbyte`,
      name: "Serbyte Development",
      url: SITE_CONFIG.url,
      logo: { "@id": "https://serbyte.dev/#logo" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.url}#website`,
      name: "Imtiyaz Khan - Developer Portfolio",
      url: SITE_CONFIG.url,
      publisher: { "@id": `${SITE_CONFIG.url}#austin` },
      inLanguage: "en",
    },
    {
      "@type": "ImageObject",
      "@id": `${SITE_CONFIG.url}#headshot`,
      url: `${SITE_CONFIG.url}/profile.webp`,
    },
    {
      "@type": "ImageObject",
      "@id": `${SITE_CONFIG.url}#logo`,
      url: `${SITE_CONFIG.url}/serbyte-logo.png`,
    },
    {
      "@type": "SiteNavigationElement",
      name: ["Home", "Projects", "Contact"],
      url: [SITE_CONFIG.url, `${SITE_CONFIG.url}${SITE_SLUGS.projects}`, `${SITE_CONFIG.url}${SITE_SLUGS.contact}`],
    },
  ],
}