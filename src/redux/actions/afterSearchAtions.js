import * as actionTypes from './actionTypes';
import {vinylApi} from "../../api/api";
import {unhandledError} from "../../utils/handleErrors/handleErrors";

export const refreshSearchVinyls = (vinyls) => (
  {
    type: actionTypes.UPDATE_VINYLS_ON_AFTER_SEARCH_PAGE,
    vinyls
  }
)

export const getSearchResult = (searchQuery, historyPush) => async dispatch => {
  try {
    let responseData = await vinylApi.getAfterSearchResponse(searchQuery);
    dispatch(refreshSearchVinyls(responseData.data));
  } catch (error) {
    unhandledError(error.response.status, "search result", historyPush);
  }
}