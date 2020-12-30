import React from "react"

const SkillsItem = ({ name, percentage }) => {
  return (
    <div className="skills__data">
      <span className="skills__name">{name}</span>
      <span className="skills__number">{percentage}%</span>
      <span className="skills__bar" style={{ width: `${percentage}%` }}></span>
    </div>
  )
}

export default SkillsItem
