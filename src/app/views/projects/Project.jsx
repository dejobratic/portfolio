import React from "react"
import { Link } from "react-router-dom"

const Project = ({ title, imageUrl, demoUrl, codeUrl }) => {
  return (
    <div className="projects__img">
      <img src={imageUrl} alt={title} />
      <div className="projects__data">
        <Link to={demoUrl} className="projects__link">
          <i className="bx bx-link-alt"></i>
        </Link>
        <span className="projects__title">{title}</span>
      </div>
    </div>
  )
}

export default Project
