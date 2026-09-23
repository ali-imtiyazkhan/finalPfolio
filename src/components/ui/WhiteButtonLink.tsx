export const WhiteButtonLink: React.FC<{ children: React.ReactNode; href: string; className?: string }> = ({ children, href, className = "" }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={
        "bubble-hover flex w-fit items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-3 text-sm font-medium whitespace-nowrap text-[var(--text-primary)] shadow-sm transition-all duration-300 hover:translate-y-0.5 hover:border-[var(--border-hover)] hover:shadow-none " +
        className
      }
    >
      {children}
    </a>
  )
}