import SearchField from "./SearchField";
import {searchFieldActionCreator} from "../../redux/search-field-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return{
    searchFieldValue: state.searchField.searchFieldValue
  };
};

let mapDispatchToProps = (dispatch) => {
  return{
    updateSearchField: (searchText) => {
      dispatch(searchFieldActionCreator(searchText));
    }
  };
};

const SearchFieldContainer = connect(mapStateToProps, mapDispatchToProps)(SearchField);

export default SearchFieldContainer;