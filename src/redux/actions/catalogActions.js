import * as actionTypes from './actionTypes';
import {vinylApi} from "../../api/api";
import {handleHttpError, unhandledError} from "../../utils/handleErrors/handleErrors";
import {logOut} from "../../utils/actionUtils/actionUtils";
import {setAuthUserData} from "./authActions";
import store from "../redux";

export const refreshVinylList = (vinyls) => {
  return {
    type: actionTypes.UPDATE_VINYLS_LIST_ON_CATALOG_PAGE,
    vinyls
  }
}

export const setVinylInWantList = (isWantListItem, vinylId) => ({
  type: actionTypes.SET_IS_VINYL_IN_WANTLIST,
  isWantListItem,
  vinylId
})

export const deleteVinylFromWantList = (vinylId) => ({
  type: actionTypes.DELETE_VINYL_FROM_WANTLIST,
  vinylId
})

export const getVinylsCatalog = (historyPush) => async dispatch => {
  try {
    let isAuth = store.getState().auth.isAuth;
    let responseData;
    if (!isAuth) {
      responseData = await vinylApi.getVinylsResponse();
    } else {
      responseData = await vinylApi.getWantListResponse();
    }
    dispatch(refreshVinylList(responseData.data));
  } catch (error) {
    let errorStatus = error.response.status;
    if (errorStatus === 403 || errorStatus === 401) {
      logOut(dispatch, setAuthUserData)
    } else if (errorStatus === 404 || errorStatus === 500) {
      handleHttpError(errorStatus, historyPush)
    } else {
      unhandledError(error.response.status, "get catalog", historyPush);
    }
  }
}

export const switchVinylInWantList = (isWantListItem, vinylId, historyPush) => async dispatch => {
  try {
    dispatch(setVinylInWantList(isWantListItem, vinylId));
    let responseData = await vinylApi.switchVinylInWantList(vinylId)
    if (!isWantListItem && responseData.status === 200){
      dispatch(deleteVinylFromWantList(vinylId));
    } else if (responseData.status !== 200) {
      dispatch(setVinylInWantList(!isWantListItem, vinylId));
    }
  } catch (error) {
    dispatch(setVinylInWantList(!isWantListItem, vinylId));
    let errorStatus = error.response.status;
    if (errorStatus === 403 || errorStatus === 401) {
      logOut(dispatch, setAuthUserData)
    } else {
      unhandledError(error.response.status, "switch vinyl in wantlist", historyPush);
    }
  }
}