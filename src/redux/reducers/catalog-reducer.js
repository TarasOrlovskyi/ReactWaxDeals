import * as actionTypes from "../actions/actionTypes";

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
    default:
      return state;
  }
}

export default catalogReducer;