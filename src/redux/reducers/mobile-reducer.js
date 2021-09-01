import * as actionTypes from "../actions/actionTypes";

let initialMobileState = {
  headerForRender: "",
  isBurgerActivate: false
};

const mobileReducer = (state = initialMobileState, action) => {
  switch (action.type) {
    case actionTypes.SET_HEADER_FOR_RENDER:
      return {
        ...state,
        headerForRender: action.headerForRender
      }
    case actionTypes.SET_IS_BURGER_ACTIVATE:
      return {
        ...state,
        isBurgerActivate: action.isBurgerActivate
      }
    default:
      return state;
  }
}

export default mobileReducer;