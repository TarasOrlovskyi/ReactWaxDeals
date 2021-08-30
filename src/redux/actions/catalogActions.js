import * as actionTypes from './actionTypes';
import {vinylApi} from "../../api/api";
import {unhandledError} from "../../utils/handleErrors/handleErrors";

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
    unhandledError(error.response.status, "get catalog", historyPush);
  }
}