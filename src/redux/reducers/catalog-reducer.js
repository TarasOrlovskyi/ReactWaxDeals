import {vinylApi} from "../../api/api";
import * as actionTypes from "../actions/actionTypes";

// const UPDATE_VINYLS_LIST_ON_CATALOG_PAGE = 'UPDATE_VINYLS_LIST_ON_CATALOG_PAGE';

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

// export const refreshVinylList = (vinyls) => {
//   return {
//     type: UPDATE_VINYLS_LIST_ON_CATALOG_PAGE,
//     vinyls
//   }
// }
//
// export const getVinylsCatalog = () => {
//   return (dispatch) => {
//     vinylApi.getVinylsResponse()
//       .then(vinylList => {
//         dispatch(refreshVinylList(vinylList.data));
//       });
//   }
// }

export default catalogReducer;