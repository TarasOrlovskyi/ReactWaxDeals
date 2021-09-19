import * as actionTypes from "../actions/actionTypes";
import {setVinylAsWantListItem} from "../../utils/actionUtils/actionUtils";

let initialCatalogState = {
  vinyls: []
};

const catalogReducer = (state = initialCatalogState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_VINYLS_LIST_ON_CATALOG_PAGE:
      return {
        ...state,
        vinyls: action.vinyls
      }
    case actionTypes.SET_IS_VINYL_IN_WANTLIST:
      return {
        ...state,
        vinyls: setVinylAsWantListItem(state.vinyls, action.vinylId, action.isWantListItem)
      }
    case actionTypes.DELETE_VINYL_FROM_WANTLIST:
      return {
        ...state,
        vinyls: state.vinyls.filter(vinyl => vinyl.id !== action.vinylId)
      }
    default:
      return state;
  }
}

export default catalogReducer;