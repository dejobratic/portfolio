import React, { useContext } from "react"

import NavList from "app/header/NavList"

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

      <NavList />
    </div>
  )
}

export default NavMenu
