import React from "react"

import SkillsContainer from "app/skills/SkillsContainer"
import SkillsItem from "app/skills/SkillsItem"

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
