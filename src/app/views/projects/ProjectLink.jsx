import React from "react"

const ProjectLink = ({ url }) => {
  return (
    <a href={url} className="projects__link">
      <i className="bx bx-link-alt"></i>
    </a>
  )
}

export default ProjectLink
