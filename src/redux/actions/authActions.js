import * as actionTypes from './actionTypes';
import {authApi} from "../../api/api";
import {handleFormsError, unhandledError} from "../../utils/handleErrors/handleErrors";
import {expireCheckingRefreshToken, logOut} from "../../utils/actionUtils/actionUtils";
import {setIsWaitResponse} from "./preloaderActions";

export const setAuthUserData = (id, email, discogsUserName, role, status, isAuth) => ({
  type: actionTypes.SET_USER_DATA,
  payload: {id, email, discogsUserName, role, status, isAuth}
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
    if (googleTokenId != null) {
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