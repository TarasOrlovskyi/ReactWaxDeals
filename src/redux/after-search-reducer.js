import {vinylApi} from "../api/api";

const UPDATE_VINYLS_ON_AFTER_SEARCH_PAGE = 'UPDATE_VINYLS_ON_AFTER_SEARCH_PAGE';

let initialAfterSearchPage = {
  vinyls: []
}

const afterSearchReducer = (state = initialAfterSearchPage, action) => {
  switch (action.type) {
    case UPDATE_VINYLS_ON_AFTER_SEARCH_PAGE:
      return {
        ...state,
        vinyls: action.vinyls
      }
    default:
      return state;
  }
}

export const refreshSearchVinyls = (vinyls) => (
  {
    type: UPDATE_VINYLS_ON_AFTER_SEARCH_PAGE,
    vinyls
  }
)

export const getSearchResult = (searchQuery) => {
  return (dispatch) => {
    vinylApi.getAfterSearchResult(searchQuery)
      .then(searchResult => {
        dispatch(refreshSearchVinyls(searchResult.data));
      })
  }
}

export default afterSearchReducer;