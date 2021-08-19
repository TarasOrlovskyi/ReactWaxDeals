import SignIn from "./SignIn";
import {connect} from "react-redux";
import React from "react";
import {getUserLogInData, setIsMailConfirm} from "../../../redux/auth-reducer";
import {compose} from "redux";
import {setIsNewPasswordUpdated} from "../../../redux/new-password-reducer";

class SignInContainer extends React.Component {

  componentDidMount() {
    if (this.props.isMailConfirm || this.props.isNewPasswordUpdated){
      setTimeout(()=> {
        this.props.setIsMailConfirm(false);
        this.props.setIsNewPasswordUpdated(false);
      }, 10000);
    }
  }

  turnOffAlert = () => {
    this.props.setIsMailConfirm(false);
    this.props.setIsNewPasswordUpdated(false);
  }

  doLogIn = (email, password) => {
    this.props.getUserLogInData(email, password);
  }

  render() {
    return (
      <SignIn isAuth={this.props.isAuth}
              doLogIn={this.doLogIn}
              isMailConfirm={this.props.isMailConfirm}
              isNewPasswordUpdated={this.props.isNewPasswordUpdated}
              turnOffAlert={this.turnOffAlert}
      />
    );
  }

}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    isMailConfirm: state.auth.isMailConfirm,
    isNewPasswordUpdated: state.newPasswordPage.isNewPasswordUpdated
  };
};

export default compose(connect(mapStateToProps, {getUserLogInData, setIsMailConfirm, setIsNewPasswordUpdated}))(SignInContainer);