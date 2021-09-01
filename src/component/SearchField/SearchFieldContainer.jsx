import SearchField from "./SearchField";
import {connect} from "react-redux";
import React from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {updateSearchField} from "../../redux/actions/searchFieldActions";
import {getSearchResult} from "../../redux/actions/afterSearchAtions";

class SearchFieldContainer extends React.Component {

  componentDidMount() {
    const search = this.props.location.search;
    const searchQuery = new URLSearchParams(search).get("matcher");
    if (searchQuery) {
      this.props.getSearchResult(searchQuery, this.props.history.push);
    }
  }

  loadSearchResult = (searchQuery) => {
    this.props.getSearchResult(searchQuery, this.props.history.push);
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

export default compose(withRouter, connect(mapStateToProps, {
  updateSearchField,
  getSearchResult
}))(SearchFieldContainer);