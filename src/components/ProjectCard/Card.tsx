import Image, { StaticImageData } from "next/image"
import clsx from "clsx"

export const Card = ({
  src,
  alt,
  color = "#3b82f6",
  type = "",
  reveal = true,
  text = "Live Preview",
}: {
  src: StaticImageData
  alt: string
  color?: string
  type?: string
  reveal?: boolean
  text?: string
}) => {
  const title = alt.split(" - ")[0] || alt

  return (
    <div
      className={clsx(
        "group relative h-full w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] shadow-md transition-all duration-300 hover:border-[var(--border-hover)] hover:shadow-xl",
        reveal ? "reveal-false:[&_.card-info]:opacity-0" : ""
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-900/10 dark:bg-neutral-900">
        {/* Project Image */}
        <Image
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          src={src}
          alt={alt}
          priority
          decoding="async"
        />

        {/* Gradient Overlay with Project Details */}
        <div
          className="card-info pointer-events-none absolute inset-0 flex flex-col justify-between p-4 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)`,
          }}
        >
          {/* Top Pill: Category */}
          <div className="flex items-center justify-between">
            <span
              className="inline-flex items-center rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md shadow-sm"
              style={{ borderColor: `${color}60` }}
            >
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
              {type}
            </span>
          </div>

          {/* Bottom Row: Title & Action Button */}
          <div className="flex items-end justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-white drop-shadow-md md:text-xl">
                {title}
              </h3>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition-all duration-200 group-hover:bg-white group-hover:text-black">
              <span>{text}</span>
              <svg
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}