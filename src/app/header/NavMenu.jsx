import React, { useContext } from "react"

import NavMenuItem from "app/header/NavMenuItem"

import { AppContext } from "app/context/AppContext"
import { hideMenu } from "app/context/app.actions"

const NavMenu = () => {
  const {
    state: { menuVisible },
    dispatch,
  } = useContext(AppContext)

  return (
    <div className={`nav__menu ${menuVisible && "show"}`}>
      <div className="nav__close" onClick={() => dispatch(hideMenu())}>
        <i className="bx bx-x"></i>
      </div>

      <ul className="nav__list">
        <NavMenuItem to="home" title="Home" />
        <NavMenuItem to="about" title="About" />
        <NavMenuItem to="skills" title="Skills" />
        <NavMenuItem to="education" title="Education" />
        <NavMenuItem to="services" title="Services" />
        <NavMenuItem to="new-project" title="New Project" />
        <NavMenuItem to="contact" title="Contact Me" />
      </ul>
    </div>
  )
}

export default NavMenu
