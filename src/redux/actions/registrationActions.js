import {reset, stopSubmit} from "redux-form";
import {registrationApi} from "../../api/api";
import {handleFormsError, handleHttpError, returnUnhandledRejection} from "../../utils/handleErrors/handleErrors";
import {activateInfoAlert} from "./alertActions";

export const registerUser = (email, password, confirmPassword, discogsUserName, historyPush) => async dispatch => {
  if (password !== confirmPassword) {
    dispatch(stopSubmit('registrationForm', {_error: 'Password and Confirm Password must match!'}));
  } else {
    try {
      let responseData = await registrationApi.registerUserRequest(email, password, confirmPassword, discogsUserName)
      if (responseData.status === 200) {
        dispatch(activateInfoAlert(true, "Registration"));
        dispatch(reset('registrationForm'));
      }
    } catch (error) {
      let errorStatus = error.response.status;
      if (errorStatus === 404 || errorStatus === 500) {
        handleHttpError(errorStatus, historyPush)
      } else if (errorStatus === 400) {
        handleFormsError("registrationForm", dispatch, error.response.data.message);
      } else {
        return returnUnhandledRejection(errorStatus);
      }
    }
  }
}