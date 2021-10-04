import React from "react";
import OneVinylPage from "./OneVinylPage";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getOneVinyl} from "../../../redux/actions/oneVinylActions";
import Preloader from "../../Common/Preloader/Preloader";

class OneVinylPageContainer extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getOneVinyl(id, this.props.history.push);
  }

  loadOneVinyl = (id) => {
    this.props.getOneVinyl(id, this.props.history.push);
  }

  render() {

    if (this.props.isWaitResponse) {
      return <Preloader/>
    }

    return <OneVinylPage
        firstVinyl={this.props.oneVinylState.firstVinyl}
        discogsLink={this.props.oneVinylState.discogsLink}
        vinylOffersList={this.props.oneVinylState.vinylOffersList}
        vinylsByArtist={this.props.oneVinylState.vinylsByArtist}
        loadOneVinyl={this.loadOneVinyl}
        isAuth={this.props.isAuth}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    oneVinylState: state.oneVinylPage,
    isAuth: state.auth.isAuth,
    isWaitResponse: state.preloader.isWaitResponse
  }
}

export default compose(withRouter, connect(mapStateToProps, {getOneVinyl}), withRouter)(OneVinylPageContainer);