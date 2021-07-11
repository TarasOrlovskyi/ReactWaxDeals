const UPDATE_SEARCH_FIELD = 'UPDATE_SEARCH_FIELD';

let initialSearchFieldState = {
  searchFieldValue: ''
}

const searchFieldReducer = (state = initialSearchFieldState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_FIELD:
      state.searchFieldValue = action.searchFieldText;
      return state;
    default:
      return state;
  }
};

export const searchFieldActionCreator = (text) => (
  {
    type: UPDATE_SEARCH_FIELD,
    searchFieldText: text
  }
);

export default searchFieldReducer;