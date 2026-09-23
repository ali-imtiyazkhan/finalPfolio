"use client"

import React, { useEffect, useState } from "react"
import { GitHubCalendar } from "react-github-calendar"
import { MotionDiv } from "@/lib/lazy-ui"
import { Text } from "@/components/ui/Elements"

interface Props {
  username: string
}

export const GitHubContributionGraph = ({ username }: Props) => {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme") as "light" | "dark" | null
      setColorScheme(theme === "light" ? "light" : "dark")
    }

    updateTheme()
    window.addEventListener("themechange", updateTheme)
    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] })

    return () => {
      window.removeEventListener("themechange", updateTheme)
      observer.disconnect()
    }
  }, [])

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
        <Text as="h3" size="sm" className="font-medium text-[var(--text-primary)] uppercase tracking-wider">
          Github Contributions
        </Text>
      </div>

      <div className="custom-shadow w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 transition-colors duration-200 md:p-8">
        <GitHubCalendar
          username={username}
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          colorScheme={colorScheme}
          theme={{
            light: ["#f1f5f9", "#bbf7d0", "#4ade80", "#22c55e", "#166534"],
            dark: ["#18181b", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
          style={{
            color: colorScheme === "dark" ? "#a1a1aa" : "#64748b",
          }}
        />
      </div>
    </MotionDiv>
  )
}
