import React from "react"

import SectionHeader from "app/components/section-header/SectionHeader"
import EducationInfo from "app/education/EducationInfo"

import "app/education/education-page.css"

const EducationPage = () => {
  return (
    <section id="education" className="education section">
      <div className="education__container bd-grid">
        <SectionHeader title="My Education" subtitle="Qualification" />

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
