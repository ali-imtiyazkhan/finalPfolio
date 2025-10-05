"use client";

import clsx from "clsx";
import { Text } from "../ui/Elements";
import { AnimatedH2 } from "./ui/AnimatedH2";
import { MotionUl, MotionLi } from "../utils/lazy-ui";
import type { Variants } from "motion";


import { SiReact, SiNextdotjs, SiTypescript, SiPython, SiExpress, SiOpenai, SiMongodb, SiPostgresql, SiFigma, SiJavascript, SiDocker } from "react-icons/si";
import { FaCode, FaDatabase, FaTools, FaGithub, FaServer, FaCloud } from "react-icons/fa";

const tech = [
  { name: "React", Icon: SiReact },
  { name: "Next", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Python", Icon: SiPython },
  { name: "Express", Icon: SiExpress },
  { name: "OpenAI", Icon: SiOpenai },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Figma", Icon: SiFigma },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Docker", Icon: SiDocker },
  { name: "Java", Icon: FaCode },   
  { name: "C++", Icon: FaCode },        
  { name: "Prisma ORM", Icon: FaDatabase },
  { name: "CI/CD", Icon: FaTools },          
  { name: "Open Source", Icon: FaGithub },     
  { name: "Hono", Icon: FaServer },            
  { name: "Cloudflare Worker", Icon: FaCloud } 
];


const services = [
  { name: "Full Stack Development", emoji: "🪄" },
  { name: "React Development", emoji: "🎨" },
  { name: "Performance Optimization", emoji: "⚡" },
  { name: "UI/UX Design", emoji: "🌐" },
  { name: "Code Reviews", emoji: "🪐" },
  { name: "Competitive Programming", emoji: "🏆" },
];


const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const container2: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
};

const element: Variants = {
  hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

const element2: Variants = {
  hidden: { opacity: 0, scale: 0.5, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.2, type: "spring", stiffness: 100, damping: 10 },
  },
};

export const ServicesSectionV2: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <section id="technologies" className={clsx("inside-container relative z-2 items-start justify-center md:flex-row md:items-center", className)}>
      
      {/* LEFT COLUMN */}
      <div className="flex h-full flex-col gap-16 max-md:w-full md:[flex:2_0_0px]">
        <AnimatedH2>
          Engineering <br />
          <span className="text-slate-700">Toolkit</span>
        </AnimatedH2>

        {/* Tech Stack */}
        <div className="w-full">
          <Text size="base" className="mb-8 hover:underline">
            My tech stack
          </Text>

          <MotionUl
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-[420px]:justify-items-center md:justify-items-center"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            {tech.map(({ name, Icon }) => (
              <MotionLi key={name} variants={element}>
                <div className="group relative flex flex-col items-center">
                  <div className="button-shadow flex h-13 w-13 items-center justify-center rounded-xl border border-gray-200 bg-white hover:translate-y-0.5">
                    <Icon size={30} className="object-contain" />
                  </div>
                  <span className="mt-2 text-xs text-center">{name}</span>
                </div>
              </MotionLi>
            ))}
          </MotionUl>
        </div>
      </div>

      {/* Services */}
      <MotionUl
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={container2}
        className="grid [flex:1_0_0px] grid-cols-2 gap-8 md:grid-cols-1 mt-16 md:mt-0"
      >
        {services.map(({ name, emoji }) => (
          <MotionLi key={name} variants={element2} className="flex items-center gap-3">
            <span className="button-shadow flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-black text-white text-lg">
              {emoji}
            </span>
            <Text as="span" size="sm">
              {name}
            </Text>
          </MotionLi>
        ))}
      </MotionUl>
    </section>
  );
};
