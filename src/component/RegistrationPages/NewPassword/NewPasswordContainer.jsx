import {connect} from "react-redux";
import NewPassword from "./NewPassword";
import {compose} from "redux";
import React from "react";
import {changeRecoveryPassword, checkRecoveryToken} from "../../../redux/new-password-reducer";
import {NavLink, Redirect, withRouter} from "react-router-dom";
import alertsStyle from "../../Common/Alert/Alert.module.css";
import MessageAlert from "../../Common/Alert/MessageAlert";

class NewPasswordContainer extends React.Component {

  componentDidMount() {
    debugger
    const search = this.props.location.search;
    const token = new URLSearchParams(search).get("token");
    if (token) {
      this.props.checkRecoveryToken(token);
    }
  }

  changeUserNewPassword = (formData) => {
    let recoveryToken = this.props.recoveryToken;
    this.props.changeRecoveryPassword(formData.newPassword, formData.confirmNewPassword, recoveryToken);
  }

  render() {
    if (this.props.isNewPasswordUpdated) {
      return <Redirect to='/signIn'/>
    } else if (!this.props.isWaitRecoveryResponse && !this.props.isRecoveryTokenValid) {
      let firstAlertString = <p>Sorry, but your link is incorrect!</p>
      let secondAlertString = <p>
        Please, <NavLink to='/contact' className={alertsStyle.alert_navLink}>contact us</NavLink> or <NavLink
        to='/signUp' className={alertsStyle.alert_navLink}>sing up</NavLink>
      </p>
      return <MessageAlert messages={[firstAlertString, secondAlertString]}/>
    }

    if (this.props.isRecoveryTokenValid) {
      return (
        <NewPassword onSubmit={this.changeUserNewPassword}/>
      );
    }

    return <div>Loading...</div>
  }
}

let mapStateToProps = (state) => {
  return {
    isRecoveryTokenValid: state.newPasswordPage.isRecoveryTokenValid,
    isWaitRecoveryResponse: state.newPasswordPage.isWaitRecoveryResponse,
    recoveryToken: state.newPasswordPage.recoveryToken,
    isNewPasswordUpdated: state.newPasswordPage.isNewPasswordUpdated
  };
};

export default compose(withRouter, connect(mapStateToProps,
  {checkRecoveryToken, changeRecoveryPassword}))(NewPasswordContainer);