import React from "react"

import SkillsContainer from "app/views/skills/SkillsContainer"
import SkillsItem from "app/views/skills/SkillsItem"

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
