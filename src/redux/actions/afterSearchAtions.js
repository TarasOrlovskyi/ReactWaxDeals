import * as actionTypes from './actionTypes';
import {vinylApi} from "../../api/api";
import {returnUnhandledRejection} from "../../utils/handleErrors/handleErrors";

export const refreshSearchVinyls = (vinyls) => (
  {
    type: actionTypes.UPDATE_VINYLS_ON_AFTER_SEARCH_PAGE,
    vinyls
  }
)

export const getSearchResult = (searchQuery) => async dispatch => {
  try {
    let responseData = await vinylApi.getAfterSearchResponse(searchQuery);
    dispatch(refreshSearchVinyls(responseData.data));
  } catch (error) {
    return returnUnhandledRejection(error.response.status);
  }
}