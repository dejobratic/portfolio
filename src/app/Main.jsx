import React from "react"

import HomePage from "app/home/HomePage"
import AboutPage from "app/about/AboutPage"
import SkillsPage from "app/skills/SkillsPage"
import EducationPage from "app/education/EducationPage"
import ServicesPage from "app/services/ServicesPage"

const Main = () => {
  return (
    <main className="l-main">
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <EducationPage />
      <ServicesPage />
    </main>
  )
}

export default Main
