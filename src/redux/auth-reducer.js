import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

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
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export const setAuthUserData = (id, email, discogsUserName, role, status, isAuth) => ({
  type: SET_USER_DATA,
  payload: {id, email, discogsUserName, role, status, isAuth}
})

export const getUserAuthData = () => (dispatch) => {
  return authApi.checkAuth()
    .then(responseData => {
      debugger;
        if (responseData.data.resultCode === "0") {
          let {id, email, discogsUserName, role, status} = responseData.data.user;
          dispatch(setAuthUserData(id, email, discogsUserName, role, status, true));
        } else {
          localStorage.removeItem("token");
          dispatch(setAuthUserData(null, null, null, null, false, false));
        }
      }
    )
}

export const getUserLogOutData = () => {
  return (dispatch) => {
    let responseData = authApi.userLogOut();
    if (responseData.data.resultCode === "0") {
      localStorage.removeItem("token");
      dispatch(setAuthUserData(null, null, null, null, false));
    }
  }
}

export const getUserLogInData = (email, password) => (dispatch) => {
  return authApi.userLogIn(email, password)
    .then(responseData => {
      if (responseData.data.resultCode === "0") {
        localStorage.setItem("token", responseData.data.token);
        let {id, email, discogsUserName, role, status} = responseData.data.user;
        dispatch(setAuthUserData(id, email, discogsUserName, role, status, true));
      } else {
        let errorMessage = responseData.data.message.length > 0 ? responseData.data.message : "ERROR";
        dispatch(stopSubmit('signInForm', {_error: errorMessage}));
      }
    })
}


export default authReducer;