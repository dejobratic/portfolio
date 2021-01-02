import React from "react"

const SocialNetworkLink = ({ type, to }) => {
  return (
    <a href={to} className="social-network-link">
      <i className={`bx bxl-${type}`}></i>
    </a>
  )
}

export default SocialNetworkLink
