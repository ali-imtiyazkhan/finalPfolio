import { AnimatedElement } from "@/components/ui/AnimatedElement"

export const WorkHero: React.FC = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 pt-28 pb-8 md:px-11 md:pt-36 md:pb-12">
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
        <AnimatedElement element="span" offsetPx={20} fadeDirection="left" className="inline-block">
          Projects
        </AnimatedElement>
      </h1>
      <AnimatedElement
        element="p"
        delay={0.2}
        className="max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
      >
        A collection of products, experiments, and real-world work I&apos;ve built for myself and for clients across different industries.
      </AnimatedElement>
    </div>
  )
}