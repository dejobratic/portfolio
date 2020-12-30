import React from "react"

import SectionHeader from "app/components/section-header/SectionHeader"
import Service from "app/views/services/Service"

import "app/views/services/services-view.css"

const ServicesView = () => {
  return (
    <section className="services section" id="services">
      <SectionHeader title="My Services" subtitle="What I Offer" />
      <div className="services__container bd-grid">
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

export default ServicesView
