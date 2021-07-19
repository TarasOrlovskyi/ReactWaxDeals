import SearchField from "./SearchField";
import {updateSearchField} from "../../redux/search-field-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    searchFieldValue: state.searchField.searchFieldValue
  };
};

export default connect(mapStateToProps, {updateSearchField})(SearchField);