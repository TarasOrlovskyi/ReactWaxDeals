import * as actionTypes from './actionTypes';
import {authApi} from "../../api/api";
import {stopSubmit} from "redux-form";
import {handleFormsError, returnUnhandledRejection} from "../../utils/handleErrors/handleErrors";
import {activateInfoAlert} from "./alertActions";

export const setIsWaitRecoveryResponse = (isWaitRecoveryResponse) => ({
  type: actionTypes.SET_IS_WAIT_RECOVERY_RESPONSE,
  isWaitRecoveryResponse
});

export const setRecoveryData = (recoveryToken, isRecoveryTokenValid) => ({
  type: actionTypes.SET_RECOVERY_DATA,
  recoveryToken,
  isRecoveryTokenValid
});

export const resetRecoveryDataAfterChangePassword = () => ({
  type: actionTypes.RESET_RECOVERY_DATA
});

export const checkRecoveryToken = (recoveryToken) => async dispatch => {
  dispatch(setIsWaitRecoveryResponse(true));
  try {
    let responseData = await authApi.checkRecoveryTokenRequest(recoveryToken)
    if (responseData.status === 200) {
      dispatch(setRecoveryData(recoveryToken, true));
    }
  } catch (error) {
    if (error.response.status === 403) {
      dispatch(setIsWaitRecoveryResponse(false));
    } else {
      dispatch(setIsWaitRecoveryResponse(false));
      return returnUnhandledRejection(error.response.status);
    }
  }
}

export const changeRecoveryPassword = (newPassword, confirmNewPassword, recoveryToken) => async dispatch => {
  if (newPassword !== confirmNewPassword) {
    dispatch(stopSubmit('newPasswordForm', {_error: 'Password and Confirm Password must match!'}));
  } else {
    try {
      let responseData = await authApi.changeRecoveryPasswordRequest(newPassword, confirmNewPassword, recoveryToken)
      if (responseData.status === 200) {
        dispatch(resetRecoveryDataAfterChangePassword());
        dispatch(activateInfoAlert(true, "NewPasswordUpdated"));
      }
    } catch (error) {
      let errorStatus = error.response.status;
      if (errorStatus === 403 || errorStatus === 400) {
        handleFormsError("newPasswordForm", dispatch, error.response.data.message);
      } else {
        return returnUnhandledRejection(errorStatus);
      }
    }
  }
}