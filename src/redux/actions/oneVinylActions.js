import * as actionTypes from './actionTypes';
import {vinylApi} from "../../api/api";
import {handleHttpError, unhandledError} from "../../utils/handleErrors/handleErrors";
import {logOut} from "../../utils/actionUtils/actionUtils";
import {setAuthUserData} from "./authActions";

export const refreshOneVinyl = (firstVinyl, discogsLink, vinylOffersList, vinylsByArtist) => {
  return {
    type: actionTypes.UPDATE_ONE_VINYL_PAGE,
    firstVinyl,
    discogsLink,
    vinylOffersList,
    vinylsByArtist
  }
}

export const getOneVinyl = (vinylId, historyPush) => async dispatch => {
  try {
    let responseData = await vinylApi.getOneVinylResponse(vinylId);
    dispatch(refreshOneVinyl(
      responseData.data.mainVinyl,
      responseData.data.discogsLink,
      responseData.data.offersList,
      responseData.data.vinylsByArtistList))
  } catch (error) {
    let errorStatus = error.response.status;
    if (errorStatus === 404 || errorStatus === 500) {
      handleHttpError(errorStatus, historyPush)
    } else if (errorStatus === 403 || errorStatus === 401) {
      logOut(dispatch, setAuthUserData)
    } else {
      unhandledError(errorStatus, "get one vinyl", historyPush);
    }
  }
}