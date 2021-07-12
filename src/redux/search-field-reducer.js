const UPDATE_SEARCH_FIELD = 'UPDATE_SEARCH_FIELD';

let initialSearchFieldState = {
  searchFieldValue: ''
}

const searchFieldReducer = (state = initialSearchFieldState, action) => {
  let stateCopy = {...state};
  switch (action.type) {
    case UPDATE_SEARCH_FIELD:
      stateCopy.searchFieldValue = action.searchFieldText;
      return stateCopy;
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