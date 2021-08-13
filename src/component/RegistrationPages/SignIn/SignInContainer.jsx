import SignIn from "./SignIn";
import {connect} from "react-redux";
import React from "react";
import {getUserLogInData, setIsMailConfirm} from "../../../redux/auth-reducer";
import {compose} from "redux";

class SignInContainer extends React.Component {

  componentDidMount() {
    if (this.props.isMailConfirm){
      setTimeout(()=> {
        this.props.setIsMailConfirm(false);
      }, 10000);
    }
  }

  turnOffAlert = () => {
    this.props.setIsMailConfirm(false);
  }

  doLogIn = (email, password) => {
    this.props.getUserLogInData(email, password);
  }

  render() {
    return (
      <SignIn isAuth={this.props.isAuth}
              doLogIn={this.doLogIn}
              isMailConfirm={this.props.isMailConfirm}
              turnOffAlert={this.turnOffAlert}
      />
    );
  }

}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    isMailConfirm: state.auth.isMailConfirm
  };
};

export default compose(connect(mapStateToProps, {getUserLogInData, setIsMailConfirm}))(SignInContainer);