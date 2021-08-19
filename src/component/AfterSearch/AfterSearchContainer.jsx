import {connect} from "react-redux";
import React from "react";
import Catalog from "../VinylPages/Catalog/Catalog";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import EmptyPageAfterSearch from "./EmptyPageAfterSearch/EmptyPageAfterSearch";

class AfterSearchContainer extends React.Component {

  render() {
    if (this.props.vinyls.length > 0){
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

export default compose(connect(mapStateToProps), withRouter)(AfterSearchContainer);