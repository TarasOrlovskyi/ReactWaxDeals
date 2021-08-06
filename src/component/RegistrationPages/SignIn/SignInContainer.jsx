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
      <SignIn isAuth={this.props.isAuth} doLogIn={this.doLogIn}/>
    );
  }

}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  };
};

export default compose(connect(mapStateToProps, {getUserLogInData}))(SignInContainer);