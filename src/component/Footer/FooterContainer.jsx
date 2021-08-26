import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import FooterMobile from "./FooterMobile/FooterMobile";
import Footer from "./Footer";

class FooterContainer extends React.Component {
  render() {
    if (this.props.isMobile) {
      return (
        <FooterMobile isMobile={this.props.isMobile}/>
      );
    }
    return (
      <Footer isMobile={this.props.isMobile}/>
    );
  }
}

let mapStateToProps = (state) => ({
  isMobile: state.mobileVersion.isMobile
})

export default compose(connect(mapStateToProps, {}))(FooterContainer)