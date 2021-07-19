const UPDATE_SEARCH_FIELD = 'UPDATE_SEARCH_FIELD';

let initialSearchFieldState = {
  searchFieldValue: ''
}

const searchFieldReducer = (state = initialSearchFieldState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_FIELD:
      return {
        ...state,
        searchFieldValue: action.searchFieldText
      }
    default:
      return state;
  }
};

export const updateSearchField = (searchFieldText) => (
  {
    type: UPDATE_SEARCH_FIELD,
    searchFieldText
  }
);

export default searchFieldReducer;