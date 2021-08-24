import Registration from "./Registration";
import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";
import {registerUser} from "../../../redux/actions/registrationActions";
// import {setIsProfileDeleted} from "../../../redux/actions/authActions";
import {withRouter} from "react-router-dom";
import {activateInfoAlert} from "../../../redux/actions/alertActions";
import ContactUs from "../../Contact/ContactUs";

class RegistrationContainer extends React.Component {

  // componentDidMount() {
  //   if (this.props.isProfileDeleted) {
  //     setTimeout(() => {
  //       this.props.setIsProfileDeleted(false);
  //     }, 10000);
  //   }
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (this.props.isRegistrationSuccess) {
  //     setTimeout(() => {
  //       this.props.setRegistrationInfo(false);
  //     }, 10000);
  //   }
  // }

  sendSignUpCredentials = (formData) => {
    this.props.registerUser(formData.email, formData.password, formData.confirmPassword, formData.discogsUserName, this.props.history.push);
  }

  turnOffAlert = () => {
    // this.props.setRegistrationInfo(false);
    this.props.activateInfoAlert(false, "");
    // this.props.setIsProfileDeleted(false);
  }

  render() {
    return (
      <Registration isInfoAlert={this.props.isInfoAlert}
                    page={this.props.page}
        // isRegistrationSuccess={this.props.isRegistrationSuccess}
                    turnOffAlert={this.turnOffAlert}
                    onSubmit={this.sendSignUpCredentials}
                    // isProfileDeleted={this.props.isProfileDeleted}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    // isRegistrationSuccess: state.registrationPage.isRegistrationSuccess,
    isInfoAlert: state.alert.isInfoAlert,
    page: state.alert.page
    // isProfileDeleted: state.auth.isProfileDeleted
  };
};

export default compose(withRouter, connect(mapStateToProps,
  {activateInfoAlert, registerUser}))(RegistrationContainer);