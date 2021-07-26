import SearchField from "./SearchField";
import {updateSearchField} from "../../redux/search-field-reducer";
import {connect} from "react-redux";
import axios from "axios";
import React from "react";
import {refreshSearchVinyls} from "../../redux/after-search-reducer";

class SearchFieldContainer extends React.Component {
  loadSearchResult = (searchQuery) => {
    axios.get(`http://localhost:8080/search?matcher=` + searchQuery)
      .then(searchResult => {
        this.props.refreshSearchVinyls(searchResult.data)
      })
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

export default connect(mapStateToProps, {updateSearchField, refreshSearchVinyls})(SearchFieldContainer);