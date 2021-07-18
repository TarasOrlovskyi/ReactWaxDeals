import SearchField from "./SearchField";
import {updateSearchField} from "../../redux/search-field-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return{
    searchFieldValue: state.searchField.searchFieldValue
  };
};

const SearchFieldContainer = connect(mapStateToProps, {updateSearchField})(SearchField);

export default SearchFieldContainer;