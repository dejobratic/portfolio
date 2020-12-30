import React from "react"

import Profile from "app/views/home/Profile"

import "app/views/home/home-view.css"

const HomeView = () => {
  return (
    <section id="home" className="home section">
      <div className="home__container bd-grid">
        <Profile />
      </div>
    </section>
  )
}

export default HomeView
