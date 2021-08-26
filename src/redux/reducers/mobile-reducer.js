import * as actionTypes from "../actions/actionTypes";

let initialMobileState = {
  isMobile: false,
  isHeaderBackButton: false
};

const mobileReducer = (state = initialMobileState, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_MOBILE:
      return {
        ...state,
        isMobile: action.isMobile
      }
      case actionTypes.SET_IS_HEADER_BACK_BUTTON:
      return {
        ...state,
        isHeaderBackButton: action.isHeaderBackButton
      }
    default:
      return state;
  }
}

export default mobileReducer;