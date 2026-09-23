import Image from "next/image"
import clsx from "clsx"
import profilePhoto from "@/../public/images/profile.webp"

import { Text, Typography } from "@/components/ui/Elements"
import { AnimatedH2 } from "@/components/ui/AnimatedH2"
import { ImageReveal } from "@/components/ImageReveal"
import { MotionDiv } from "@/lib/lazy-ui"
import { GitHubContributionGraph } from "./GitHubCalendar"
import { LeetCodeStats } from "./LeetCodeStats"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about" className={clsx("border-y border-[var(--border)] bg-[var(--bg)] transition-colors duration-200", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-[var(--text-muted)]">About</span>
          <br />
          Imtiyaz A. Khan
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src={profilePhoto} alt="Imtiyaz" className="custom-shadow aspect-[4/4.5]" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text as="h2" size="lg" className="font-medium text-[var(--text-primary)]">
                Imtiyaz A. Khan
              </Text>
              <p className="text-sm text-[var(--text-muted)]">Full-Stack Engineer (Next.js + TypeScript)</p>
            </MotionDiv>
          </div>
          
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-[var(--text-secondary)]">
            <p>
              <strong className="font-semibold text-[var(--text-primary)]">I’m a full-stack engineer</strong> who loves turning ideas into working products.
              I’ve built everything from payment systems and blogs to a full movie ticket booking platform — all designed for real users, not just demos.
            </p>

            <p>
              <strong className="font-semibold text-[var(--text-primary)]">I solve problems fast — both in code and logic.</strong>
              I’ve solved <span className="text-[var(--text-primary)] font-semibold">400+ algorithmic challenges on LeetCode</span>,
              sharpening my data structures and system design skills to write cleaner, more efficient code.
            </p>

            <p>
              <strong className="font-semibold text-[var(--text-primary)]">My workflow is speed with clarity.</strong>
              I ship MVPs in weeks and refine them in days — using server-first React, TypeScript, CI/CD, and lean iteration. No unnecessary complexity.
            </p>
          </Typography>

        </div>
        
        <GitHubContributionGraph username="ali-imtiyazkhan" />
        <LeetCodeStats />
      </div>
    </section>
  )
}