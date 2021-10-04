import {connect} from "react-redux";
import Catalog from "./Catalog";
import React from "react";
import {compose} from "redux";
import {getVinylsCatalog} from "../../../redux/actions/catalogActions";
import {withRouter} from "react-router-dom";
import EmptyListPage from "../EmptyListPage/EmptyListPage";
import Preloader from "../../Common/Preloader/Preloader";

class CatalogRequestContainer extends React.Component {

  componentDidMount() {
    this.props.getVinylsCatalog(this.props.history.push);
  }

  render() {

    if (this.props.isWaitResponse) {
      return <Preloader/>
    }

    if (this.props.vinylList.length === 0) {
      return <EmptyListPage/>
    }
    return <Catalog vinylList={this.props.vinylList} isAuth={this.props.isAuth}/>
  }
}

let mapStateToProps = (state) => {
  return {
    vinylList: state.catalogPage.vinyls,
    isAuth: state.auth.isAuth,
    isWaitResponse: state.preloader.isWaitResponse
  }
};

export default compose(withRouter, connect(mapStateToProps, {getVinylsCatalog}))(CatalogRequestContainer);