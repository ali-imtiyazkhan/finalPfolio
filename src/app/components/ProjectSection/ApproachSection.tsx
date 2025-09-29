import { HeaderText } from "@/app/ui/HeaderText"
import { ApproachTabs } from "./ApproachTabs"

export interface Phase {
  id: number
  title: string
  subtitle: string
  description: string
  details: string[]
  icon: string
  feature: React.ReactNode
}

export const ApproachSection: React.FC<{ phases: Phase[] }> = ({ phases }) => {
  return (
    <section className="border-y border-gray-200">
      <div className="inside-container-large">
        <HeaderText title="The Approach." titleHighlight="See how we did it." />
        <ApproachTabs phases={phases} />
      </div>
    </section>
  )
}