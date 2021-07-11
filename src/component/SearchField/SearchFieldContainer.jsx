import SearchField from "./SearchField";
import {searchFieldActionCreator} from "../../redux/search-field-reducer";

const SearchFieldContainer = (props) => {
  let state = props.store.getState()
  let updateSearchField = (searchText) => {
    props.store.dispatch(searchFieldActionCreator(searchText));
  }
  return (
    <SearchField
      updateSearchField={updateSearchField}
      searchFieldValue={state.searchField.searchFieldValue}
    />
  );
};

export default SearchFieldContainer;