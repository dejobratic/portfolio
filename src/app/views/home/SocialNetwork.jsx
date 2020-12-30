import React from "react"

import SocialNetworkLink from "app/views/home/SocialNetworkLink"

const SocialNetwork = () => {
  return (
    <div className="home__social">
      <SocialNetworkLink title="linkedin" to="/" />
      <SocialNetworkLink title="github" to="/" />
      <SocialNetworkLink title="twitter" to="/" />
    </div>
  )
}

export default SocialNetwork
