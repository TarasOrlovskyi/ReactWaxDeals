import * as actionTypes from './actionTypes';
import {vinylApi} from "../../api/api";
import {returnUnhandledRejection} from "../../utils/handleErrors/handleErrors";

export const refreshVinylList = (vinyls) => {
  return {
    type: actionTypes.UPDATE_VINYLS_LIST_ON_CATALOG_PAGE,
    vinyls
  }
}

export const getVinylsCatalog = () => async dispatch => {
  try {
    let responseData = await vinylApi.getVinylsResponse();
    dispatch(refreshVinylList(responseData.data));
  } catch (error) {
    return returnUnhandledRejection(error.response.status);
  }
}