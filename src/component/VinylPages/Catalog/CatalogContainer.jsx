import {connect} from "react-redux";
import Catalog from "./Catalog";
import React from "react";
import {compose} from "redux";
import {getVinylsCatalog, setVinylFilter} from "../../../redux/actions/catalogActions";
import {withRouter} from "react-router-dom";
import EmptyListPage from "../EmptyListPage/EmptyListPage";
import Preloader from "../../Common/Preloader/Preloader";
import {getInStockVinyls, getAllVinyls} from "../../../redux/selectors/vinylSelector";

class CatalogRequestContainer extends React.Component {

  componentDidMount() {
    this.props.getVinylsCatalog(this.props.history.push);
  }

  setVinylFilter = (vinylFilter) => {
    this.props.setVinylFilter(vinylFilter)
  }

  render() {

    if (this.props.isWaitResponse) {
      return <Preloader/>
    }

    if (this.props.vinylList.length === 0) {
      return <EmptyListPage/>
    }
    return <Catalog vinylList={this.props.vinylList}
                    isAuth={this.props.isAuth}
                    vinylListWithOffers={this.props.vinylListWithOffers}
                    setVinylFilter={this.setVinylFilter}
                    vinylFilter={this.props.vinylFilter}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    vinylList: getAllVinyls(state),
    vinylListWithOffers: getInStockVinyls(state),
    isAuth: state.auth.isAuth,
    isWaitResponse: state.preloader.isWaitResponse,
    vinylFilter: state.catalogPage.vinylFilter
  }
};

export default compose(withRouter, connect(mapStateToProps, {
  getVinylsCatalog,
  setVinylFilter
}))(CatalogRequestContainer);