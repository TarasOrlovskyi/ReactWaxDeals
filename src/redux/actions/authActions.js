import * as actionTypes from './actionTypes';
import {authApi} from "../../api/api";
import store from "../redux";
import {handleFormsError, returnUnhandledRejection} from "../../utils/handleErrors/handleErrors";
import {activateInfoAlert} from "./alertActions";

export const setAuthUserData = (id, email, discogsUserName, role, status, isAuth) => ({
  type: actionTypes.SET_USER_DATA,
  payload: {id, email, discogsUserName, role, status, isAuth}
})

export const setIsWaitResponse = (isWaitResponse) => ({
  type: actionTypes.SET_IS_WAIT_RESPONSE,
  isWaitResponse
})

export const setEditProfileData = (email, discogsUserName) => ({
  type: actionTypes.SET_EDIT_PROFILE_DATA,
  email,
  discogsUserName
})

export const getUserAuthData = () => async dispatch => {
  if (localStorage.token == null) {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }
  try {
    let responseData = await authApi.checkAuth();
    if (responseData.status === 200) {
      let {id, email, discogsUserName, role, status} = responseData.data.user;
      dispatch(setAuthUserData(id, email, discogsUserName, role, status, true));
    }
  } catch (error) {
    localStorage.removeItem("token");
    dispatch(setAuthUserData(null, null, null, null, false, false));
  }
}

export const getUserLogOutData = () => async dispatch => {
  try {
    await authApi.userLogOut()
    localStorage.removeItem("token");
    dispatch(setAuthUserData(null, null, null, null, false, false));
  } catch (error) {
    let errorStatus = error.response.status;
    if (errorStatus === 403) {
      localStorage.removeItem("token");
      dispatch(setAuthUserData(null, null, null, null, false, false));
    } else {
      return returnUnhandledRejection(errorStatus);
    }
  }
}

export const getUserLogInData = (email, password) => async dispatch => {
  try {
    let responseData = await authApi.userLogIn(email, password)
    if (responseData.data.token) {
      localStorage.setItem("token", responseData.data.token);
      let {id, email, discogsUserName, role, status} = responseData.data.user;
      dispatch(setAuthUserData(id, email, discogsUserName, role, status, true));
    }
  } catch (error) {
    let errorStatus = error.response.status;
    if (errorStatus === 400) {
      handleFormsError("signInForm", dispatch, error.response.data.message);
    } else {
      return returnUnhandledRejection(errorStatus);
    }
  }
}

export const editUserProfile = (email, discogsUserName) => async dispatch => {
  dispatch(setIsWaitResponse(true));
  try {
    let responseData = await authApi.editProfileRequest(email, discogsUserName);
    if (responseData.status === 200) {
      dispatch(setEditProfileData(email, discogsUserName));
      dispatch(activateInfoAlert(true, "EditProfile"));
    }
  } catch (error) {
    let errorStatus = error.response.status;
    dispatch(setIsWaitResponse(false));
    if (errorStatus === 403 || errorStatus === 401) {
      localStorage.removeItem("token");
      dispatch(setAuthUserData(null, null, null, null, false, false));
    } else if (errorStatus === 400) {
      handleFormsError("editProfileForm", dispatch, error.response.data.message);
    } else {
      return returnUnhandledRejection(errorStatus);
    }
  }
}

export const deleteUserProfile = () => async dispatch => {
  dispatch(setIsWaitResponse(true));
  try {
    let userId = store.getState().auth.id;
    let responseData = await authApi.deleteProfileRequest(userId);
    if (responseData.status === 200) {
      localStorage.removeItem("token");
      dispatch(setAuthUserData(null, null, null, null, false, false));
      // dispatch(setIsProfileDeleted(true));
      dispatch(activateInfoAlert(true, "ProfileDeleted"));
      dispatch(setIsWaitResponse(false));
    }
  } catch (error) {
    let errorStatus = error.response.status;
    dispatch(setIsWaitResponse(false));
    if (errorStatus === 403 || errorStatus === 401) {
      localStorage.removeItem("token");
      dispatch(setAuthUserData(null, null, null, null, false, false));
    } else if (errorStatus === 400) {
      handleFormsError("editProfileForm", dispatch, error.response.data.message);
    } else {
      return returnUnhandledRejection(errorStatus);
    }
  }
}

export const confirmEmail = (confirmToken) => async dispatch => {
  dispatch(setIsWaitResponse(true));
  try {
    let responseData = await authApi.confirmEmailRequest(confirmToken)
    if (responseData.status === 200) {
      dispatch(activateInfoAlert(true, "ConfirmEmail"));
    }
  } catch (error) {
    if (error.response.status === 403) {
      dispatch(setIsWaitResponse(false));
    } else {
      dispatch(setIsWaitResponse(false));
      return returnUnhandledRejection(error.response.status);
    }
  }
}