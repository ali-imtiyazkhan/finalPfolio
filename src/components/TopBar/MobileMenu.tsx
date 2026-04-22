"use client"
import clsx from "clsx"
import { Link } from "@/lib/Link"
import { useUI } from "@react-zero-ui/core"
import { SITE_SLUGS } from "@/config/siteConfig"

export const MobileMenu: React.FC<{ navItems: { name: string; href: string }[] }> = ({ navItems }) => {
  const [, setMobileMenu] = useUI<"open" | "closed">("mobile-menu", "closed")

  return (
    <ul className={clsx("mobile-menu-container flex flex-col gap-3 rounded-b-lg border-gray-200 px-4 transition-all duration-300 ease-in-out md:hidden")}>
      {navItems.map((item, index) => (
        <li
          key={item.name}
          className="mobile-menu-item transform text-lg transition-all duration-300 ease-in-out"
          style={{ "--index": index } as React.CSSProperties}
        >
          <Link href={item.href} onClick={() => setMobileMenu("closed")} className="block pt-4 font-medium">
            {item.name}
          </Link>
        </li>
      ))}
      <li className={clsx("mobile-menu-item transform pt-3 transition-all duration-300 ease-in-out")}>
        <Link
          href={SITE_SLUGS.contact}
          onClick={() => setMobileMenu("closed")}
          className="bubble-hover block rounded-full border border-gray-200 bg-white px-3 py-2 text-center font-medium shadow-lg duration-300 hover:border-white"
        >
          Contact
        </Link>
      </li>
      <li className={clsx("mobile-menu-item transform pt-3 pb-4 transition-all duration-300 ease-in-out")}>
        <a
          href="/Imtiyaz_Resume_Updated - -new.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileMenu("closed")}
          className="bubble-hover block rounded-full border border-gray-200 bg-slate-900 px-3 py-2 text-center font-medium text-white shadow-lg duration-300 hover:border-white"
        >
          Resume ↓
        </a>
      </li>
    </ul>
  )
}