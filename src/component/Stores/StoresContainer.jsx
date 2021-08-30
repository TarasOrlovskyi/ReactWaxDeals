import React from "react";
import {connect} from "react-redux";
import Stores from "./Stores";
import {compose} from "redux";
import {getStores} from "../../redux/actions/storesActons";
import {withRouter} from "react-router-dom";

class StoresContainer extends React.Component {
  componentDidMount() {
    this.props.getStores(this.props.history.push);
  }

  render() {
    if (this.props.isMobile){
      return <div>MOBILE</div>
    }
    return <Stores
      stores={this.props.stores}
    />
  }
}

let mapStateToProps = (state) => (
  {
    stores: state.storesPage.stores,
    isMobile: state.mobileVersion.isMobile
  }
)

export default compose(withRouter, connect(mapStateToProps, {getStores}))(StoresContainer);