import RecoveryPassword from "./RecoveryPassword";
import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";
import {sendRecoveryPasswordMail, setIsRecoveryMailSent} from "../../../redux/actions/recoveryPasswordActions";
import {withRouter} from "react-router-dom";
import ContactUs from "../../Contact/ContactUs";
import {activateInfoAlert} from "../../../redux/actions/alertActions";

class RecoveryPasswordContainer extends React.Component{

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (this.props.isRecoveryMailSent){
  //     setTimeout(()=> {
  //       this.props.setIsRecoveryMailSent(false);
  //     }, 10000);
  //   }
  // }

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
        // isRecoveryMailSent={this.props.isRecoveryMailSent}
                        turnOffAlert={this.turnOffAlert}
                        onSubmit={this.sendRecoveryMail}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    // isRecoveryMailSent: state.recoveryPasswordPage.isRecoveryMailSent
    isInfoAlert: state.alert.isInfoAlert,
    page: state.alert.page
  };
};

export default compose(withRouter, connect(mapStateToProps, {sendRecoveryPasswordMail, activateInfoAlert}))(RecoveryPasswordContainer);