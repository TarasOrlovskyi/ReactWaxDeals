import SignIn from "./SignIn";
import {connect} from "react-redux";
import React from "react";
import {compose} from "redux";
import {getUserLogInData} from "../../../redux/actions/authActions";
// import {setIsNewPasswordUpdated} from "../../../redux/actions/newPasswordActions";
import {withRouter} from "react-router-dom";
import {activateInfoAlert} from "../../../redux/actions/alertActions";
import Registration from "../Registration/Registration";

class SignInContainer extends React.Component {

  // componentDidMount() {
  //   if (this.props.isMailConfirm || this.props.isNewPasswordUpdated){
  //     setTimeout(()=> {
  //       // this.props.setIsMailConfirm(false);
  //       this.props.setIsNewPasswordUpdated(false);
  //     }, 10000);
  //   }
  // }

  turnOffAlert = () => {
    // this.props.setIsMailConfirm(false);
    this.props.activateInfoAlert(false, "");
    // this.props.setIsNewPasswordUpdated(false);
  }

  doLogIn = (formData) => {
    this.props.getUserLogInData(formData.email, formData.password);
  }

  render() {
    return (
      <SignIn isAuth={this.props.isAuth}
              onSubmit={this.doLogIn}
              // isMailConfirm={this.props.isMailConfirm}
              isInfoAlert={this.props.isInfoAlert}
              page={this.props.page}
              // isNewPasswordUpdated={this.props.isNewPasswordUpdated}
              turnOffAlert={this.turnOffAlert}
      />
    );
  }

}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    // isMailConfirm: state.auth.isMailConfirm,
    isInfoAlert: state.alert.isInfoAlert,
    page: state.alert.page,
    // isNewPasswordUpdated: state.newPasswordPage.isNewPasswordUpdated
  };
};

export default compose(connect(mapStateToProps, {getUserLogInData, activateInfoAlert}))(SignInContainer);