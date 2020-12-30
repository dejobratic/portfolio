import React from "react"

const Service = ({ type, title, description }) => {
  return (
    <div className="services__content">
      <i className={`bx bx-${type} services__icon`}></i>
      <h3 className="services__title">{title}</h3>
      <p className="services__description">{description}</p>
    </div>
  )
}

export default Service
