import { AnimatedH2 } from "../components/ui/AnimatedH2"
import { Typography } from "./Elements"

interface HeaderTextProps {
  title: string | React.ReactNode
  titleHighlight?: string
  description?: string | React.ReactNode
  className?: string
}

export const HeaderText: React.FC<HeaderTextProps> = ({ title, titleHighlight, description, className }) => {
  return (
    <div className={"flex flex-col gap-6 md:flex-row md:items-center md:gap-12 " + className}>
      <AnimatedH2 className="[flex:1_0_0px]">
        {title}
        {titleHighlight && (
          <>
            <br />
            <span className="text-slate-500">{titleHighlight}</span>
          </>
        )}
      </AnimatedH2>
      {description && (
        <Typography as="div" size="lg" className="max-w-md [flex:0.5_0_0px]">
          {description}
        </Typography>
      )}
    </div>
  )
}
