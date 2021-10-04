import React from "react";
import {connect} from "react-redux";
import Stores from "./Stores";
import {compose} from "redux";
import {getStores} from "../../redux/actions/storesActons";
import {withRouter} from "react-router-dom";
import Preloader from "../Common/Preloader/Preloader";

class StoresContainer extends React.Component {
  componentDidMount() {
    this.props.getStores(this.props.history.push);
  }

  render() {
    if (this.props.isWaitResponse) {
      return <Preloader/>
    }
    return <Stores
        stores={this.props.stores}
    />
  }
}

let mapStateToProps = (state) => (
    {
      stores: state.storesPage.stores,
      isWaitResponse: state.preloader.isWaitResponse
    }
)

export default compose(withRouter, connect(mapStateToProps, {getStores}))(StoresContainer);