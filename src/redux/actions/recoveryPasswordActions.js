import {authApi} from "../../api/api";
import {reset} from "redux-form";
import {handleFormsError, handleHttpError, unhandledError} from "../../utils/handleErrors/handleErrors";
import {activateInfoAlert} from "./alertActions";

export const sendRecoveryPasswordMail = (email, historyPush) => async dispatch => {
  try {
    let responseData = await authApi.sendRecoveryPasswordRequest(email)
    if (responseData.status === 200) {
      dispatch(activateInfoAlert(true, "RecoveryPassword"));
      dispatch(reset('recoveryPasswordForm'));
    }
  } catch (error) {
    let errorStatus = error.response.status;
    if (errorStatus === 404 || errorStatus === 500) {
      handleHttpError(errorStatus, historyPush)
    } else if (errorStatus === 403) {
      handleFormsError("recoveryPasswordForm", dispatch, error.response.data.message);
    } else {
      unhandledError(errorStatus, "send recovery password mail", historyPush);
    }
  }
}