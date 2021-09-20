import {vinylApi} from "../../api/api";
import {handleHttpError, unhandledError} from "../../utils/handleErrors/handleErrors";
import {logOut} from "../../utils/actionUtils/actionUtils";
import {setAuthUserData} from "./authActions";
import {activateInfoAlert} from "./alertActions";

export const getDiscogsWantlist = (historyPush) => async dispatch => {
  try {
    let responseData = await vinylApi.getDiscogsWantlistRequest();
    if (responseData.status === 200) {
      dispatch(activateInfoAlert(true, "DiscogsWantlist"));
    }
  } catch (error) {
    let errorStatus = error.response.status;
    if (errorStatus === 404 || errorStatus === 500) {
      handleHttpError(errorStatus, historyPush)
    } else if (errorStatus === 403 || errorStatus === 401) {
      logOut(dispatch, setAuthUserData)
    } else {
      unhandledError(errorStatus, "contact us", historyPush);
    }
  }
}