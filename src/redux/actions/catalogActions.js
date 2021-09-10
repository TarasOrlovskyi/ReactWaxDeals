import * as actionTypes from './actionTypes';
import {vinylApi} from "../../api/api";
import {unhandledError} from "../../utils/handleErrors/handleErrors";
import {logOut} from "../../utils/actionUtils/actionUtils";
import {setAuthUserData} from "./authActions";
import store from "../redux";

export const refreshVinylList = (vinyls) => {
  return {
    type: actionTypes.UPDATE_VINYLS_LIST_ON_CATALOG_PAGE,
    vinyls
  }
}

export const setVinylInWantList = (isVinylInWantlist, vinylId) => ({
  type: actionTypes.SET_IS_VINYL_IN_WANTLIST,
  isVinylInWantlist,
  vinylId
})

export const setVinylByArtistInWantList = (isVinylInWantlist, vinylId) => ({
  type: actionTypes.SET_IS_VINYL_BY_ARTIST_IN_WANTLIST,
  isVinylInWantlist,
  vinylId
})

export const setFirstVinylInWantList = (isVinylInWantlist) => ({
  type: actionTypes.SET_IS_FIRST_VINYL_IN_WANTLIST,
  isVinylInWantlist
})

const setVinylStart = (vinylType, dispatch, isVinylInWantlist, vinylId) => {
  if (vinylType === "vinyls"){
    dispatch(setVinylInWantList(isVinylInWantlist, vinylId));
  } else if(vinylType === "vinylsByArtist"){
    dispatch(setVinylByArtistInWantList(isVinylInWantlist, vinylId));
  } else if(vinylType === "firstVinyl"){
    dispatch(setFirstVinylInWantList(isVinylInWantlist));
  }
}

export const getVinylsCatalog = (historyPush) => async dispatch => {
  try {
    let isAuth = store.getState().auth.isAuth;
    let responseData;
    if (!isAuth) {
      responseData = await vinylApi.getVinylsResponse();
    } else {
      responseData = await vinylApi.getWantListResponse();
    }
    debugger
    dispatch(refreshVinylList(responseData.data));
  } catch (error) {
    let errorStatus = error.response.status;
    if (errorStatus === 403 || errorStatus === 401) {
      logOut(dispatch, setAuthUserData)
    } else {
      unhandledError(error.response.status, "get catalog", historyPush);
    }
  }
}

export const switchVinylInWantList = (isVinylInWantlist, vinylId, vinylType, historyPush) => async dispatch => {
  try {
    setVinylStart(vinylType, dispatch, isVinylInWantlist, vinylId);
    let responseData = await vinylApi.switchVinylInWantList(vinylId)
    if (responseData.status !== 200) {
      setVinylStart(vinylType, dispatch, !isVinylInWantlist, vinylId);
    }
  } catch (error) {
    setVinylStart(vinylType, dispatch, !isVinylInWantlist, vinylId);
    let errorStatus = error.response.status;
    if (errorStatus === 403 || errorStatus === 401) {
      logOut(dispatch, setAuthUserData)
    } else {
      unhandledError(error.response.status, "switch vinyl in wantlist", historyPush);
    }
  }
}