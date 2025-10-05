export const DOMAIN_URL = "https://www.austinserb.com"

export const SITE_CONFIG = {
  title: "Imtiyaz",
  description: "Imtiyaz Ali Khan portfolio, Specializing in Next.js, React, TypeScript, Node js, and Tailwind CSS.",
  url: DOMAIN_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL ?? "http://localhost:3000",
  siteName: "Imtiyaz Ali Khan",
  keywords: ["Imtiyaz Ali Khan", "Serbyte", "React Zero-UI", "Next.js", "React", "TypeScript", "Full-Stack Engineer"],
  ogImage: "/assets/bg-home-poster-optimized.webp",
  logo: "/serbyte-logo.png",
} as const

export const SITE_NAP = {
  name: "Imtiyaz Ali Khan",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Imtiyaz",
  contactTitle: "Student",
  email: "imtiyaj.codes@gmail.com",
  phone: "+12066596727",
  formattedPhone: "+1 (206) 659-6727",
  addressLink: "https://www.google.com/maps/search/?api=1&query=serbyte+development",
  street: "12601 NE 124th ST",
  city: "Alwer,Jaipur",
  state: "Rajsthan",
  zipCode: "301405",
  openingHours: [{ days: "Mon - Sat", hours: "8am - 6pm" }] as const,
  googleReviewLink: "https://g.page/r/CXHVs1ony_76EAI/review",
  profiles: {
    facebook: "https://www.facebook.com/",
    linkedIn: "https://www.linkedin.com/in/imtiyaz-khan-92b917334",
    yelp: "https://www.yelp.com/biz/serbyte-development-kirkland-3",
    pinterest: "https://www.pinterest.com/serbytedevelopment",
    gbp: "https://g.co/kgs/ay2r1wp",
    github: "https://github.com/ali-imtiyazkhan",
    x: "https://x.com/itzkhantijara",
  } as const,
  logo: "/serbyte-logo.png",
  favicon: "/favicon.ico",
  images: ["https://www.serbyte.net/serbyte-logo.png", "https://www.serbyte.net/assets/bg-home-poster-optimized.webp"],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/#contact",
  about: "/#about-Imtiyaz A. Khan",
  projectLinks: {
    iao: "https://blog-website-9qk3.vercel.app/",
    automedics: "https://github.com/ali-imtiyazkhan",
    bespoke: "https://github.com/ali-imtiyazkhan",
  },
} as const

export const externalLinks = {
  vetsChoice: "https://github.com/ali-imtiyazkhan",
  zeroIconSprite: "https://github.com/ali-imtiyazkhan",
  zeroCore: "https://movies-booking-web.vercel.app/",
  entitled: "https://github.com/ali-imtiyazkhan",
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))