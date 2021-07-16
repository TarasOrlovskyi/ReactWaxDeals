import {connect} from "react-redux";
import Catalog from "./Catalog";
import {catalogActionCreator} from "../../../redux/catalog-reducer";

let mapStateToProps = (state) => {
  return {
    vinylList: state.catalogPage.vinyls
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    refreshVinylList: (vinyls) => {
      dispatch(catalogActionCreator(vinyls))
    }
  }
};

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;