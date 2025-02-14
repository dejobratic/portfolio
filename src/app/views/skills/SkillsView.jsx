import React from "react"

import SectionHeader from "app/components/section-header/SectionHeader"
import FrontendSkills from "app/views/skills/FrontendSkills"
import BackendSkills from "app/views/skills/BackendSkills"

import "app/views/skills/skills-view.css"

const SkillsView = () => {
  return (
    <section id="skills" className="skills section">
      <SectionHeader title="My Expertise" subtitle="Why Chose Me?" />
      <div className="skills__container bd-grid">
        <FrontendSkills />
        <BackendSkills />
      </div>
    </section>
  )
}

export default SkillsView
