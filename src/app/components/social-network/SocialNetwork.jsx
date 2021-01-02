import React from "react"

import SocialNetworkLink from "app/components/social-network/SocialNetworkLink"

import "app/components/social-network/social-network.css"

const SocialNetwork = () => {
  return (
    <div className="social-network">
      <SocialNetworkLink type="linkedin" to="#" />
      <SocialNetworkLink type="github" to="#" />
      <SocialNetworkLink type="twitter" to="#" />
    </div>
  )
}

export default SocialNetwork
