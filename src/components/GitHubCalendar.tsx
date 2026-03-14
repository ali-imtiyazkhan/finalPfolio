"use client"

import React from "react"
import { GitHubCalendar } from "react-github-calendar"
import { MotionDiv } from "@/lib/lazy-ui"
import { Text } from "@/components/ui/Elements"

interface Props {
  username: string
}

export const GitHubContributionGraph = ({ username }: Props) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-12 flex flex-col gap-6"
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <Text as="h3" size="sm" className="font-medium text-slate-900 uppercase tracking-wider">
          Github Contributions
        </Text>
      </div>

      <div className="custom-shadow w-full overflow-hidden rounded-xl border border-gray-200 bg-white p-6 md:p-8">
        <GitHubCalendar
          username={username}
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          theme={{
            light: ["#f1f5f9", "#bbf7d0", "#4ade80", "#22c55e", "#166534"],
            dark: ["#f1f5f9", "#bbf7d0", "#4ade80", "#22c55e", "#166534"], // Keep it consistent with light theme for now
          }}
          style={{
            color: "#64748b",
          }}
        />
      </div>
    </MotionDiv>
  )
}
