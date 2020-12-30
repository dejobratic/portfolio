import React from "react"

import HomeView from "app/views/home/HomeView"
import AboutView from "app/views/about/AboutView"
import SkillsView from "app/views/skills/SkillsView"
import EducationView from "app/views/education/EducationView"
import ServicesView from "app/views/services/ServicesView"

const Main = () => {
  return (
    <main className="l-main">
      <HomeView />
      <AboutView />
      <SkillsView />
      <EducationView />
      <ServicesView />
    </main>
  )
}

export default Main
