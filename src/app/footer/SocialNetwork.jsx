import React from "react"

import SocialNetworkLink from "app/footer/SocialNetworkLink"

const SocialNetwork = () => {
  return (
    <div className="footer__social">
      <SocialNetworkLink type="linkedin" to="#" />
      <SocialNetworkLink type="github" to="#" />
      <SocialNetworkLink type="twitter" to="#" />
    </div>
  )
}

export default SocialNetwork
