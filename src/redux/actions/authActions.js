import * as actionTypes from './actionTypes';
import {authApi} from "../../api/api";
import store from "../redux";
import {handleFormsError, unhandledError} from "../../utils/handleErrors/handleErrors";
import {activateInfoAlert} from "./alertActions";
import {expireCheckingRefreshToken, logOut} from "../../utils/actionUtils/actionUtils";
import {setIsWaitResponse} from "./preloaderActions";

export const setAuthUserData = (id, email, discogsUserName, role, status, isAuth) => ({
  type: actionTypes.SET_USER_DATA,
  payload: {id, email, discogsUserName, role, status, isAuth}
})

export const setEditProfileData = (email, discogsUserName) => ({
  type: actionTypes.SET_EDIT_PROFILE_DATA,
  email,
  discogsUserName
})

export const getUserAuthData = () => async dispatch => {
  let refreshToken = localStorage.refreshToken;
  if (refreshToken) {
    let isRefreshTokenExpire = expireCheckingRefreshToken(refreshToken);
    if (isRefreshTokenExpire) {
      logOut(dispatch, setAuthUserData);
      return new Promise((resolve, reject) => {
        resolve(true);
      });
    }
  }
  if (localStorage.token == null) {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }
  dispatch(setIsWaitResponse(true));
  try {
    let responseData = await authApi.checkAuth();
    if (responseData.status === 200) {
      let {id, email, discogsUserName, role, status} = responseData.data.user;
      dispatch(setAuthUserData(id, email, discogsUserName, role, status, true));
    } else {
      logOut(dispatch, setAuthUserData)
    }
    dispatch(setIsWaitResponse(false));
  } catch (error) {
    dispatch(setIsWaitResponse(false));
    console.log(`Crashed with ${error.response.status} code after logout`);
    logOut(dispatch, setAuthUserData)
  }
}

export const getUserLogOutData = () => async dispatch => {
  dispatch(setIsWaitResponse(true));
  try {
    await authApi.userLogOut()
    logOut(dispatch, setAuthUserData)
    dispatch(setIsWaitResponse(false));
  } catch (error) {
    dispatch(setIsWaitResponse(false));
    console.log(`Crashed with ${error.response.status} code after logout`);
    logOut(dispatch, setAuthUserData)
  }
}

export const getUserLogInData = (email, password, historyPush, googleTokenId = null) => async dispatch => {
  dispatch(setIsWaitResponse(true));
  try {
    let responseData;
    if (googleTokenId != null){
      responseData = await authApi.userGoogleLogIn(googleTokenId);
    } else {
      responseData = await authApi.userLogIn(email, password);
    }
    if (responseData.status === 200) {
      localStorage.setItem("token", responseData.data.jwtToken);
      localStorage.setItem("refreshToken", responseData.data.refreshToken);
      let {id, email, discogsUserName, role, status} = responseData.data.user;
      dispatch(setAuthUserData(id, email, discogsUserName, role, status, true));
    }
    dispatch(setIsWaitResponse(false));
  } catch (error) {
    dispatch(setIsWaitResponse(false));
    let errorStatus = error.response.status;
    if (errorStatus === 400) {
      handleFormsError("signInForm", dispatch, error.response.data.message);
    } else {
      unhandledError(errorStatus, "login", historyPush);
    }
  }
}

export const editUserProfile = (email, discogsUserName, historyPush) => async dispatch => {
  dispatch(setIsWaitResponse(true));
  try {
    let responseData = await authApi.editProfileRequest(email, discogsUserName);
    if (responseData.status === 200) {
      dispatch(setEditProfileData(email, discogsUserName));
      dispatch(activateInfoAlert(true, "EditProfile"));
    }
    dispatch(setIsWaitResponse(false));
  } catch (error) {
    let errorStatus = error.response.status;
    dispatch(setIsWaitResponse(false));
    if (errorStatus === 403 || errorStatus === 401) {
      logOut(dispatch, setAuthUserData)
    } else if (errorStatus === 400) {
      handleFormsError("editProfileForm", dispatch, error.response.data.message);
    } else {
      unhandledError(errorStatus, "edit profile", historyPush);
    }
  }
}

export const deleteUserProfile = (historyPush) => async dispatch => {
  dispatch(setIsWaitResponse(true));
  try {
    let userId = store.getState().auth.id;
    let responseData = await authApi.deleteProfileRequest(userId);
    if (responseData.status === 200) {
      logOut(dispatch, setAuthUserData)
      dispatch(activateInfoAlert(true, "ProfileDeleted"));
    }
    dispatch(setIsWaitResponse(false));
  } catch (error) {
    let errorStatus = error.response.status;
    dispatch(setIsWaitResponse(false));
    if (errorStatus === 403 || errorStatus === 401) {
      logOut(dispatch, setAuthUserData)
    } else if (errorStatus === 400) {
      handleFormsError("editProfileForm", dispatch, error.response.data.message);
    } else {
      unhandledError(errorStatus, "delete profile", historyPush);
    }
  }
}

export const confirmEmail = (confirmToken, historyPush) => async dispatch => {
  dispatch(setIsWaitResponse(true));
  try {
    let responseData = await authApi.confirmEmailRequest(confirmToken)
    if (responseData.status === 200) {
      dispatch(activateInfoAlert(true, "ConfirmEmail"));
    }
    dispatch(setIsWaitResponse(false));
  } catch (error) {
    let errorStatus = error.response.status;
    dispatch(setIsWaitResponse(false));
    if (errorStatus !== 403) {
      unhandledError(errorStatus, "confirmation email", historyPush);
    }
  }
}