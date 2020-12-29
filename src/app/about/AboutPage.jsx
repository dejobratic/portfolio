import React from "react"

import Details from "app/about/Details"
import ContactInfo from "app/about/ContactInfo"
import Experience from "app/about/Experience"

import "app/about/about-page.css"

const AboutPage = () => {
  return (
    <section id="about" className="about section">
      <div className="about__container bd-grid">
        <div>
          <span className="section-subtitle">Intro</span>
          <h2 className="section-title">About Me</h2>
        </div>

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
