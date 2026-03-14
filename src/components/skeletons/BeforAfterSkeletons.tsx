export const BeforeAfterSliderSkeleton: React.FC = () => {
  return (
    <div className="relative max-h-[860px] min-h-[860px] w-full rounded-xl border border-gray-200 bg-gray-100 shadow-xl">
      <div className="absolute top-0 bottom-0 left-[70%] z-5 flex w-0.5 -translate-x-1/2 items-center justify-center bg-white">
        <div className="absolute top-1/2 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-col-resize items-center justify-center rounded-full bg-white shadow-lg">
          <div className="h-5 w-5 animate-pulse rounded-full bg-gray-300" />
        </div>
      </div>
    </div>
  )
}