import * as actionTypes from './actionTypes';
import {storesApi} from "../../api/api";
import {unhandledError} from "../../utils/handleErrors/handleErrors";
import {logOut} from "../../utils/actionUtils/actionUtils";
import {setAuthUserData} from "./authActions";

export const refreshStores = (stores) => (
  {
    type: actionTypes.UPDATE_STORES_ON_STORES_PAGE,
    stores
  }
);

export const getStores = (historyPush) => async dispatch => {
  try {
    let responseData = await storesApi.getStoresResponse();
    dispatch(refreshStores(responseData.data));
  } catch (error) {
    let errorStatus = error.response.status;
    if (errorStatus === 403 || errorStatus === 401) {
      logOut(dispatch, setAuthUserData)
    } else {
      unhandledError(error.response.status, "registration", historyPush);
    }
  }
}