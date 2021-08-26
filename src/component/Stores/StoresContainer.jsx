import React from "react";
import {connect} from "react-redux";
import Stores from "./Stores";
import {compose} from "redux";
import {getStores} from "../../redux/actions/storesActons";

class StoresContainer extends React.Component {
  componentDidMount() {
    this.props.getStores();
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

export default compose(connect(mapStateToProps, {getStores}))(StoresContainer);