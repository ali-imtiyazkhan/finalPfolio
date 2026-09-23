import React from "react"

export const DotMatrix: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full h-20 overflow-hidden opacity-30 select-none ${className}`}
    >
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `radial-gradient(circle, #52525b 1px, transparent 1px)`,
          backgroundSize: "12px 12px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%)",
        }}
      />
    </div>
  )
}
