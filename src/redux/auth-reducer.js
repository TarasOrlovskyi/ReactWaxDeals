import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_IS_WAIT_RESPONSE = 'SET_IS_WAIT_RESPONSE';
const SET_IS_MAIL_CONFIRM = 'SET_IS_MAIL_CONFIRM';

let initialAuthUserData = {
  id: null,
  email: null,
  discogsUserName: null,
  role: null,
  status: false,
  isAuth: false,
  isWaitResponse: true,
  isMailConfirm: false
}

const authReducer = (state = initialAuthUserData, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    case SET_IS_WAIT_RESPONSE:
      return {
        ...state,
        isWaitResponse: action.isWaitResponse
      }
      case SET_IS_MAIL_CONFIRM:
      return {
        ...state,
        isMailConfirm: action.isMailConfirm
      }
    default:
      return state;
  }
}

export const setAuthUserData = (id, email, discogsUserName, role, status, isAuth) => ({
  type: SET_USER_DATA,
  payload: {id, email, discogsUserName, role, status, isAuth}
})

export const setIsWaitResponse = (isWaitResponse) => ({
  type: SET_IS_WAIT_RESPONSE,
  isWaitResponse
})

export const setIsMailConfirm = (isMailConfirm) => ({
  type: SET_IS_MAIL_CONFIRM,
  isMailConfirm
})

export const getUserAuthData = () => (dispatch) => {
  if (localStorage.token == null) {
    return new Promise((resolve, reject) => {resolve(true);});
  }
  return authApi.checkAuth()
    .then(responseData => {
      debugger
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

export const getUserLogOutData = () => (dispatch) => {
  return authApi.userLogOut()
    .then(responseData => {
        if (responseData.data.resultCode === "0") {
          localStorage.removeItem("token");
          dispatch(setAuthUserData(null, null, null, null, false, false));
        }
      }
    )
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

export const confirmEmail = (confirmToken) => dispatch => {
  dispatch(setIsWaitResponse(true));
  authApi.confirmEmailRequest(confirmToken)
    .then(responseData => {
      debugger
      if (responseData.data.resultCode === "0") {
        dispatch(setIsMailConfirm(true));
      }
      dispatch(setIsWaitResponse(false));
    })

  // dispatch(setIsWaitResponse(true));
  // let responseData = authApi.confirmEmailRequest(confirmToken);
  // if (responseData.data.resultCode === "0") {
  //   dispatch(setIsMailConfirm(true));
  // }
  // dispatch(setIsWaitResponse(false));
  /**
   * if confirm back a user and token
  //  * */
  // let responseData = authApi.confirmEmailRequest(confirmToken);
  // if (responseData.data.resultCode === "0") {
  //   localStorage.setItem("token", responseData.data.token);
  //   let {id, email, discogsUserName, role, status} = responseData.data.user;
  //   dispatch(setAuthUserData(id, email, discogsUserName, role, status, true));
  //   dispatch(setIsWaitResponse(false));
  // } else {
  //   dispatch(setIsWaitResponse(false));
  // }
  //---
  // return authApi.confirmEmailRequest(confirmToken)
  //   .then(responseData => {
  //     if (responseData.data.resultCode === "0"){
  //       localStorage.setItem("token", responseData.data.token);
  //       let {id, email, discogsUserName, role, status} = responseData.data.user;
  //       dispatch(setAuthUserData(id, email, discogsUserName, role, status, true));
  //     }
  //   })
}


export default authReducer;