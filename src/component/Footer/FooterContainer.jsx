import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Footer from "./Footer";

class FooterContainer extends React.Component {
  render() {
    return (
      <Footer headerForRender={this.props.headerForRender}/>
    );
  }
}

let mapStateToProps = (state) => ({
  headerForRender: state.mobileVersion.headerForRender
})

export default compose(connect(mapStateToProps, {}))(FooterContainer)