import * as actionTypes from "../actions/actionTypes";

let initialAuthUserData = {
  id: null,
  email: null,
  discogsUserName: null,
  role: null,
  status: false,
  isAuth: false
}

const authReducer = (state = initialAuthUserData, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    case actionTypes.SET_EDIT_PROFILE_DATA:
      return {
        ...state,
        email: action.email,
        discogsUserName: action.discogsUserName
      }
    default:
      return state;
  }
}

export default authReducer;