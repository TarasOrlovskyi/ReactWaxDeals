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

export default afterSearchReducer;