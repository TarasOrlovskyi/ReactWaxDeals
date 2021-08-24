import * as actionTypes from './actionTypes';
import {authApi} from "../../api/api";
import {reset, stopSubmit} from "redux-form";
import {handleFormsError, handleHttpError, returnUnhandledRejection} from "../../utils/handleErrors/handleErrors";
import {activateInfoAlert} from "./alertActions";

// export const setIsRecoveryMailSent = (isRecoveryMailSent) => ({
//   type: actionTypes.SET_IS_RECOVERY_MAIL_SENT,
//   isRecoveryMailSent
// });

export const sendRecoveryPasswordMail = (email, historyPush) => async dispatch => {
  try {
    let responseData = await authApi.sendRecoveryPasswordRequest(email)
    if (responseData.status === 200) {
      // dispatch(setIsRecoveryMailSent(true));
      dispatch(activateInfoAlert(true, "RecoveryPassword"));
      dispatch(reset('recoveryPasswordForm'));
    }
  } catch (error){
    let errorStatus = error.response.status;
    if (errorStatus === 404 || errorStatus === 500){
      handleHttpError(errorStatus, historyPush)
    } else if(errorStatus === 403){
      handleFormsError("recoveryPasswordForm", dispatch, error.response.data.message);
    } else {
      return returnUnhandledRejection(errorStatus);
    }
  }
}