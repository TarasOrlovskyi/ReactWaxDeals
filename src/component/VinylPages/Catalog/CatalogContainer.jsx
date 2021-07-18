import {connect} from "react-redux";
import Catalog from "./Catalog";
import {refreshVinylList} from "../../../redux/catalog-reducer";
import React from "react";
import * as axios from "axios";

class CatalogRequestContainer extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:8080/catalog').then(vinylList => {
      this.props.refreshVinylList(vinylList.data);
    });
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

const CatalogContainer = connect(mapStateToProps, {refreshVinylList})(CatalogRequestContainer);

export default CatalogContainer;