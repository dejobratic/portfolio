import React from "react"

import SectionHeader from "app/components/section-header/SectionHeader"
import FrontendSkills from "app/skills/FrontendSkills"
import BackendSkills from "app/skills/BackendSkills"

import "app/skills/skills-page.css"

const SkillsPage = () => {
  return (
    <section id="skills" className="skills section">
      <div className="skills__container bd-grid">
        <SectionHeader title="My Expertise" subtitle="Why Chose Me?" />

        <FrontendSkills />
        <BackendSkills />
      </div>
    </section>
  )
}

export default SkillsPage
