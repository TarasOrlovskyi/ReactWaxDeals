import * as actionTypes from "../actions/actionTypes";
import {setVinylAsWantListItem} from "../../utils/actionUtils/actionUtils";

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
        firstVinyl: (vinylId = action.vinylId, isWantListItem = action.isWantListItem) => {
          if (state.firstVinyl.id === vinylId) {
            return {...state.firstVinyl, isWantListItem: isWantListItem}
          }
          return state.firstVinyl;
        }
      }
    default:
      return state;
  }
}

export default oneVinylReducer;