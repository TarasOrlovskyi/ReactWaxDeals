import * as actionTypes from "../actions/actionTypes";

let initialAuthedUserWindowState = {
  isAuthedUserWindow: false
}

const authedUserWindowsReducer = (state = initialAuthedUserWindowState, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_AUTHED_USER_WINDOW:
      return {
        ...state,
        isAuthedUserWindow: action.isAuthedUserWindow
      }
    default:
      return state
  }
}

export default authedUserWindowsReducer;