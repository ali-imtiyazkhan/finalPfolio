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
      { name: "OpenAI", Icon: SiOpenai, tooltip: "GPT APIs & Assistants" },
      { name: "LangChain", Icon: SiLangchain, tooltip: "LLM orchestration" },
      { name: "GenAI", Icon: FaBrain, tooltip: "Generative AI apps" },
      { name: "Prompt Eng.", Icon: FaTerminal, tooltip: "Prompt design & tuning" },
    ],
  },
  {
    title: "Core Technologies",
    items: [
      { name: "Next.js", Icon: SiNextdotjs, tooltip: "Used in all projects" },
      { name: "React", Icon: SiReact, tooltip: "Primary UI library" },
      { name: "TypeScript", Icon: SiTypescript, tooltip: "Daily driver" },
      { name: "JavaScript", Icon: SiJavascript, tooltip: "Proficient" },
      { name: "Python", Icon: SiPython, tooltip: "Scripting & AI" },
      { name: "Go", Icon: SiGo, tooltip: "Backend services" },
      { name: "Rust", Icon: SiRust, tooltip: "Systems programming" },
      { name: "C++", Icon: FaCode, tooltip: "DSA & CP" },
      { name: "Java", Icon: FaCode, tooltip: "OOP fundamentals" },
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      { name: "Express", Icon: SiExpress, tooltip: "REST APIs" },
      { name: "PostgreSQL", Icon: SiPostgresql, tooltip: "Primary SQL DB" },
      { name: "MongoDB", Icon: SiMongodb, tooltip: "NoSQL projects" },
      { name: "Redis", Icon: SiRedis, tooltip: "Caching & pub/sub" },
      { name: "Kafka", Icon: SiApachekafka, tooltip: "Event streaming" },
      { name: "Prisma ORM", Icon: FaDatabase, tooltip: "Type-safe DB access" },
      { name: "Hono", Icon: FaServer, tooltip: "Edge-first framework" },
      { name: "Cloudflare", Icon: FaCloud, tooltip: "Workers & Pages" },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Docker", Icon: SiDocker, tooltip: "Containerization" },
      { name: "Framer Motion", Icon: SiFramer, tooltip: "React animations" },
      { name: "CI/CD", Icon: FaTools, tooltip: "GitHub Actions" },
      { name: "Figma", Icon: SiFigma, tooltip: "UI/UX design" },
      { name: "Postman", Icon: SiPostman, tooltip: "API testing" },
      { name: "GitHub", Icon: FaGithub, tooltip: "Version control" },
      { name: "Open Source", Icon: FaGithub, tooltip: "Active contributor" },
      { name: "Regex", Icon: TbRegex, tooltip: "Pattern matching" },
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
                {category.items.map(({ name, Icon, tooltip }) => (
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

                      {/* Tooltip */}
                      {tooltip && (
                        <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2.5 py-1 text-[10px] font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                          {tooltip}
                          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-slate-900" />
                        </span>
                      )}

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
