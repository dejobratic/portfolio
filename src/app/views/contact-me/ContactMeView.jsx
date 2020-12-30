import React from "react"

import SectionHeader from "app/components/section-header/SectionHeader"
import ContactForm from "app/views/contact-me/ContactForm"

import "app/views/contact-me/contact-me-view.css"

const ContactMeView = () => {
  return (
    <section className="contact section" id="contact">
      <SectionHeader title="Get In Touch" subtitle="Contact Me" />
      <div className="contact__container bd-grid">
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactMeView
