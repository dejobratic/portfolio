import React from "react"

import SkillsContainer from "app/skills/SkillsContainer"
import SkillsItem from "app/skills/SkillsItem"

const BackendSkills = () => {
  return (
    <SkillsContainer title="Backend">
      <SkillsItem name="C#" percentage={90} />
      <SkillsItem name="SQL" percentage={90} />
      <SkillsItem name="Python" percentage={70} />
    </SkillsContainer>
  )
}

export default BackendSkills
