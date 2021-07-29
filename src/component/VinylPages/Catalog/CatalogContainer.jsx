import {connect} from "react-redux";
import Catalog from "./Catalog";
import {getVinylsCatalog} from "../../../redux/catalog-reducer";
import React from "react";
import {compose} from "redux";

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