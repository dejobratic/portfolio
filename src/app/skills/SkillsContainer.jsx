import React from "react"

const SkillsContainer = ({ title, children }) => {
  return (
    <div className="skills__content">
      <h3 className="skills__subtitle">{title}</h3>
      {children}
    </div>
  )
}

export default SkillsContainer
