import { appAction } from "app/context/app.actions"

export const INITIAL_STATE = {
  menuVisible: false,
}

const appReducer = (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case appAction.SHOW_MENU:
      return { ...state, menuVisible: true }

    case appAction.HIDE_MENU:
      return { ...state, menuVisible: false }

    default:
      return state
  }
}

export default appReducer
