import clsx from "clsx"
import { JSX } from "react"

type HeadingProps<T extends keyof JSX.IntrinsicElements> = React.ComponentPropsWithoutRef<T> & {
  children: React.ReactNode
  variant?: "large" | "medium"
}

export const H1: React.FC<HeadingProps<"h1">> = ({ children, variant = "large", ...rest }) => {
  const variants = {
    large: "xs:text-5xl relative z-5 text-4xl leading-[1] font-medium tracking-tight text-slate-900 sm:text-6xl lg:text-7xl",
    medium: "sm:text-3xl relative z-5 text-3xl leading-[1.1] font-normal tracking-tight text-slate-900 sm:text-4xl lg:text-5xl",
  }

  return (
    <h1 {...rest} className={clsx(variants[variant], rest.className)}>
      {children}
    </h1>
  )
}

export const H2: React.FC<HeadingProps<"h2">> = ({ children, ...rest }) => {
  return (
    <h2 {...rest} className={clsx("text-4xl tracking-tighter text-slate-900 md:text-5xl md:leading-11 lg:text-6xl lg:leading-15", rest.className)}>
      {children}
    </h2>
  )
}

export const H3: React.FC<HeadingProps<"h3">> = ({ children, ...rest }) => {
  return (
    <h3 {...rest} className={clsx("text-2xl leading-8 font-medium tracking-tight text-slate-800 md:text-3xl", rest.className)}>
      {children}
    </h3>
  )
}

type HTMLElementTag = keyof HTMLElementTagNameMap

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: HTMLElementTag
  size?: "sm" | "base" | "lg" | "xl"
}

export function Text({ as: Component = "p", size = "base", className = "", ...props }: TextProps) {
  const sizeClasses = {
    sm: "text-sm leading-tight md:text-base",
    base: "text-base leading-tight md:text-lg",
    lg: "text-lg leading-6 md:text-xl",
    xl: "text-xl leading-6 md:text-2xl",
  }

  return <Component {...props} className={`${sizeClasses[size]} tracking-tight text-slate-600 ${className}`} />
}

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: HTMLElementTag
  size?: "xs" | "sm" | "base" | "lg" | "xl"
}

export function Typography({ as: Component = "article", size = "base", ...props }: TypographyProps) {
  const sizeClasses = {
    xxs: "text-xs leading-tight",
    xs: "text-sm leading-tight",
    sm: "text-sm leading-tight md:text-base",
    base: "text-base leading-tight md:text-lg",
    lg: "text-lg leading-6 md:text-xl",
    xl: "text-xl leading-6 md:text-2xl",
  }
  return <Component {...props} className={`text-slate-600 ${sizeClasses[size]} ${props.className}`} />
}
