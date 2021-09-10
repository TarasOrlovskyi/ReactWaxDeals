import React from "react";
import WantListStar from "./WantListStar";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {switchVinylInWantList} from "../../../redux/actions/catalogActions";

class WantListStarContainer extends React.Component{

  switchStarToTrue = () => {
    this.props.switchVinylInWantList(true, this.props.vinylId, this.props.vinylType, this.props.history.push);
  }

  switchStarToFalse = () => {
    this.props.switchVinylInWantList(false, this.props.vinylId, this.props.vinylType, this.props.history.push);
  }

  render() {
    return(
        <WantListStar isVinylInWantlist={this.props.isVinylInWantlist}
                      switchStarToTrue={this.switchStarToTrue}
                      switchStarToFalse={this.switchStarToFalse}
        />
    );
  }
}

export default compose(withRouter, connect(null, {switchVinylInWantList}))(WantListStarContainer)