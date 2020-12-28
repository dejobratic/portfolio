import React from "react"

import NavListItem from "app/header/NavListItem"

import "app/header/header.css"

const NavList = () => {
  return (
    <ul className="nav__list">
      <NavListItem to="/" title="Home" active />
      <NavListItem to="#about" title="About" />
      <NavListItem to="#skills" title="Skills" />
      <NavListItem to="#services" title="Services" />
      <NavListItem to="#works" title="Works" />
      <NavListItem to="#contact" title="Contact Me" />
    </ul>
  )
}

export default NavList
