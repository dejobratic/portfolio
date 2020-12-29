import React from "react"

const EducationInfo = ({ period, title, university, specialty }) => {
  return (
    <div className="education__content">
      <div>
        <h3 className="education__year">{period}</h3>
        <span className="education__university">{university}</span>
      </div>

      <div className="education__time">
        <span className="education__rounder"></span>
        <span className="education__line"></span>
      </div>

      <div>
        <h3 className="education__title">{title}</h3>
        <span className="education__specialty">{specialty}</span>
      </div>
    </div>
  )
}

export default EducationInfo
