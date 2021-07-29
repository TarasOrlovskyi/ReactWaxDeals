import React from "react";
import OneVinylPage from "./OneVinylPage";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getOneVinyl} from "../../../redux/one-vinyl-reducer";
import {compose} from "redux";

class OneVinylPageContainer extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getOneVinyl(id);
  }

  loadOneVinyl = (id) => {
    this.props.getOneVinyl(id);
  }

  render() {
    return <OneVinylPage
      firstVinyl={this.props.oneVinylState.firstVinyl}
      discogsLink={this.props.oneVinylState.discogsLink}
      vinylOffersList={this.props.oneVinylState.vinylOffersList}
      vinylsByArtist={this.props.oneVinylState.vinylsByArtist}
      loadOneVinyl={this.loadOneVinyl}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    oneVinylState: state.oneVinylPage
  }
}

export default compose(connect(mapStateToProps, {getOneVinyl}), withRouter)(OneVinylPageContainer);