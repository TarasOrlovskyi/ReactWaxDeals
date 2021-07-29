import {updateSignInEmail, updateSignInPassword} from "../../../redux/sign-in-reducer";
import SignIn from "./SignIn";
import {connect} from "react-redux";
import React from "react";
import {getUserLogInData} from "../../../redux/auth-reducer";
import {compose} from "redux";

class SignInContainer extends React.Component {

  doLogIn = (email, password) => {
    this.props.getUserLogInData(email, password);
  }

  render() {
    return (
      <SignIn {...this.props} doLogIn={this.doLogIn}/>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    signInPage: state.signInPage
  };
};

export default compose
(connect(mapStateToProps, {updateSignInEmail, updateSignInPassword, getUserLogInData}))
(SignInContainer);