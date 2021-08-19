import RecoveryPassword from "./RecoveryPassword";
import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";
import {sendRecoveryPasswordMail, setIsRecoveryMailSent} from "../../../redux/recovery-password-reducer";

class RecoveryPasswordContainer extends React.Component{

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.isRecoveryMailSent){
      setTimeout(()=> {
        this.props.setIsRecoveryMailSent(false);
      }, 10000);
    }
  }

  sendRecoveryMail = (formData) => {
    this.props.sendRecoveryPasswordMail(formData.email);
  }

  turnOffAlert = () => {
    this.props.setIsRecoveryMailSent(false);
  }

  render() {
    return (
      <RecoveryPassword isRecoveryMailSent={this.props.isRecoveryMailSent}
                        turnOffAlert={this.turnOffAlert}
                        onSubmit={this.sendRecoveryMail}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isRecoveryMailSent: state.recoveryPasswordPage.isRecoveryMailSent
  };
};

export default compose(connect(mapStateToProps, {sendRecoveryPasswordMail, setIsRecoveryMailSent}))(RecoveryPasswordContainer);