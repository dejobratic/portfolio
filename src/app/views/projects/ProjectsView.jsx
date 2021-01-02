import React from "react"

import SectionHeader from "app/components/section-header/SectionHeader"
import Project from "app/views/projects/Project"

import "app/views/projects/projects-view.css"

const ProjectsView = () => {
  return (
    <section className="projects section" id="projects">
      <SectionHeader title="Recent Works" subtitle="My Portfolio" />
      <div className="projects__container bd-grid">
        <Project
          title="CRWN-Clothing"
          demoUrl="https://crwn-clothing-09.herokuapp.com/"
          imageUrl="https://png.pngtree.com/png-vector/20190409/ourmid/pngtree-engagement-rate-isometric-illustration-concept-isometric-flat-design-concept-of-png-image_922166.jpg"
        />
      </div>
    </section>
  )
}

export default ProjectsView
