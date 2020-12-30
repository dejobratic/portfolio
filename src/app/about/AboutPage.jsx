import React from "react"

import SectionHeader from "app/components/section-header/SectionHeader"
import Details from "app/about/Details"
import ContactInfo from "app/about/ContactInfo"
import Experience from "app/about/Experience"

import "app/about/about-page.css"

const AboutPage = () => {
  return (
    <section id="about" className="about section">
      <div className="about__container bd-grid">
        <SectionHeader title="About Me" subtitle="Intro" />

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
