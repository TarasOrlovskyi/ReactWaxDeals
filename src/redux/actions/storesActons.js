import * as actionTypes from './actionTypes';
import {storesApi} from "../../api/api";
import {returnUnhandledRejection} from "../../utils/handleErrors/handleErrors";

export const refreshStores = (stores) => (
  {
    type: actionTypes.UPDATE_STORES_ON_STORES_PAGE,
    stores
  }
);

export const getStores = () => async dispatch => {
  try {
    let responseData = await storesApi.getStoresResponse();
    dispatch(refreshStores(responseData.data));
  } catch (error) {
    return returnUnhandledRejection(error.response.status);
  }
}