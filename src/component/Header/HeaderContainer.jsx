import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {compose} from "redux";
import {getUserLogOutData} from "../../redux/actions/authActions";
import {withRouter} from "react-router-dom";
import {
  setHeaderForRender
} from "../../redux/actions/mobileActions";

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

  render() {
    return <Header isAuth={this.props.isAuth}
                   logOut={this.logOut}
                   headerForRender={this.props.headerForRender}
    />
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  headerForRender: state.mobileVersion.headerForRender
})

export default compose(withRouter, connect(
  mapStateToProps,
  {getUserLogOutData, setHeaderForRender}))(HeaderContainer)