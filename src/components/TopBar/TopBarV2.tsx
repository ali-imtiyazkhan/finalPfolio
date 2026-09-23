import { Icon } from "@/components/Icon"
import { Link } from "@/lib/Link"
import { MobileMenuButton } from "./MobileMenuButton"
import { MobileMenu } from "./MobileMenu"
import { SITE_SLUGS } from "@/config/siteConfig"
import { ThemeToggle } from "@/components/ui/ThemeToggle"

const navItems = [
  { name: "Projects", href: SITE_SLUGS.projects },
  { name: "About", href: SITE_SLUGS.about },
]

export const TopBarV2: React.FC = () => {
  return (
    <nav className="font-switzer fixed top-1 left-1/2 z-10 flex w-fit -translate-x-1/2 justify-center text-base sm:top-2.5 md:top-5 md:text-sm">
      {/* Wrapper that grows/shrinks on mobile */}
      <div className="overflow-hidden rounded-3xl border border-[var(--nav-border)] bg-[var(--nav-bg)] text-[var(--text-primary)] shadow-md backdrop-blur-md transition-colors duration-200">
        <div className="relative flex flex-col">
          {/* Top Row (always visible) */}
          <div className="flex items-center gap-3 px-4 py-2.5 md:gap-6 md:py-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-medium text-nowrap">
              <Icon name="serbyte" height={24} width={24} className="rounded shadow-md" />
              Imtiyaz
            </Link>

            {/* Desktop Navigation */}
            <ul className="md:scrolled-up:opacity-0 md:scrolled-up:max-w-0 md:scrolled-down:opacity-100 md:scrolled-down:max-w-96 hidden items-center gap-3 font-medium transition-all duration-300 ease-in-out md:flex">
              {navItems.map((item) => (
                <li key={item.name} className="flex">
                  <Link href={item.href} className="bubble-hover p-1 px-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                    {item.name}
                  </Link>
                </li>
              ))}
              
              <li className="flex">
                <Link
                  href="/#contact"
                  className="bubble-hover hidden rounded-full border border-[var(--border)] px-3 py-1 font-medium shadow-sm duration-300 hover:translate-y-0.5 hover:border-[var(--border-hover)] hover:shadow-none md:inline-block"
                >
                  Contact
                </Link>
              </li>
              <li className="flex">
                <a
                  href="/Imtiyaz_Resume_Black_Headings.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bubble-hover hidden rounded-full border border-[var(--border)] bg-[var(--text-primary)] px-3 py-1 font-medium text-[var(--bg)] shadow-sm duration-300 hover:translate-y-0.5 hover:opacity-90 hover:shadow-none md:inline-block"
                >
                  Resume ↓
                </a>
              </li>
            </ul>

            {/* Theme Toggle Button */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>

            {/* Mobile Dots Menu (only visible on small screens) */}
            <div className="flex md:hidden">
              <MobileMenuButton />
            </div>

          </div>

          {/* Mobile Menu (renders always but hidden via overflow on wrapper) */}
          <MobileMenu navItems={navItems} />
        </div>
      </div>
    </nav>
  )
}