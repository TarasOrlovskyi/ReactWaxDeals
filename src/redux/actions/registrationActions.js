import {reset, stopSubmit} from "redux-form";
import {registrationApi} from "../../api/api";
import {handleFormsError, handleHttpError, unhandledError} from "../../utils/handleErrors/handleErrors";
import {activateInfoAlert} from "./alertActions";
import {setIsWaitResponse} from "./preloaderActions";

export const registerUser = (email, password, confirmPassword, discogsUserName, historyPush) => async dispatch => {
  if (password !== confirmPassword) {
    dispatch(stopSubmit('registrationForm', {_error: 'Password and Confirm Password must match!'}));
  } else {
    dispatch(setIsWaitResponse(true));
    try {
      let responseData = await registrationApi.registerUserRequest(email, password, confirmPassword, discogsUserName)
      if (responseData.status === 200) {
        dispatch(activateInfoAlert(true, "Registration"));
        dispatch(reset('registrationForm'));
      }
      dispatch(setIsWaitResponse(false));
    } catch (error) {
      dispatch(setIsWaitResponse(false));
      let errorStatus = error.response.status;
      if (errorStatus === 404 || errorStatus === 500) {
        handleHttpError(errorStatus, historyPush)
      } else if (errorStatus === 400) {
        handleFormsError("registrationForm", dispatch, error.response.data.message);
      } else {
        unhandledError(errorStatus, "registration", historyPush);
      }
    }
  }
}