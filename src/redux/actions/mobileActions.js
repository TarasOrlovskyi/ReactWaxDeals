import * as actionTypes from "./actionTypes";

export const setHeaderForRender = (headerForRender) => ({
  type: actionTypes.SET_HEADER_FOR_RENDER,
  headerForRender
})

export const setIsBurgerActivate = (isBurgerActivate) => ({
  type: actionTypes.SET_IS_BURGER_ACTIVATE,
  isBurgerActivate
})