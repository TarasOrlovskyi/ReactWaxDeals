import {reset, stopSubmit} from "redux-form";
import {authApi} from "../../api/api";
import {handleFormsError, unhandledError} from "../../utils/handleErrors/handleErrors";
import {setAuthUserData} from "./authActions";
import {logOut} from "../../utils/actionUtils/actionUtils";
import {setIsWaitResponse} from "./preloaderActions";
import {activateInfoAlert} from "./alertActions";

export const changePassword = (oldPassword, newPassword, confirmNewPassword, historyPush) => async dispatch => {
  if (newPassword !== confirmNewPassword) {
    dispatch(stopSubmit('changePasswordForm', {_error: 'New Password and Confirm Password must match!'}));
  } else {
    dispatch(setIsWaitResponse(true));
    try {
      let responseData = await authApi.changePasswordRequest(oldPassword, newPassword, confirmNewPassword);
      if (responseData.status === 200) {
        dispatch(activateInfoAlert(true, "ChangePassword"));
        // dispatch(setIsPasswordChanged(true));
        dispatch(reset('changePasswordForm'));
        logOut(dispatch, setAuthUserData)
      }
      dispatch(setIsWaitResponse(false));
    } catch (error) {
      dispatch(setIsWaitResponse(false));
      let errorStatus = error.response.status;
      if (errorStatus === 403 || errorStatus === 401) {
        logOut(dispatch, setAuthUserData)
      } else if (errorStatus === 400) {
        handleFormsError("changePasswordForm", dispatch, error.response.data.message);
      } else {
        unhandledError(errorStatus, "change password", historyPush);
      }
    }
  }
}