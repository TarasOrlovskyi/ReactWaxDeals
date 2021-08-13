import SearchField from "./SearchField";
import {updateSearchField} from "../../redux/search-field-reducer";
import {connect} from "react-redux";
import React from "react";
import {getSearchResult} from "../../redux/after-search-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class SearchFieldContainer extends React.Component {

  componentDidMount() {
    const search = this.props.location.search;
    const searchQuery = new URLSearchParams(search).get("matcher");
    this.props.getSearchResult(searchQuery);
  }

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

export default compose(withRouter, connect(mapStateToProps, {updateSearchField, getSearchResult}))(SearchFieldContainer);