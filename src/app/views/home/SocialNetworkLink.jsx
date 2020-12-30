import React from "react"
import { Link } from "react-router-dom"

const SocialNetworkLink = ({ title, to }) => {
  return (
    <Link to={to} className="home__social-link">
      <i className={`bx bxl-${title}`}></i>
    </Link>
  )
}

export default SocialNetworkLink
