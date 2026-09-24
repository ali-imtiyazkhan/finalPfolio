"use client"

import React, { useEffect, useState } from "react"

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const currentTheme = document.documentElement.getAttribute("data-theme") as "light" | "dark" | null
    if (currentTheme) {
      setTheme(currentTheme)
    } else {
      const saved = localStorage.getItem("theme") as "light" | "dark" | null
      const initial = saved || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
      setTheme(initial)
      document.documentElement.setAttribute("data-theme", initial)
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    document.documentElement.setAttribute("data-theme", nextTheme)
    localStorage.setItem("theme", nextTheme)
    window.dispatchEvent(new CustomEvent("themechange", { detail: { theme: nextTheme } }))
  }

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className={`flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition-all ${className}`}
      >
        <span className="h-4 w-4" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`group relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-sm transition-all duration-300 hover:scale-105 hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)] ${className}`}
    >
      {theme === "dark" ? (
        // Sun icon (click to switch to light)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--text-primary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4  transition-transform duration-300 group-hover:rotate-45"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ) : (
        // Moon icon (click to switch to dark)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 text-slate-700 transition-transform duration-300 group-hover:-rotate-12"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  )
}
