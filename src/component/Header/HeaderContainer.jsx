import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {compose} from "redux";
import {getUserLogOutData} from "../../redux/actions/authActions";
import {withRouter} from "react-router-dom";
import {setHeaderForRender, setIsBurgerActivate} from "../../redux/actions/mobileActions";
import {setIsAuthedUserWindow} from "../../redux/actions/registrationSignsActions";

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.checkHeader()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.checkHeader()
  }

  logOut = () => {
    this.props.getUserLogOutData();
  }

  activateBurger = () => {
    this.props.setIsBurgerActivate(true);
  }

  turnOffBurger = () => {
    this.props.setIsBurgerActivate(false);
  }

  checkHeader = () => {
    let path = this.props.location.pathname;
    if (path.includes("/oneVinyl")) {
      this.props.setHeaderForRender("oneVinylHeader")
    } else if (path === "/") {
      this.props.setHeaderForRender("homeHeader")
    } else if (path.includes("/signUp")
        || path.includes("/profile")
        || path.includes("/new-password")
        || path.includes("/edit-profile")
        || path.includes("/recovery-password")
        || path.includes("/change-password")
        || path.includes("/signIn")) {
      this.props.setHeaderForRender("registrationHeader")
    } else {
      this.props.setHeaderForRender("headerWithLogo")
    }
  }

  switchAuthedUserWindow = () => {
    this.props.setIsAuthedUserWindow(!this.props.isAuthedUserWindow)
  }

  render() {
    return <Header isAuth={this.props.isAuth}
                   logOut={this.logOut}
                   headerForRender={this.props.headerForRender}
                   isBurgerActivate={this.props.isBurgerActivate}
                   activateBurger={this.activateBurger}
                   turnOffBurger={this.turnOffBurger}
                   isAuthedUserWindow={this.props.isAuthedUserWindow}
                   switchAuthedUserWindow={this.switchAuthedUserWindow}
    />
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  headerForRender: state.mobileVersion.headerForRender,
  isBurgerActivate: state.mobileVersion.isBurgerActivate,
  isAuthedUserWindow: state.authedUserWindows.isAuthedUserWindow
})

export default compose(withRouter, connect(
    mapStateToProps,
    {getUserLogOutData, setHeaderForRender, setIsBurgerActivate, setIsAuthedUserWindow}))(HeaderContainer)