import React from "react"
import { Link } from "react-router-dom"

import "app/header/header.css"

const NavListItem = ({ to, title, active = false }) => {
  return (
    <li className="nav__item">
      <Link to={to} className={`nav__link ${active && "active"}`}>
        {title}
      </Link>
    </li>
  )
}

export default NavListItem
