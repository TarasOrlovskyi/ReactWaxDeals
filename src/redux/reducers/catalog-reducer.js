import * as actionTypes from "../actions/actionTypes";

let initialCatalogState = {
  vinyls: null
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
        vinyls: state.vinyls.map(vinyl => {
          if (vinyl.id === action.vinylId){
            return {...vinyl, isVinylInWantlist: action.isVinylInWantlist}
          }
          return vinyl;
        })
      }
    default:
      return state;
  }
}

export default catalogReducer;