import { Children } from "react"
import { LazyCarouselButtons } from "./LazyButtons"

type CarouselProps = {
  children: React.ReactNode
  /** Number of slides to show on desktop (≥ 1024px) */
  slidesToShow: number
  /** Number of slides to show on desktop (≥ 1280px) */
  xlSlidesToShow: number
  /** Number of slides to show on tablet (576px - 1024px) */
  tabletSlidesToShow?: number
  /** Number of slides to show on mobile (≤ 576px) */
  mobileSlidesToShow?: number
  /** Gap between cards in px */
  gap?: number
  /** Auto play interval in ms */
  autoplay?: number
  /** Set an Active State on Cards, if Active State>CurrentIndex, Active State will move up before the carousel Slides */
  activeState?: boolean

  className?: string
}

export const ZeroUICarousel: React.FC<CarouselProps> = ({
  children,
  xlSlidesToShow,
  slidesToShow,
  tabletSlidesToShow = slidesToShow,
  mobileSlidesToShow = tabletSlidesToShow,
  gap = 0,
  className,
  activeState = false,
  autoplay,
}) => {
  const total = Children.count(children)

  return (
    // ZeroUICarousel.tsx (Server)
    <section className={"sm:[--gap:10px] lg:[--gap:20px] " + className}>
      <div
        data-carousel-root
        style={
          {
            "--gap": `${gap}px`,
            "--xlvis": xlSlidesToShow,
            "--dvis": slidesToShow,
            "--tvis": tabletSlidesToShow,
            "--mvis": mobileSlidesToShow,
          } as React.CSSProperties
        }
        className="carousel-container relative w-full"
      >
        <div
          data-carousel-track
          data-active="1" // 1-based active index for CSS targeting
          style={{ "--active": 1 } as React.CSSProperties} // 1-based active
          className={
            "carousel-track flex translate-x-[calc(var(--carousel-idx,0)*(calc((100%-(var(--vis)-1)*var(--gap))/var(--vis)+var(--gap)))*-1)] " +
            " gap-[var(--gap)] transition-transform duration-300 ease-in-out will-change-transform [--vis:var(--mvis)] md:[--vis:var(--tvis)] lg:[--vis:var(--dvis)] 2xl:[--vis:var(--xlvis)]"
          }
        >
          {Children.map(children, (child, i) => (
            <div
              key={i}
              // for the initial state
              data-active={i === 0 && "true"}
              data-i={i + 1} // 1-based index per slide
              className="group flex-[0_0_calc((100%-(var(--vis)-1)*var(--gap))/var(--vis))] transition-all duration-300 ease-in-out"
            >
              {child}
            </div>
          ))}
        </div>
        {/* Buttons remain the ONLY client part */}
        <LazyCarouselButtons total={total} desktopVis={slidesToShow} autoPlayInterval={autoplay} activeState={activeState} />
      </div>
    </section>
  )
}