import React from "react"

import EducationInfo from "app/education/EducationInfo"

import "app/education/education-page.css"

const EducationPage = () => {
  return (
    <section id="education" className="education section">
      <div className="education__container bd-grid">
        <div>
          <span className="section-subtitle">Qualification</span>
          <h2 className="section-title">My Education</h2>
        </div>

        <EducationInfo
          period="2013 - 2017"
          title="Master's Degree"
          university="University of Montenegro"
          specialty="Mechatronics"
        />

        <EducationInfo
          period="2010 - 2013"
          title="Bachelor's Degree"
          university="University of Montenegro"
          specialty="Electronics, Telecommunications and Computers"
        />
      </div>
    </section>
  )
}

export default EducationPage
