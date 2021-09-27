import SignIn from "./SignIn";
import {connect} from "react-redux";
import React from "react";
import {compose} from "redux";
import {getUserLogInData} from "../../../redux/actions/authActions";
import {activateInfoAlert} from "../../../redux/actions/alertActions";
import {Redirect, withRouter} from "react-router-dom";

class SignInContainer extends React.Component {

  turnOffAlert = () => {
    this.props.activateInfoAlert(false, "");
  }

  doLogIn = (formData) => {
    this.props.getUserLogInData(formData.email, formData.password, this.props.history.push, null);
  }

  doGoogleLogIn = (googleTokenId) => {
    this.props.getUserLogInData(null, null, this.props.history.push, googleTokenId);
  }

  render() {
    if (this.props.isInfoAlert && this.props.pageInfo === "ProfileDeleted") {
      return <Redirect to='/signUp'/>
    }

    return (
      <SignIn isAuth={this.props.isAuth}
              onSubmit={this.doLogIn}
              isInfoAlert={this.props.isInfoAlert}
              pageInfo={this.props.pageInfo}
              turnOffAlert={this.turnOffAlert}
              doGoogleLogIn={this.doGoogleLogIn}
      />
    );
  }

}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    isInfoAlert: state.alert.isInfoAlert,
    pageInfo: state.alert.pageInfo
  };
};

export default compose(withRouter, connect(mapStateToProps, {getUserLogInData, activateInfoAlert}))(SignInContainer);