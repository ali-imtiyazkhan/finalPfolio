import Image from "next/image"
import clsx from "clsx"
import profilePhoto from "../../../public/images/profile.webp"

import signature from "../../../public/images/signature.webp"
import { Text, Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about" className={clsx("border-y border-gray-200 bg-white", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500">About</span>
          <br />
          Imtiyaz  A. Khan
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
              <Text as="h2" size="lg" className="font-medium">
                Imtiyaz A. Khan
              </Text>
              <p className="text-sm text-gray-500">Full-Stack Engineer (Next.js + TypeScript)</p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-500">
            <p>
              <strong className="font-semibold text-slate-900">I build production systems and invent tools</strong> when the platform gets in the way. I created
              <a href="https://github.com/react-zero-ui" target="_blank" rel="noopener">
                {" "}
                React Zero UI
              </a>
              . A ~350B micro-library that updates UI by flipping data-* attributes, eliminating React re-renders for UI state. This site runs on it.
            </p>

            <p>
              <strong className="font-semibold text-slate-900">I ship v1s in weeks and iterate in days</strong>. Leveraging tools server-first React, typed
              APIs, background jobs, CI/CD, and observability. Small PRs, rapid feedback, no ceremony.
            </p>
            <p>
              <strong className="font-semibold text-slate-900">My core philosophy is simplicity</strong>. if complexity balloons, I delete it and design the
              simpler path.
            </p>
          </Typography>
        </div>
      </div>
    </section>
  )
}