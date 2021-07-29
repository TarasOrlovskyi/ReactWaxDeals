import SearchField from "./SearchField";
import {updateSearchField} from "../../redux/search-field-reducer";
import {connect} from "react-redux";
import React from "react";
import {getSearchResult} from "../../redux/after-search-reducer";
import {compose} from "redux";

class SearchFieldContainer extends React.Component {
  loadSearchResult = (searchQuery) => {
    this.props.getSearchResult(searchQuery);
  }

  render() {
    return <SearchField
      searchFieldValue={this.props.searchFieldValue}
      updateSearchField={this.props.updateSearchField}
      loadSearchResult={this.loadSearchResult}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    searchFieldValue: state.searchField.searchFieldValue
  };
};

export default compose(connect(mapStateToProps, {updateSearchField, getSearchResult}))(SearchFieldContainer);