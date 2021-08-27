import * as actionTypes from "../actions/actionTypes";

let initialChangePasswordState = {
  isPasswordChanged: false
};

const changePasswordReducer = (state = initialChangePasswordState, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_PASSWORD_CHANGED:
      return {
        ...state,
        isPasswordChanged: action.isPasswordChanged
      }
    default:
      return state;
  }
};

export default changePasswordReducer;