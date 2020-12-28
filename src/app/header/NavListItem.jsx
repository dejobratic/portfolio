import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { AppContext } from "app/context/AppContext"
import { hideMenu } from "app/context/app.actions"

import "app/header/header.css"

const NavListItem = ({ to, title, active = false }) => {
  const { dispatch } = useContext(AppContext)

  return (
    <li className="nav__item">
      <Link
        to={to}
        className={`nav__link ${active && "active"}`}
        onClick={() => dispatch(hideMenu())}
      >
        {title}
      </Link>
    </li>
  )
}

export default NavListItem
