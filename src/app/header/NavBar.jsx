import React, { useContext } from "react"
import { Link } from "react-router-dom"

import NavMenu from "app/header/NavMenu"

import { AppContext } from "app/context/AppContext"
import { showMenu } from "app/context/app.actions"

const NavBar = () => {
  const { dispatch } = useContext(AppContext)

  return (
    <nav className="nav bd-right">
      <div className="nav__toggle" onClick={() => dispatch(showMenu())}>
        <i className="bx bx-menu"></i>
      </div>

      <div>
        <Link to="/">Dejan</Link>
      </div>

      <NavMenu />
    </nav>
  )
}

export default NavBar
