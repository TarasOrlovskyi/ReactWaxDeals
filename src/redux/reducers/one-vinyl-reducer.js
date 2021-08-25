import * as actionTypes from "../actions/actionTypes";

let initialOneVinylState = {
  firstVinyl: {},
  discogsLink: '',
  vinylOffersList: [],
  vinylsByArtist: []
}

const oneVinylReducer = (state = initialOneVinylState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_ONE_VINYL_PAGE:
      return {
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

export default oneVinylReducer;