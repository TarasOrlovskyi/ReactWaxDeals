import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {compose} from "redux";
import {getUserLogOutData} from "../../redux/actions/authActions";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import {withRouter} from "react-router-dom";

class HeaderContainer extends React.Component {

  logOut = () => {
    this.props.getUserLogOutData();
  }

  render() {
    if (this.props.isMobile){
      return <HeaderMobile/>
    }
    return <Header {...this.props} logOut={this.logOut}/>
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  isMobile: state.mobileVersion.isMobile
})

export default compose(withRouter, connect(mapStateToProps, {getUserLogOutData}))(HeaderContainer)