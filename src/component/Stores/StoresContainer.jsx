import React from "react";
import {getStores} from "../../redux/stores-reducer";
import {connect} from "react-redux";
import Stores from "./Stores";
import {compose} from "redux";

class StoresContainer extends React.Component {
  componentDidMount() {
    this.props.getStores();
  }

  render() {
    return <Stores
      stores={this.props.stores}
    />
  }
}

let mapStateToProps = (state) => (
  {
    stores: state.storesPage.stores
  }
)

export default compose(connect(mapStateToProps, {getStores}))(StoresContainer);