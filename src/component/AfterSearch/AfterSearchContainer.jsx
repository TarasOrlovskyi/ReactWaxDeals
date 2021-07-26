import axios from "axios";
import {connect} from "react-redux";
import React from "react";
import {refreshSearchVinyls} from "../../redux/after-search-reducer";
import Catalog from "../VinylPages/Catalog/Catalog";
import {withRouter} from "react-router-dom";

class AfterSearchContainer extends React.Component {
  componentDidMount() {
    const search = this.props.location.search;
    const searchQuery = new URLSearchParams(search).get('matcher');
    axios.get(`http://localhost:8080/search?matcher=` + searchQuery)
      .then(searchResult => {
        this.props.refreshSearchVinyls(searchResult.data)
      })
  }

  render() {
    return <Catalog vinylList={this.props.vinyls}/>
  }
}

let mapStateToProps = (state) => (
  {
    vinyls: state.afterSearchPage.vinyls
  }
);

export default connect(mapStateToProps,
  {refreshSearchVinyls})(withRouter(AfterSearchContainer));