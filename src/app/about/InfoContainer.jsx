import React from "react"

const InfoContainer = ({ title, children }) => {
  return (
    <div className="about__information">
      <h3 className="about__information-title">{title}</h3>
      {children}
    </div>
  )
}

export default InfoContainer
