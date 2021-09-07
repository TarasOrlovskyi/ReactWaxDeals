import * as actionTypes from './actionTypes';
import {vinylApi} from "../../api/api";
import {unhandledError} from "../../utils/handleErrors/handleErrors";
import {logOut} from "../../utils/actionUtils/actionUtils";
import {setAuthUserData} from "./authActions";

export const refreshVinylList = (vinyls) => {
  return {
    type: actionTypes.UPDATE_VINYLS_LIST_ON_CATALOG_PAGE,
    vinyls
  }
}

export const getVinylsCatalog = (historyPush) => async dispatch => {
  try {
    let responseData = await vinylApi.getVinylsResponse();
    dispatch(refreshVinylList(responseData.data));
  } catch (error) {
    let errorStatus = error.response.status;
    if (errorStatus === 403 || errorStatus === 401) {
      logOut(dispatch, setAuthUserData)
    } else{
      unhandledError(error.response.status, "get catalog", historyPush);
    }
  }
}