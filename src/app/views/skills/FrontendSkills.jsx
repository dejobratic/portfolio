import React from "react"

import SkillsContainer from "app/views/skills/SkillsContainer"
import SkillsItem from "app/views/skills/SkillsItem"

const FrontendSkills = () => {
  return (
    <SkillsContainer title="Frontend">
      <SkillsItem name="HTML/CSS" percentage={80} />
      <SkillsItem name="JavaScript" percentage={80} />
      <SkillsItem name="React" percentage={90} />
    </SkillsContainer>
  )
}

export default FrontendSkills
