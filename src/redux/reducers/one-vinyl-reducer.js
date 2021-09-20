import * as actionTypes from "../actions/actionTypes";
import {setFirstVinylAsWantListItem, setVinylAsWantListItem} from "../../utils/actionUtils/actionUtils";

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
    case actionTypes.SET_IS_VINYL_IN_WANTLIST:
      return {
        ...state,
        vinylsByArtist: setVinylAsWantListItem(state.vinylsByArtist, action.vinylId, action.isWantListItem),
        firstVinyl: setFirstVinylAsWantListItem(state.firstVinyl, action.vinylId, action.isWantListItem)
      }
    default:
      return state;
  }
}

export default oneVinylReducer;