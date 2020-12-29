import React from "react"

import HomePage from "app/home/HomePage"
import AboutPage from "app/about/AboutPage"
import SkillsPage from "app/skills/SkillsPage"

const Main = () => {
  return (
    <main className="l-main">
      <HomePage />
      <AboutPage />
      <SkillsPage />
    </main>
  )
}

export default Main
