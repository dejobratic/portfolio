import React from "react"

import InfoContainer from "app/views/about/InfoContainer"
import InfoItem from "app/views/about/InfoItem"

const Experience = () => {
  return (
    <InfoContainer title="Experience">
      <InfoItem type="medal">
        <div>
          <span className="about__information-subtitle">5 Years Job</span>
          <span className="about__information-subtitle-small">Experience</span>
        </div>
      </InfoItem>
      <InfoItem type="briefcase">
        <div>
          <span className="about__information-subtitle">50+ Projects</span>
          <span className="about__information-subtitle-small">Completed</span>
        </div>
      </InfoItem>
    </InfoContainer>
  )
}

export default Experience
