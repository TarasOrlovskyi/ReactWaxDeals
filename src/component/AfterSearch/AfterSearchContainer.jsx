import {connect} from "react-redux";
import React from "react";
import Catalog from "../VinylPages/Catalog/Catalog";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import EmptyPageAfterSearch from "./EmptyPageAfterSearch/EmptyPageAfterSearch";
import {getSearchResult} from "../../redux/actions/afterSearchAtions";

class AfterSearchContainer extends React.Component {

  componentDidMount() {
    const search = this.props.location.search;
    const searchQuery = new URLSearchParams(search).get("matcher");
    if (searchQuery) {
      this.props.getSearchResult(searchQuery, this.props.history.push);
    }
  }

  render() {
    if (this.props.vinyls === null){
      return <div>
        Loading...
      </div>
    }
    if (this.props.vinyls.length > 0) {
      return <Catalog vinylList={this.props.vinyls}/>
    }
    return <EmptyPageAfterSearch/>
  }
}

let mapStateToProps = (state) => (
  {
    vinyls: state.afterSearchPage.vinyls
  }
);

export default compose(withRouter, connect(mapStateToProps, {getSearchResult}), withRouter)(AfterSearchContainer);