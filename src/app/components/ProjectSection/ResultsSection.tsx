import { HeaderText } from "@/app/ui/HeaderText"
import { AnalyticCard } from "./AnalyticCard"

export interface AnalyticCardProps {
  title: string
  description: string
  percentageIncrease: number
  chart: React.ReactNode
  dataSource: string
}

export interface ResultsSectionProps {
  analyticCards: AnalyticCardProps[]
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ analyticCards }) => {
  return (
    <section className="inside-container-large">
      <HeaderText title="The Outcome." titleHighlight="See the results." />

      <div className="flex flex-wrap items-start justify-center gap-8 gap-y-16">
        {analyticCards.map((card) => (
          <AnalyticCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  )
}