import RecoveryPassword from "./RecoveryPassword";
import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";
import {sendRecoveryPasswordMail} from "../../../redux/actions/recoveryPasswordActions";
import {withRouter} from "react-router-dom";
import {activateInfoAlert} from "../../../redux/actions/alertActions";

class RecoveryPasswordContainer extends React.Component {

  sendRecoveryMail = (formData) => {
    this.props.sendRecoveryPasswordMail(formData.email, this.props.history.push);
  }

  turnOffAlert = () => {
    this.props.activateInfoAlert(false, "");
  }

  render() {
    return (
      <RecoveryPassword isInfoAlert={this.props.isInfoAlert}
                        page={this.props.page}
                        turnOffAlert={this.turnOffAlert}
                        onSubmit={this.sendRecoveryMail}
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

export default compose(withRouter, connect(mapStateToProps, {
  sendRecoveryPasswordMail,
  activateInfoAlert
}))(RecoveryPasswordContainer);