import React from "react"

const InfoItem = ({ type, children }) => {
  return (
    <div className="about__information-data">
      <i className={`bx bxs-${type} about__information-icon`}></i>
      {children}
    </div>
  )
}

export default InfoItem
