import Link from "next/link"
import { Icon } from "./Icon"
import clsx from "clsx"
import type { Variants } from "motion"
import { MotionDiv } from "../utils/lazy-ui"
const container: Variants = {
  hidden: {
    x: -12,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      duration: 0.2,
    },
  },
}

const linkLogo: Variants = {
  hidden: {
    opacity: 0,
    x: -12,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export const Socials: React.FC<{
  socialLinks: { href: string; icon: string }[]
  className?: string
  iconClassName?: string
}> = ({ socialLinks, className, iconClassName }) => {
  return (
    <MotionDiv
      className={clsx("flex gap-2", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      {socialLinks.map((link) => (
        <MotionDiv variants={linkLogo} key={link.href}>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className={clsx("footer-link", iconClassName)}
            href={link.href}
            aria-label={link.icon}
            title={link.icon}
          >
            <Icon name={link.icon} height={15} width={15} className="text-black" />
          </Link>
        </MotionDiv>
      ))}
    </MotionDiv>
  )
}