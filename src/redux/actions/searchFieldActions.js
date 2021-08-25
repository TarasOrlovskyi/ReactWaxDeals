import * as actionTypes from './actionTypes';

export const updateSearchField = (searchFieldText) => (
  {
    type: actionTypes.UPDATE_SEARCH_FIELD,
    searchFieldText
  }
);