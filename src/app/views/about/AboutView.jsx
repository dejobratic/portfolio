import React from "react"

import SectionHeader from "app/components/section-header/SectionHeader"
import Details from "app/views/about/Details"
import ContactInfo from "app/views/about/ContactInfo"
import Experience from "app/views/about/Experience"

import "app/views/about/about-view.css"

const AboutView = () => {
  return (
    <section id="about" className="about section">
      <SectionHeader title="About Me" subtitle="Intro" />
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

export default AboutView
