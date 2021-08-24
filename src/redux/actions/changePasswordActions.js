import * as actionTypes from './actionTypes';
import {reset, stopSubmit} from "redux-form";
import {authApi} from "../../api/api";
import {handleFormsError, returnUnhandledRejection} from "../../utils/handleErrors/handleErrors";
import {setAuthUserData} from "./authActions";

export const setIsPasswordChanged = (isPasswordChanged) => ({
  type: actionTypes.SET_IS_PASSWORD_CHANGED,
  isPasswordChanged
})

export const changePassword = (oldPassword, newPassword, confirmNewPassword) => async dispatch => {
  if (newPassword !== confirmNewPassword){
    dispatch(stopSubmit('changePasswordForm', {_error: 'New Password and Confirm Password must match!'}));
  } else {
    try {
      let responseData = await authApi.changePasswordRequest(oldPassword, newPassword, confirmNewPassword);
      if (responseData.status === 200) {
        dispatch(setIsPasswordChanged(true));
        dispatch(reset('changePasswordForm'));
      }
    } catch (error){
      let errorStatus = error.response.status;
      if (errorStatus === 403 || errorStatus === 401) {
        localStorage.removeItem("token");
        dispatch(setAuthUserData(null, null, null, null, false, false));
      } else if (errorStatus === 400){
        handleFormsError("changePasswordForm", dispatch, error.response.data.message);
      } else {
        return returnUnhandledRejection(errorStatus);
      }
    }
  }
}