export const BlackButtonLink: React.FC<{ children: React.ReactNode; href: string }> = ({ children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="bubble-hover button-shadow flex w-fit items-center gap-1 rounded-full bg-black px-4 py-3 text-sm font-medium whitespace-nowrap text-white hover:translate-y-0.5 hover:shadow-none"
    >
      {children}
    </a>
  )
}