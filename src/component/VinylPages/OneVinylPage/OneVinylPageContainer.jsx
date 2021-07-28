import React from "react";
import axios from "axios";
import OneVinylPage from "./OneVinylPage";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {refreshOneVinyl} from "../../../redux/one-vinyl-reducer";

class OneVinylPageContainer extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get(`http://localhost:8080/oneVinyl/${id}`).then(response => {
      this.props.refreshOneVinyl(
        response.data.firstVinyl,
        response.data.discogsLink,
        response.data.vinylOffersList,
        response.data.vinylsByArtist)
    });
  }

  loadOneVinyl = (id) => {
    axios.get(`https://json-exchange-implementation.herokuapp.com/oneVinyl/${id}`)
      .then(response => {
        this.props.refreshOneVinyl(
          response.data.firstVinyl,
          response.data.discogsLink,
          response.data.vinylOffersList,
          response.data.vinylsByArtist)
      });
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

export default connect(mapStateToProps, {refreshOneVinyl})(withRouter(OneVinylPageContainer));