import * as actionTypes from "../actions/actionTypes";
import {setVinylAsWantListItem} from "../../utils/actionUtils/actionUtils";

let initialAfterSearchPage = {
  vinyls: []
}

const afterSearchReducer = (state = initialAfterSearchPage, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_VINYLS_ON_AFTER_SEARCH_PAGE:
      return {
        ...state,
        vinyls: action.vinyls
      }
    case actionTypes.SET_IS_VINYL_IN_WANTLIST:
      return {
        ...state,
        vinyls: setVinylAsWantListItem(state.vinyls, action.vinylId, action.isWantListItem)
        // vinyls: state.vinyls.map(vinyl => {
        //   if (vinyl.id === action.vinylId) {
        //     return {...vinyl, isWantListItem: action.isWantListItem}
        //   }
        //   return vinyl;
        // })
      }
    default:
      return state;
  }
}

export default afterSearchReducer;