import Image, { StaticImageData } from "next/image"

export const ClientInfoCard: React.FC<{
  img: StaticImageData | string
  name: string
  title: string
}> = ({ img, name, title }) => {
  return (
    <div className="flex items-center justify-center gap-3">
      {/* Avatar */}
      <div className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-slate-500">
        <Image src={img} alt={name} width={76} height={76} className="h-full w-full object-cover" />
      </div>

      {/* Name & Role */}
      <div className="flex flex-col items-start">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-slate-500">{title}</p>
      </div>
    </div>
  )
}