export const BlackButtonLink: React.FC<{ children: React.ReactNode; href: string }> = ({ children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="bubble-hover button-shadow flex w-fit items-center gap-1.5 rounded-full bg-[var(--text-primary)] px-4 py-3 text-sm font-medium whitespace-nowrap text-[var(--bg)] transition-all duration-200 hover:translate-y-0.5 hover:opacity-90 hover:shadow-none"
    >
      {children}
    </a>
  )
}