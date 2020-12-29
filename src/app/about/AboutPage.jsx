import React from "react"

import Details from "app/about/Details"
import ContactInfo from "app/about/ContactInfo"
import Experience from "app/about/Experience"

import "app/about/about-page.css"

const AboutPage = () => {
  return (
    <section className="about section">
      <span className="section-subtitle">Intro</span>
      <h2 className="section-title">About Me</h2>

      <div className="about__container bd-grid">
        <Details />

        <div>
          <ContactInfo />
          <Experience />
        </div>
      </div>
    </section>
  )
}

export default AboutPage
