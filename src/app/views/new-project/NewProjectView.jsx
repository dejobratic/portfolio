import React from "react"
import { Link } from "react-scroll"

import "app/views/new-project/new-project-view.css"

const NewProjectView = () => {
  return (
    <section className="new-project section" id="new-project">
      <div className="new-project__container bd-grid">
        <div className="new-project__data">
          <h2 className="section-title new-project__title">
            You have a project in mind?
          </h2>
          <p className="new-project__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            iure impedit repellendus deserunt placeat unde perferendis quas et,
            aliquam eligendi! Inventore tempore laborum magnam illum, eos nam
            repudiandae facilis accusantium?
          </p>

          <Link to="contact" className="button button__light new-project__button">
            Contact Me
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1542652735873-fb2825bac6e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt=""
          className="new-project__img"
        />
      </div>
    </section>
  )
}

export default NewProjectView
