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
    case actionTypes.SET_IS_VINYL_BY_ARTIST_IN_WANTLIST:
      return {
        ...state,
        vinylsByArtist: state.vinylsByArtist.map(vinyl => {
          if (vinyl.id === action.vinylId) {
            return {...vinyl, isVinylInWantlist: action.isVinylInWantlist}
          }
          return vinyl;
        })
      }
    case actionTypes.SET_IS_FIRST_VINYL_IN_WANTLIST:
      return {
        ...state,
        firstVinyl: {...state.firstVinyl, isVinylInWantlist: action.isVinylInWantlist}
      }
    default:
      return state;
  }
}

export default oneVinylReducer;