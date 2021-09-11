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
    // case actionTypes.SET_IS_VINYL_BY_ARTIST_IN_WANTLIST:
    //   return {
    //     ...state,
    //     vinylsByArtist: state.vinylsByArtist.map(vinyl => {
    //       if (vinyl.id === action.vinylId) {
    //         return {...vinyl, isWantListItem: action.isWantListItem}
    //       }
    //       return vinyl;
    //     })
    //   }
      case actionTypes.SET_IS_VINYL_IN_WANTLIST:
      return {
        ...state,
        vinylsByArtist: setVinylAsWantListItem(state.vinylsByArtist, action.vinylId, action.isWantListItem),
        // vinylsByArtist: state.vinylsByArtist.map(vinyl => {
        //   if (vinyl.id === action.vinylId) {
        //     return {...vinyl, isWantListItem: action.isWantListItem}
        //   }
        //   return vinyl;
        // }),
        firstVinyl: (vinylId = action.vinylId, isWantListItem = action.isWantListItem) => {
          if (state.firstVinyl.id === vinylId){
            return {...state.firstVinyl, isWantListItem: isWantListItem}
          }
          return state.firstVinyl;
        }
      }
    // case actionTypes.SET_IS_FIRST_VINYL_IN_WANTLIST:
    //   return {
    //     ...state,
    //     firstVinyl: {...state.firstVinyl, isWantListItem: action.isWantListItem}
    //   }
    default:
      return state;
  }
}

export default oneVinylReducer;