"use client";

import clsx from "clsx";
import { Text } from "./ui/Elements";
import { AnimatedH2 } from "./ui/AnimatedH2";
import { MotionUl, MotionLi } from "@/lib/lazy-ui";
import type { Variants } from "motion";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiExpress,
  SiOpenai,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiJavascript,
  SiDocker,
  SiFramer,
  SiLangchain,
  SiRust,
  SiGo,
  SiRedis,
  SiApachekafka,
  SiPostman,
} from "react-icons/si";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaGithub,
  FaServer,
  FaCloud,
  FaLayerGroup,
  FaTrophy,
  FaBrain,
  FaTerminal,
} from "react-icons/fa";
import { 
  MdSpeed, 
  MdOutlinePalette, 
  MdRateReview 
} from "react-icons/md";
import { TbRegex } from "react-icons/tb";

import { m } from "framer-motion";

const techCategories = [
  {
    title: "AI & Generative AI",
    items: [
      { name: "OpenAI", Icon: SiOpenai },
      { name: "LangChain", Icon: SiLangchain },
      { name: "GenAI", Icon: FaBrain },
      { name: "Prompt Eng.", Icon: FaTerminal },
    ],
  },
  {
    title: "Core Technologies",
    items: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: SiReact },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Python", Icon: SiPython },
      { name: "Go", Icon: SiGo },
      { name: "Rust", Icon: SiRust },
      { name: "C++", Icon: FaCode },
      { name: "Java", Icon: FaCode },
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      { name: "Express", Icon: SiExpress },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Redis", Icon: SiRedis },
      { name: "Kafka", Icon: SiApachekafka },
      { name: "Prisma ORM", Icon: FaDatabase },
      { name: "Hono", Icon: FaServer },
      { name: "Cloudflare", Icon: FaCloud },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Docker", Icon: SiDocker },
      { name: "Framer Motion", Icon: SiFramer },
      { name: "CI/CD", Icon: FaTools },
      { name: "Figma", Icon: SiFigma },
      { name: "Postman", Icon: SiPostman },
      { name: "GitHub", Icon: FaGithub },
      { name: "Open Source", Icon: FaGithub },
      { name: "Regex", Icon: TbRegex },
    ],
  },
];

const services = [
  { name: "Full Stack Development", Icon: FaLayerGroup },
  { name: "React Development", Icon: SiReact },
  { name: "Performance Optimization", Icon: MdSpeed },
  { name: "UI/UX Design", Icon: MdOutlinePalette },
  { name: "Code Reviews", Icon: MdRateReview },
  { name: "Competitive Programming", Icon: FaTrophy },
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

export const ServicesSectionV2: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <section
      id="technologies"
      className={clsx(
        "inside-container relative z-2 items-start justify-center md:flex-row md:items-center",
        className
      )}
    >
      {/* Tech Stack Section */}
      <div className="flex h-full flex-col gap-12 max-md:w-full md:[flex:2_0_0px]">
        <AnimatedH2>
          Engineering <br />
          <span className="text-slate-700">Toolkit</span>
        </AnimatedH2>

        <div className="w-full space-y-10">
          {techCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <Text size="sm" className="font-semibold text-slate-400 uppercase tracking-widest block">
                {category.title}
              </Text>
              
              <MotionUl
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                {category.items.map(({ name, Icon }) => (
                  <MotionLi key={name} variants={element}>
                    <div className="group relative flex flex-col items-center">
                      <m.div
                        whileHover={{
                          y: [0, -12, -12, -12],
                          scale: [1, 1.15, 1.15, 1.15],
                          rotate: [0, 0, 360, 360],
                          transition: {
                            duration: 0.9,
                            times: [0, 0.2, 0.8, 1],
                            ease: ["easeOut", "linear", "easeInOut"],
                          },
                        }}
                        className="button-shadow flex h-13 w-13 items-center justify-center rounded-xl border border-gray-200 bg-white cursor-pointer"
                      >
                        <Icon size={30} className="object-contain" />
                      </m.div>

                      <span className="mt-2 text-[10px] text-center text-slate-600 font-medium truncate max-w-[80px]">{name}</span>
                    </div>
                  </MotionLi>
                ))}
              </MotionUl>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <MotionUl
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={container2}
        className="grid [flex:1_0_0px] grid-cols-2 gap-8 md:grid-cols-1 mt-16 md:mt-0"
      >
        {services.map(({ name, Icon }) => (
          <MotionLi
            key={name}
            variants={element2}
            className="flex items-center gap-3"
          >
            <span className="button-shadow flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-black text-white">
              <Icon size={20} />
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
