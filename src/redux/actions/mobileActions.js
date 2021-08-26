import * as actionTypes from "./actionTypes";

export const setIsMobile = (isMobile) => ({
  type: actionTypes.SET_IS_MOBILE,
  isMobile
})

export const setIsHeaderBackButton = (isHeaderBackButton) => ({
  type: actionTypes.SET_IS_HEADER_BACK_BUTTON,
  isHeaderBackButton
})