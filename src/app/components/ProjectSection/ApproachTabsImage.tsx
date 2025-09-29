import Image from "next/image"

interface ImageProps {
  className?: string
  alt: string
  src: string
  sizes?: string
}
export const ApproachTabsImage: React.FC<ImageProps> = ({ className, alt, src, sizes = "(max-width: 1028px) 100vw, 50vw" }) => {
  return <Image fill className={"object-contain " + className} sizes={sizes} alt={alt} src={src} />
}