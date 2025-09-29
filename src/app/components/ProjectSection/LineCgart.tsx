"use client"
import { useState } from "react"
import { MotionCircle, MotionPath, MotionSvg } from "@/app/utils/lazy-ui"

export const LineChart: React.FC = () => {
  const [isInView, setIsInView] = useState(false)

  // 6 points: 2 per phase (no side padding, scaled Y)
  const points = [
    { x: 10, y: 360 }, // Pre-launch 1 (120 * 3)
    { x: 90, y: 355 }, // Pre-launch 2 (125 * 3)
    { x: 180, y: 180 }, // Launch 1 (30 * 3)
    { x: 270, y: 165 }, // Launch 2 (55 * 3)
    { x: 360, y: 144 }, // Post-launch 1 (48 * 3)
    { x: 440, y: 70 }, // Post-launch 2 (20 * 3)
  ]

  // Create path for line
  const linePath = points.map((point, i) => `${i === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ")

  // Create path for gradient fill (line + bottom)
  const fillPath = `${linePath} L 440 450 L 10 450 Z`

  return (
    <div>
      <MotionSvg
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        onViewportEnter={() => setIsInView(true)}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        width="450"
        height="340"
        viewBox="0 100 450 300"
        className="w-full"
      >
        <defs>
          {/* Gradient for fill under line - Safari fix */}
          <linearGradient id="areaGradient" gradientUnits="userSpaceOnUse" x1="225" y1="100" x2="225" y2="450">
            <stop offset="0%" style={{ stopColor: "#0f172b", stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: "#62748e", stopOpacity: 0.05 }} />
          </linearGradient>
        </defs>

        {/* Gradient fill under line */}
        <MotionPath
          d={fillPath}
          fill="url(#areaGradient)"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        />

        {/* Main line */}
        <MotionPath
          d={linePath}
          fill="none"
          stroke="#62748e"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          animate={isInView ? { strokeDashoffset: 0 } : { strokeDashoffset: 1000 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Points */}
        {points.map((point, i) => (
          <MotionCircle
            key={i}
            cx={point.x}
            cy={point.y}
            r="6"
            fill="#0f172b"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.5 + i * 0.15,
              type: "spring",
              stiffness: 300,
            }}
            style={{ transformOrigin: `${point.x}px ${point.y}px` }}
            className="transition-all duration-300 hover:scale-150"
          />
        ))}

        {/* Phase labels */}
        <text x="70" y="470" textAnchor="middle" className="fill-slate-600 text-xl uppercase">
          Pre-Launch
        </text>

        <text x="375" y="470" textAnchor="middle" className="fill-slate-600 text-xl uppercase">
          Post-Launch
        </text>
      </MotionSvg>
    </div>
  )
}