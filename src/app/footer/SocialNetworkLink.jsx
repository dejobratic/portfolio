import React from "react"

const SocialNetworkLink = ({ type, to }) => {
  return (
    <a href={to} className="footer__social-link">
      <i className={`bx bxl-${type}`}></i>
    </a>
  )
}

export default SocialNetworkLink
