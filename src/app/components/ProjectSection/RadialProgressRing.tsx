import { CountUp } from "@/app/ui/CountUp"
import { MotionCircle, MotionDiv } from "@/app/utils/lazy-ui"

interface RadialProgressRingProps {
  percentage?: number
  size?: number
  strokeWidth?: number
}

export const RadialProgressRing: React.FC<RadialProgressRingProps> = ({ percentage = 45, size = 250, strokeWidth = 40 }) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (90 / 100) * circumference

  return (
    <div className="relative flex items-center justify-center pb-10">
      <svg width={size} height={size} className="-rotate-90 transform" viewBox={`0 0 ${size} ${size}`}>
        {/* Background Circle */}
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#dedede" strokeWidth={strokeWidth} />
        <circle cx={size / 2} cy={size / 2} r={radius + 19} fill="none" stroke="#d1d5dc" strokeWidth={1} />
        <circle cx={size / 2} cy={size / 2} r={radius - 19} fill="none" stroke="#d1d5dc" strokeWidth={1} />

        {/* Animated Progress Circle */}
        <MotionCircle
          viewport={{ once: true }}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          transition={{
            duration: 2,
            delay: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient">
            <stop offset="50%" stopColor="#0f172b" />
            <stop offset="100%" stopColor="#62748e" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center Content */}

      <MotionDiv
        initial={{ opacity: 0, scale: 1.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.2, 0.65, 0.3, 0.9],
        }}
        className="absolute inset-0 flex flex-col items-center justify-center pb-8 text-center"
      >
        <div className="mb-1 text-4xl font-semibold text-slate-800">
          +<CountUp to={percentage} margin="-100px" delay={0.3} />%
        </div>
      </MotionDiv>
    </div>
  )
}