import * as actionTypes from './actionTypes';
import {vinylApi} from "../../api/api";
import {unhandledError} from "../../utils/handleErrors/handleErrors";
import {logOut} from "../../utils/actionUtils/actionUtils";
import {setAuthUserData} from "./authActions";

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
    let errorStatus = error.response.status;
    if (errorStatus === 403 || errorStatus === 401) {
      logOut(dispatch, setAuthUserData)
    } else{
      unhandledError(error.response.status, "search result", historyPush);
    }
  }
}