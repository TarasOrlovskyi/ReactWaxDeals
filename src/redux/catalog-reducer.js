const UPDATE_VINYLS_LIST_ON_CATALOG_PAGE = 'UPDATE_VINYLS_LIST_ON_CATALOG_PAGE';

let initialCatalogState = {
  vinyls: []
};

const catalogReducer = (state = initialCatalogState, action) => {
  switch (action.type) {
    case UPDATE_VINYLS_LIST_ON_CATALOG_PAGE:
      return {
        ...state,
        vinyls: action.vinyls
      }
    default:
      return state;
  }
}

export const refreshVinylList = (vinyls) => {
  return {
    type: UPDATE_VINYLS_LIST_ON_CATALOG_PAGE,
    vinyls
  }
}
export default catalogReducer;