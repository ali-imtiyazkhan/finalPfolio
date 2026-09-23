import React from "react"

export const PixelPet: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative select-none ${className}`} title="Sleeping peacefully...">
      <svg
        width="68"
        height="40"
        viewBox="0 0 68 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
        shapeRendering="crispEdges"
      >
        {/* Sleeping zzz indicator */}
        <g className="animate-pulse">
          <text x="36" y="8" fill="#a1a1aa" fontSize="8" fontFamily="monospace">z</text>
          <text x="44" y="6" fill="#71717a" fontSize="7" fontFamily="monospace">z</text>
        </g>

        {/* Body shadow */}
        <rect x="8" y="34" width="52" height="4" fill="#000000" fillOpacity="0.4" />

        {/* Main Body - Orange Fox/Shiba */}
        <rect x="14" y="18" width="40" height="16" fill="#e07a38" />
        <rect x="18" y="14" width="32" height="6" fill="#e07a38" />
        <rect x="22" y="12" width="24" height="4" fill="#e07a38" />
        <rect x="10" y="22" width="6" height="10" fill="#c46226" />
        <rect x="52" y="20" width="8" height="12" fill="#c46226" />

        {/* White Belly & Chin */}
        <rect x="18" y="26" width="30" height="8" fill="#ffffff" />
        <rect x="22" y="32" width="22" height="2" fill="#ffffff" />
        <rect x="46" y="24" width="10" height="8" fill="#ffffff" />

        {/* Face / Head (turned left, resting) */}
        <rect x="12" y="16" width="14" height="14" fill="#e07a38" />
        <rect x="10" y="20" width="12" height="8" fill="#ffffff" />

        {/* Ears */}
        <rect x="16" y="10" width="4" height="4" fill="#e07a38" />
        <rect x="18" y="12" width="2" height="2" fill="#ffffff" />
        <rect x="24" y="10" width="4" height="4" fill="#c46226" />

        {/* Sleeping Eye (curved line) */}
        <rect x="14" y="22" width="4" height="2" fill="#2b1a12" />
        <rect x="16" y="24" width="2" height="1" fill="#2b1a12" />

        {/* Nose */}
        <rect x="9" y="22" width="3" height="3" fill="#18181b" />

        {/* Paws */}
        <rect x="16" y="32" width="8" height="2" fill="#ffffff" />
        <rect x="42" y="32" width="8" height="2" fill="#ffffff" />

        {/* Tail curled around body */}
        <rect x="48" y="16" width="10" height="14" fill="#e07a38" />
        <rect x="54" y="14" width="8" height="10" fill="#c46226" />
        <rect x="56" y="16" width="6" height="8" fill="#ffffff" />
      </svg>
    </div>
  )
}
