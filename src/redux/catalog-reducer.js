const UPDATE_VINYLS_LIST = 'UPDATE_VINYLS_LIST';

let initialCatalogState = {
  vinyls: []
};

const catalogReducer = (state = initialCatalogState, action) => {
  switch (action.type) {
    case UPDATE_VINYLS_LIST:
      return {
        ...state,
        vinyls: [...state.vinyls, ...action.vinyls]
      }
    default:
      return state;
  }
}

export const catalogActionCreator = (vinyls) => {
  return {
    type: UPDATE_VINYLS_LIST,
    vinyls
  }
}
export default catalogReducer;