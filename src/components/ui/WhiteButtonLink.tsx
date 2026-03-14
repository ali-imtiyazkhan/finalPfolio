export const WhiteButtonLink: React.FC<{ children: React.ReactNode; href: string; className?: string }> = ({ children, href, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={
        "bubble-hover flex w-fit items-center gap-1 rounded-full border border-gray-300! bg-white px-4 py-3 text-sm font-medium whitespace-nowrap text-black shadow-lg transition-all duration-300 hover:translate-y-0.5 hover:shadow-none " +
        className
      }
    >
      {children}
    </a>
  )
}