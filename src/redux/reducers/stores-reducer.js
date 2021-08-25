import * as actionTypes from "../actions/actionTypes";

let initStoresState = {
  stores: []
}

const storesReducer = (state = initStoresState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_STORES_ON_STORES_PAGE:
      return {
        ...state,
        stores: action.stores
      }
    default:
      return state;
  }
}

export default storesReducer;