import React from "react"

import HomeView from "app/views/home/HomeView"
import AboutView from "app/views/about/AboutView"
import SkillsView from "app/views/skills/SkillsView"
import EducationView from "app/views/education/EducationView"
import ServicesView from "app/views/services/ServicesView"
import ProjectsView from "app/views/projects/ProjectsView"
import NewProjectView from "app/views/new-project/NewProjectView"
import ContactMeView from "app/views/contact-me/ContactMeView"

const Main = () => {
  return (
    <main className="l-main">
      <HomeView />
      <AboutView />
      <SkillsView />
      <EducationView />
      <ServicesView />
      <ProjectsView />
      <NewProjectView />
      <ContactMeView />
    </main>
  )
}

export default Main
