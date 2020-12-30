import React from "react"
import { Link } from "react-router-dom"

const SocialNetworkLink = ({ type, to }) => {
  return (
    <Link to={to} className="home__social-link">
      <i className={`bx bxl-${type}`}></i>
    </Link>
  )
}

export default SocialNetworkLink
