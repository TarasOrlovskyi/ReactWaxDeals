import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";
import store from './redux';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_IS_WAIT_RESPONSE = 'SET_IS_WAIT_RESPONSE';
const SET_IS_MAIL_CONFIRM = 'SET_IS_MAIL_CONFIRM';
const SET_EDIT_PROFILE_DATA = 'SET_EDIT_PROFILE_DATA';
const SET_IS_PROFILE_EDITED = 'SET_IS_PROFILE_EDITED';
const SET_IS_PROFILE_DELETED = 'SET_IS_PROFILE_DELETED';

let initialAuthUserData = {
  id: null,
  email: null,
  discogsUserName: null,
  role: null,
  status: false,
  isAuth: false,
  isWaitResponse: true,
  isMailConfirm: false,
  isProfileEdited: false,
  isProfileDeleted: false
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
    case SET_EDIT_PROFILE_DATA:
      return {
        ...state,
        email: action.email,
        discogsUserName: action.discogsUserName,
        isProfileEdited: true
      }
    case SET_IS_PROFILE_EDITED:
      return {
        ...state,
        isProfileEdited: action.isProfileEdited
      }
      case SET_IS_PROFILE_DELETED:
      return {
        ...state,
        isProfileDeleted: action.isProfileDeleted
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

export const setEditProfileData = (email, discogsUserName) => ({
  type: SET_EDIT_PROFILE_DATA,
  email,
  discogsUserName
})

export const setIsProfileEdited = (isProfileEdited) => ({
  type: SET_IS_PROFILE_EDITED,
  isProfileEdited
})

export const setIsProfileDeleted = (isProfileDeleted) => ({
  type: SET_IS_PROFILE_DELETED,
  isProfileDeleted
})

export const getUserAuthData = () => (dispatch) => {
  if (localStorage.token == null) {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }
  return authApi.checkAuth()
    .then(responseData => {
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

export const editUserProfile = (email, discogsUserName) => dispatch => {
  dispatch(setIsWaitResponse(true));
  let responseData = authApi.editProfileRequest(email, discogsUserName);
  if (responseData.data.resultCode === "0") {
    dispatch(setEditProfileData(email, discogsUserName));
  }
  dispatch(setIsWaitResponse(false));
}

export const deleteUserProfile = () => dispatch => {
  dispatch(setIsWaitResponse(true));
  let userId = store.getState().auth.id;
  let responseData = authApi.deleteProfileRequest(userId);
  if (responseData.data.resultCode === "0") {
    localStorage.removeItem("token");
    dispatch(setAuthUserData(null, null, null, null, false, false));
    dispatch(setIsProfileDeleted(true));
  }
  dispatch(setIsWaitResponse(false));
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
   * if confirm response from back with a user and token
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