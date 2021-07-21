import React from "react";
import axios from "axios";
import {refreshStores} from "../../redux/stores-reducer";
import {connect} from "react-redux";
import Stores from "./Stores";

class StoresContainer extends React.Component {
  componentDidMount() {
    axios.get(`http://localhost:8080/stores`)
      .then(stores => {
        this.props.refreshStores(stores.data)
      });
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

export default connect(mapStateToProps, {refreshStores})(StoresContainer)