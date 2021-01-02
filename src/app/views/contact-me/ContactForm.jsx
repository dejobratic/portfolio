import React from "react"
import FormInput from "./FormInput"

const ContactForm = () => {
  return (
    <form action="" className="contact__form">
      <div className="contact__inputs">
        <FormInput type="text" placeholder="Name" />
        <FormInput type="email" placeholder="E-mail" />
      </div>

      <FormInput type="text" placeholder="Project" />

      <textarea
        name=""
        id=""
        cols="0"
        rows="10"
        placeholder="Message"
        className="contact__input contact__message"
      ></textarea>

      <FormInput
        type="submit"
        value="Send Message"
        className="button contact__button"
      />
    </form>
  )
}

export default ContactForm
