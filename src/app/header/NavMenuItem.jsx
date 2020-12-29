import React, { useContext } from "react"
import { Link } from "react-scroll"

import { AppContext } from "app/context/AppContext"
import { hideMenu } from "app/context/app.actions"

const NavMenuItem = ({ to, title, active = false }) => {
  const { dispatch } = useContext(AppContext)

  return (
    <li className="nav__item">
      <Link
        to={to}
        className={`nav__link ${active && "active"}`}
        onClick={() => dispatch(hideMenu())}
        spy
      >
        {title}
      </Link>
    </li>
  )
}

export default NavMenuItem
