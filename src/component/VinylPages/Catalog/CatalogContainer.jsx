import {connect} from "react-redux";
import Catalog from "./Catalog";
import React from "react";
import {compose} from "redux";
import {getVinylsCatalog} from "../../../redux/actions/catalogActions";

class CatalogRequestContainer extends React.Component {

  componentDidMount() {
    this.props.getVinylsCatalog();
  }

  render() {
    return <Catalog vinylList={this.props.vinylList}/>
  }
}

let mapStateToProps = (state) => {
  return {
    vinylList: state.catalogPage.vinyls
  }
};

export default compose(connect(mapStateToProps, {getVinylsCatalog}))(CatalogRequestContainer);