import React from "react"

import SocialNetworkLink from "app/views/home/SocialNetworkLink"

const SocialNetwork = () => {
  return (
    <div className="home__social">
      <SocialNetworkLink type="linkedin" to="/" />
      <SocialNetworkLink type="github" to="/" />
      <SocialNetworkLink type="twitter" to="/" />
    </div>
  )
}

export default SocialNetwork
