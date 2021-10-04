import * as actionTypes from './actionTypes';
import {authApi} from "../../api/api";
import {stopSubmit} from "redux-form";
import {handleFormsError, unhandledError} from "../../utils/handleErrors/handleErrors";
import {activateInfoAlert} from "./alertActions";
import {setIsWaitResponse} from "./preloaderActions";

export const setRecoveryData = (recoveryToken, isRecoveryTokenValid) => ({
  type: actionTypes.SET_RECOVERY_DATA,
  recoveryToken,
  isRecoveryTokenValid
});

export const resetRecoveryDataAfterChangePassword = () => ({
  type: actionTypes.RESET_RECOVERY_DATA
});

export const checkRecoveryToken = (recoveryToken, historyPush) => async dispatch => {
  dispatch(setIsWaitResponse(true));
  try {
    let responseData = await authApi.checkRecoveryTokenRequest(recoveryToken)
    if (responseData.status === 200) {
      dispatch(setRecoveryData(recoveryToken, true));
    }
    dispatch(setIsWaitResponse(false));
  } catch (error) {
    dispatch(setIsWaitResponse(false));
    let errorStatus = error.response.status;
    if (errorStatus !== 403) {
      unhandledError(errorStatus, "check recovery token", historyPush);
    }
  }
}

export const changeRecoveryPassword = (newPassword, confirmNewPassword, recoveryToken, historyPush) => async dispatch => {
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
        unhandledError(errorStatus, "change recovery password", historyPush);
      }
    }
  }
}