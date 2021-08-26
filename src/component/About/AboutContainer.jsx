import About from "./About/About";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import AboutMobile from "./AboutMobile/AboutMobile";

class AboutContainer extends React.Component{
  render() {
    if (this.props.isMobile){
      return(
        <AboutMobile/>
      );
    }
    return(
      <About/>
    );
  }
}

let mapStateToProps = (state) => ({
  isMobile: state.mobileVersion.isMobile
})

export default compose(connect(mapStateToProps, {}))(AboutContainer)