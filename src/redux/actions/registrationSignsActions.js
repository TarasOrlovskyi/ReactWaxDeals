import {SET_IS_AUTHED_USER_WINDOW} from "./actionTypes";

export const setIsAuthedUserWindow = (isAuthedUserWindow) => ({
  type: SET_IS_AUTHED_USER_WINDOW,
  isAuthedUserWindow: isAuthedUserWindow
})