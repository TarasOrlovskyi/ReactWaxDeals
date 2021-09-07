import * as actionTypes from "../actions/actionTypes";

let initialAfterSearchPage = {
  vinyls: null
}

const afterSearchReducer = (state = initialAfterSearchPage, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_VINYLS_ON_AFTER_SEARCH_PAGE:
      return {
        ...state,
        vinyls: action.vinyls
      }
    default:
      return state;
  }
}

export default afterSearchReducer;