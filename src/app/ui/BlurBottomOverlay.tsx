interface BottomBlurOverlayProps {
  layers?: number // How many blur layers (default 8)
  height?: string // Height of the blur area (default "20vh")
  strength?: 1 | 2 | 3 | 4 | 5
  className?: string // Extra classes for the wrapper div
}

export const BottomBlurOverlay: React.FC<BottomBlurOverlayProps> = ({ layers = 8, height = "20vh", strength = 2, className = "" }) => {
  const blursStrengths = [
    [0.02, 0.04, 0.08, 0.16, 0.32, 0.63, 1.25, 2.5],
    [0.04, 0.08, 0.16, 0.32, 0.63, 1.25, 2.5, 5],
    [0.08, 0.16, 0.32, 0.63, 1.25, 2.5, 5, 10],
    [0.16, 0.32, 0.63, 1.25, 2.5, 5, 10, 20],
    [0.32, 0.63, 1.25, 2.5, 5, 10, 20, 40],
  ]

  const blurs = blursStrengths[strength - 1]

  return (
    <div
      className={`blur-overlay touch:hidden ${className}`}
      style={{
        pointerEvents: "none",
        position: "fixed",
        inset: 0,
        zIndex: 5,
        overflow: "hidden",
      }}
    >
      {Array.from({ length: layers }).map((_, i) => {
        const blur = blurs[i] || blurs[blurs.length - 1]

        const start = i * 12.5
        const midStart = start + 12.5
        const midEnd = start + 25
        const end = start + 37.5

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: -2,
              height: height,
              zIndex: i + 1,
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: `linear-gradient(to bottom, 
                rgba(0,0,0,0) ${start}%,
                rgba(0,0,0,1) ${midStart}%,
                rgba(0,0,0,1) ${midEnd}%,
                rgba(0,0,0,0) ${end}%
              )`,
              WebkitMaskImage: `linear-gradient(to bottom, 
                rgba(0,0,0,0) ${start}%,
                rgba(0,0,0,1) ${midStart}%,
                rgba(0,0,0,1) ${midEnd}%,
                rgba(0,0,0,0) ${end}%
              )`,
            }}
          />
        )
      })}
    </div>
  )
}
