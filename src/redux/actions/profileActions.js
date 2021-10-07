import {setIsWaitResponse} from "./preloaderActions";
import {authApi} from "../../api/api";
import {activateInfoAlert} from "./alertActions";
import {logOut} from "../../utils/actionUtils/actionUtils";
import {handleFormsError, unhandledError} from "../../utils/handleErrors/handleErrors";
import store from "../redux";
import {setAuthUserData} from "./authActions";
import * as actionTypes from "./actionTypes";

export const setEditProfileData = (email, discogsUserName) => ({
  type: actionTypes.SET_EDIT_PROFILE_DATA,
  email,
  discogsUserName
})

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