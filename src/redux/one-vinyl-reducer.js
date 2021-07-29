import {vinylApi} from "../api/api";

const UPDATE_ONE_VINYL_PAGE = 'UPDATE_ONE_VINYL_PAGE';

let initialOneVinylState = {
  firstVinyl: {},
  discogsLink: '',
  vinylOffersList: [],
  vinylsByArtist: []
}

const oneVinylReducer = (state = initialOneVinylState, action) => {
  switch (action.type) {
    case UPDATE_ONE_VINYL_PAGE:
      return{
        ...state,
        firstVinyl: action.firstVinyl,
        discogsLink: action.discogsLink,
        vinylOffersList: action.vinylOffersList,
        vinylsByArtist: action.vinylsByArtist
      }
    default:
      return state;
  }
}

export const refreshOneVinyl = (firstVinyl, discogsLink, vinylOffersList, vinylsByArtist) => {
  return {
    type: UPDATE_ONE_VINYL_PAGE,
    firstVinyl,
    discogsLink,
    vinylOffersList,
    vinylsByArtist
  }
}

export const getOneVinyl = (vinylId) => {
  return (dispatch) => {
    vinylApi.getOneVinylResponse(vinylId)
      .then(response => {
        dispatch(refreshOneVinyl(
          response.data.mainVinyl,
          response.data.discogsLink,
          response.data.offersList,
          response.data.vinylsByArtistList)
        )});
  }
}

export default oneVinylReducer;