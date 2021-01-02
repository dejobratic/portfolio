import React from "react"

import ProjectLink from "app/views/projects/ProjectLink"

const Project = ({ title, imageUrl, demoUrl, codeUrl }) => {
  return (
    <div className="projects__img">
      <img src={imageUrl} alt={title} />
      <div className="projects__data">
        <ProjectLink to={codeUrl} />
        <span className="projects__title">{title}</span>
      </div>
    </div>
  )
}

export default Project
