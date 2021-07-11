import SearchField from "./SearchField";
import {searchFieldActionCreator} from "../../redux/search-field-reducer";

const SearchFieldContainer = (props) => {
  let updateSearchField = (searchText) => {
    props.dispatch(searchFieldActionCreator(searchText));
  }
  return (
    <SearchField
      updateSearchField={updateSearchField}
      searchFieldValue={props.state.searchFieldValue}
    />
  );
};

export default SearchFieldContainer;