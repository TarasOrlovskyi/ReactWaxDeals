import * as actionTypes from "../actions/actionTypes";

let initialMobileState = {
  headerForRender: ""
};

const mobileReducer = (state = initialMobileState, action) => {
  switch (action.type) {
    case actionTypes.SET_HEADER_FOR_RENDER:
      return {
        ...state,
        headerForRender: action.headerForRender
      }
    default:
      return state;
  }
}

export default mobileReducer;