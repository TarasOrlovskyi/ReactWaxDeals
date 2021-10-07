import {setIsWaitResponse} from "./preloaderActions";
import {authApi} from "../../api/api";
import {activateInfoAlert} from "./alertActions";
import {unhandledError} from "../../utils/handleErrors/handleErrors";

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