import React from "react"

import FrontendSkills from "app/skills/FrontendSkills"
import BackendSkills from "app/skills/BackendSkills"

import "app/skills/skills-page.css"

const SkillsPage = () => {
  return (
    <div id="skills" className="skills section">
      <div className="skills__container bd-grid">
        <div>
          <span className="section-subtitle">Why Chose Me?</span>
          <h2 className="section-title">My Expertise Area</h2>
        </div>

        <FrontendSkills />
        <BackendSkills />
      </div>
    </div>
  )
}

export default SkillsPage
