import React from "react"

import InfoContainer from "app/views/about/InfoContainer"
import InfoItem from "app/views/about/InfoItem"

const ContactInfo = () => {
  return (
    <InfoContainer title="Contact Information">
      <InfoItem type="user">
        <span>Dejan Bratić</span>
      </InfoItem>
      <InfoItem type="phone">
        <span>111-222-333</span>
      </InfoItem>
      <InfoItem type="envelope">
        <span>test@example.com</span>
      </InfoItem>
    </InfoContainer>
  )
}

export default ContactInfo
