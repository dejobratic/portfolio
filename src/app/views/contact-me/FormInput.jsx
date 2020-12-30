import React from "react"

const FormInput = ({ type, placeholder, ...otherProps }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="contact__input"
      {...otherProps}
    />
  )
}

export default FormInput
