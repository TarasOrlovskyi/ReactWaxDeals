import React from "react";
import WantListStar from "./WantListStar";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {switchVinylInWantList} from "../../../redux/actions/catalogActions";

class WantListStarContainer extends React.Component{

  switchStarToTrue = () => {
    this.props.switchVinylInWantList(true, this.props.vinylId, this.props.history.push);
  }

  switchStarToFalse = () => {
    this.props.switchVinylInWantList(false, this.props.vinylId, this.props.history.push);
  }

  render() {
    return(
        <WantListStar isWantListItem={this.props.isWantListItem}
                      switchStarToTrue={this.switchStarToTrue}
                      switchStarToFalse={this.switchStarToFalse}
                      vinylType={this.props.vinylType}
        />
    );
  }
}

export default compose(withRouter, connect(null, {switchVinylInWantList}))(WantListStarContainer)