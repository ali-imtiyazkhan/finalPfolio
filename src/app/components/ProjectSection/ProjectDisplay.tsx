import { ProjectHero } from "./ProjectHero"
import { BeforeAfterSection } from "./BeforeAfterSection"
import { ResultsSection } from "./ResultsSection"
import { ApproachSection } from "./ApproachSection"
import { LargeReview } from "../LargeReview"
import { MoreProjectsSection } from "./MoreProjectsSection"

import { RecruiterContact } from "../RecruiterContact"

const ProjectDisplay: React.FC<{ projectData:any }> = ({ projectData }) => {
  return (
    <main className="overflow-hidden">
      <ProjectHero {...projectData.hero} />
      {projectData.beforeAfter && (
        <BeforeAfterSection
          heroBefore={projectData.beforeAfter.heroBefore}
          heroBeforeMobile={projectData.beforeAfter.heroBeforeMobile}
          iframe={projectData.beforeAfter.iframe}
          heroAfter={projectData.beforeAfter.heroAfter}
          beforeAltText={projectData.beforeAfter.beforeAltText}
          beforeMobileAltText={projectData.beforeAfter.beforeMobileAltText}
          afterAltText={projectData.beforeAfter.afterAltText}
        />
      )}
      <ResultsSection analyticCards={projectData.results} />
      <ApproachSection phases={projectData.phases} />
      <LargeReview {...projectData.review} />
      <MoreProjectsSection />
      <RecruiterContact />
    </main>
  )
}

export default ProjectDisplay