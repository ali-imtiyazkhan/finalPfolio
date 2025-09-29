import { MotionDiv } from "@/app/utils/lazy-ui"

interface TrafficData {
  label: string
  value: number
  color: string
}

export const TrafficBarChart: React.FC<{ startValue: number; endValue: number }> = ({ startValue, endValue }) => {
  const data: TrafficData[] = [
    {
      label: "Pre-Launch",
      value: startValue,
      color: "bg-gradient-to-br from-slate-600 to-slate-900",
    },
    {
      label: "Post-Launch",
      value: endValue,
      color: "bg-gradient-to-br from-slate-500 to-slate-900",
    },
  ]
  const maxValue = Math.max(...data.map((d) => d.value))

  return (
    <div className="relative flex h-fit w-full items-end justify-between gap-10 rounded-lg px-8 pb-10">
      {data.map((item, index) => {
        const barHeight = (item.value / maxValue) * 100

        return (
          <div key={index} className="flex flex-col items-center">
            {/* Value Label */}
            <MotionDiv
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.8 + index * 0.2,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className="mb-2 text-lg font-medium text-slate-700"
            >
              {item.value.toLocaleString()}/mo
            </MotionDiv>

            {/* Animated Bar */}
            <div className="relative h-66 w-20 rounded-lg border border-gray-300 bg-gray-200 shadow-lg">
              <MotionDiv
                initial={{ height: 0 }}
                whileInView={{ height: `${barHeight - 5}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.3 + index * 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={`absolute bottom-0 w-full ${item.color} rounded-lg`}
              />
            </div>

            {/* Bar Label */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.2,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className="mt-3 text-center text-xs text-nowrap text-slate-600 uppercase"
            >
              {item.label}
            </MotionDiv>
          </div>
        )
      })}
    </div>
  )
}