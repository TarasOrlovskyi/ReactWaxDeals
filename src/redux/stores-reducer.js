import {storesApi} from "../api/api";

const UPDATE_STORES_ON_STORES_PAGE = 'UPDATE_STORES_ON_STORES_PAGE';

let initStoresState = {
  stores: []
}

const storesReducer = (state = initStoresState, action) => {
  switch (action.type) {
    case UPDATE_STORES_ON_STORES_PAGE:
      return {
        ...state,
        stores: action.stores
      }
    default:
      return state;
  }
}

export const refreshStores = (stores) => (
  {
    type: UPDATE_STORES_ON_STORES_PAGE,
    stores
  }
);

export const getStores = () => {
  return (dispatch) => {
    storesApi.getStoresResponse()
      .then(stores => {
        dispatch(refreshStores(stores.data));
      });
  }
}

export default storesReducer;