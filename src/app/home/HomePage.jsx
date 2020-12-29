import React from "react"

import Profile from "app/home/Profile"

import "app/home/home-page.css"

const HomePage = () => {
  return (
    <section className="home">
      <div className="home__container bd-grid">
        <Profile />
      </div>
    </section>
  )
}

export default HomePage
