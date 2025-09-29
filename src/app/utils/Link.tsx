import NextLink, { LinkProps as NextLinkProps } from "next/link"

export const Link: React.FC<NextLinkProps & { children: React.ReactNode; className?: string; target?: string }> = ({
  children,
  className,
  target,
  ...props
}) => {
  return (
    <NextLink {...props} data-vt className={className} target={target ?? undefined}>
      {children}
    </NextLink>
  )
}