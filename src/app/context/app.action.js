export const appAction = {
  SHOW_MENU: "SHOW_MENU",
  HIDE_MENU: "HIDE_MENU",
}

export const showMenu = () => ({
  type: appAction.SHOW_MENU,
})

export const hideMenu = () => ({
  type: appAction.HIDE_MENU,
})
