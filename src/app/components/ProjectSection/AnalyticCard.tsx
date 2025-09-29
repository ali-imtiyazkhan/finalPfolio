import { CountUp } from "@/app/ui/CountUp"
import { H3 } from "@/app/ui/Elements"
import { MotionSpan } from "@/app/utils/lazy-ui"

interface AnalyticCardProps {
  title: string
  description?: string
  percentageIncrease?: number
  chart: React.ReactNode
  dataSource: string
}

export const AnalyticCard: React.FC<AnalyticCardProps> = ({ title, description, percentageIncrease, chart, dataSource }) => {
  return (
    <div className="relative flex h-[500px] max-w-md min-w-[300px] flex-1 flex-col justify-between rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg">
      {/* Title */}

      <div className="mb-8 text-center">
        <H3 className="mb-2">{title}</H3>
        {percentageIncrease && (
          <p className="text-4xl font-semibold text-slate-700">
            +<CountUp to={percentageIncrease} margin="-100px" />%
          </p>
        )}
        {description && <p className="text-xs leading-tight text-gray-600">{description}</p>}
      </div>

      {/* Chart Container */}
      {chart}
      <MotionSpan
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 1.5,
          ease: [0.2, 0.65, 0.3, 0.9],
        }}
        className="absolute -bottom-6 left-4 text-center text-xs text-slate-500"
      >
        * {dataSource}
      </MotionSpan>
    </div>
  )
}