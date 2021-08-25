import SignIn from "./SignIn";
import {connect} from "react-redux";
import React from "react";
import {compose} from "redux";
import {getUserLogInData} from "../../../redux/actions/authActions";
import {activateInfoAlert} from "../../../redux/actions/alertActions";

class SignInContainer extends React.Component {

  turnOffAlert = () => {
    this.props.activateInfoAlert(false, "");
  }

  doLogIn = (formData) => {
    this.props.getUserLogInData(formData.email, formData.password);
  }

  render() {
    return (
      <SignIn isAuth={this.props.isAuth}
              onSubmit={this.doLogIn}
              isInfoAlert={this.props.isInfoAlert}
              page={this.props.page}
              turnOffAlert={this.turnOffAlert}
      />
    );
  }

}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    isInfoAlert: state.alert.isInfoAlert,
    page: state.alert.page
  };
};

export default compose(connect(mapStateToProps, {getUserLogInData, activateInfoAlert}))(SignInContainer);