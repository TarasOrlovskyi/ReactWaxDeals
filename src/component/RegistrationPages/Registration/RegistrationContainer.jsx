import Registration from "./Registration";
import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";
import {registerUser} from "../../../redux/actions/registrationActions";
import {withRouter} from "react-router-dom";
import {activateInfoAlert} from "../../../redux/actions/alertActions";

class RegistrationContainer extends React.Component {

  sendSignUpCredentials = (formData) => {
    this.props.registerUser(formData.email, formData.password, formData.confirmPassword, formData.discogsUserName, this.props.history.push);
  }

  turnOffAlert = () => {
    this.props.activateInfoAlert(false, "");
  }

  render() {
    return (
      <Registration isInfoAlert={this.props.isInfoAlert}
                    page={this.props.page}
                    turnOffAlert={this.turnOffAlert}
                    onSubmit={this.sendSignUpCredentials}
      />
    );
  }

}

let mapStateToProps = (state) => {
  return {
    isInfoAlert: state.alert.isInfoAlert,
    page: state.alert.page
  };
};

export default compose(withRouter, connect(mapStateToProps,
  {activateInfoAlert, registerUser}))(RegistrationContainer);