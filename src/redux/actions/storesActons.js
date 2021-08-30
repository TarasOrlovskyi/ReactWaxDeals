import * as actionTypes from './actionTypes';
import {storesApi} from "../../api/api";
import {unhandledError} from "../../utils/handleErrors/handleErrors";

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
    unhandledError(error.response.status, "registration", historyPush);
  }
}