import {connect} from "react-redux";
import React from "react";
import Catalog from "../VinylPages/Catalog/Catalog";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class AfterSearchContainer extends React.Component {

  render() {
    return <Catalog vinylList={this.props.vinyls}/>
  }
}

let mapStateToProps = (state) => (
  {
    vinyls: state.afterSearchPage.vinyls
  }
);

export default compose(connect(mapStateToProps), withRouter)(AfterSearchContainer);