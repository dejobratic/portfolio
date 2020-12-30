import React from "react"

import SectionHeader from "app/components/section-header/SectionHeader"
import Service from "app/services/Service"

import "app/services/services-page.css"

const ServicesPage = () => {
  return (
    <section className="services section" id="services">
      <div className="services__container bd-grid">
        <SectionHeader title="My Services" subtitle="What I Offer" />

        <Service
          type="code"
          title="Web Design"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            quod, voluptas illo, amet quibusdam eum similique voluptatem saepe
            voluptatum soluta voluptates quis sequi. Vero adipisci distinctio
            velit necessitatibus, est quibusdam."
        />

        <Service
          type="pen"
          title="Graphic Design"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            quod, voluptas illo, amet quibusdam eum similique voluptatem saepe
            voluptatum soluta voluptates quis sequi. Vero adipisci distinctio
            velit necessitatibus, est quibusdam."
        />

        <Service
          type="brush"
          title="UI/UX"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            quod, voluptas illo, amet quibusdam eum similique voluptatem saepe
            voluptatum soluta voluptates quis sequi. Vero adipisci distinctio
            velit necessitatibus, est quibusdam."
        />

        <Service
          type="server"
          title="Backend"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            quod, voluptas illo, amet quibusdam eum similique voluptatem saepe
            voluptatum soluta voluptates quis sequi. Vero adipisci distinctio
            velit necessitatibus, est quibusdam."
        />
      </div>
    </section>
  )
}

export default ServicesPage
