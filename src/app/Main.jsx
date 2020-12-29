import React from "react"

import HomePage from "app/home/HomePage"
import AboutPage from "app/about/AboutPage"
import SkillsPage from "app/skills/SkillsPage"
import EducationPage from "app/education/EducationPage"

const Main = () => {
  return (
    <main className="l-main">
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <EducationPage />
    </main>
  )
}

export default Main
