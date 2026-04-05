"use client"

import { m } from "framer-motion"
import { MotionDiv } from "@/lib/lazy-ui"
import { Text } from "@/components/ui/Elements"

const LEETCODE_STATS = {
  total: 316,
  totalProblems: 3892,
  easy: { solved: 113, total: 935, color: "#22c55e", label: "Easy" },
  medium: { solved: 171, total: 2036, color: "#f59e0b", label: "Medium" },
  hard: { solved: 32, total: 921, color: "#ef4444", label: "Hard" },
  contestRating: 1473,
  topPercentage: 53.39,
  maxStreak: 37,
  badges: 1,
}

const DifficultyBar = ({
  solved,
  total,
  color,
  label,
  delay,
}: {
  solved: number
  total: number
  color: string
  label: string
  delay: number
}) => {
  const percentage = (solved / total) * 100

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium" style={{ color }}>
          {label}
        </span>
        <span className="text-sm text-slate-500">
          <span className="font-semibold text-slate-800">{solved}</span>/{total}
        </span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
        <m.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export const LeetCodeStats = () => {
  const solvedPercentage = (LEETCODE_STATS.total / LEETCODE_STATS.totalProblems) * 100

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-12 flex flex-col gap-6"
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
        <Text as="h3" size="sm" className="font-medium text-slate-900 uppercase tracking-wider">
          LeetCode Stats
        </Text>
      </div>

      <div className="custom-shadow w-full overflow-hidden rounded-xl border border-gray-200 bg-white p-6 md:p-8">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          {/* Left: Circular progress */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="relative flex h-36 w-36 items-center justify-center">
              {/* Background circle */}
              <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                <m.circle
                  cx="60"
                  cy="60"
                  r="52"
                  fill="none"
                  stroke="url(#leetcode-gradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 52}
                  initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                  whileInView={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - solvedPercentage / 100) }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="leetcode-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Center text */}
              <div className="z-10 flex flex-col items-center">
                <m.span
                  className="text-3xl font-bold text-slate-900"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  {LEETCODE_STATS.total}
                </m.span>
                <span className="text-xs text-slate-400">Solved</span>
              </div>
            </div>

            {/* Mini stats */}
            <div className="flex gap-4 text-center">
              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-900">{LEETCODE_STATS.contestRating}</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">Rating</span>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-900">{LEETCODE_STATS.maxStreak}</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">Max Streak</span>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-900">Top {LEETCODE_STATS.topPercentage}%</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">Contest</span>
              </div>
            </div>
          </div>

          {/* Right: Difficulty bars */}
          <div className="flex flex-1 flex-col justify-center gap-5">
            <DifficultyBar {...LEETCODE_STATS.easy} delay={0.3} />
            <DifficultyBar {...LEETCODE_STATS.medium} delay={0.5} />
            <DifficultyBar {...LEETCODE_STATS.hard} delay={0.7} />

            {/* Profile link */}
            <a
              href="https://leetcode.com/u/imtiyaz00/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l.257.213a1.38 1.38 0 0 0 1.95-.003c.541-.54.541-1.415.003-1.955a1.377 1.377 0 0 0-.087-.082A5.277 5.277 0 0 0 13.483 0zm4.756 6.007a1.38 1.38 0 0 0-.975.413l-.444.448a5.663 5.663 0 0 1 1.627 1.108l.046.044c.652.64.972 1.47.948 2.264a2.68 2.68 0 0 1-.066.522 2.545 2.545 0 0 1-.619 1.164l-4.523 4.845a3.023 3.023 0 0 1-4.163.164l-.258-.214a1.38 1.38 0 0 0-1.95.003c-.541.54-.541 1.414-.004 1.955.025.025.05.049.078.072a5.276 5.276 0 0 0 3.814 1.284 5.59 5.59 0 0 0 3.808-1.764l4.522-4.845a5.266 5.266 0 0 0 1.21-2.103 5.348 5.348 0 0 0 .125-.514 5.527 5.527 0 0 0-.062-2.362 5.83 5.83 0 0 0-.349-1.017 5.938 5.938 0 0 0-1.271-1.818l-.11-.108a1.38 1.38 0 0 0-.976-.413z" />
              </svg>
              View LeetCode Profile →
            </a>
          </div>
        </div>
      </div>
    </MotionDiv>
  )
}
