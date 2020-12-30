import React from "react"

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div>
      <span className="section-subtitle">{subtitle}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  )
}

export default SectionHeader
