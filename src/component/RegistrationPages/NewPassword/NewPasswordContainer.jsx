import {connect} from "react-redux";
import NewPassword from "./NewPassword";
import {compose} from "redux";
import React from "react";
import {NavLink, Redirect, withRouter} from "react-router-dom";
import alertsStyle from "../../Common/Alert/Alert.module.css";
import MessageAlert from "../../Common/Alert/MessageAlert";
import {changeRecoveryPassword, checkRecoveryToken} from "../../../redux/actions/newPasswordActions";
import Preloader from "../../Common/Preloader/Preloader";

class NewPasswordContainer extends React.Component {

  componentDidMount() {
    let token = this.props.match.params.token;
    if (token) {
      this.props.checkRecoveryToken(token, this.props.history.push);
    }
  }

  changeUserNewPassword = (formData) => {
    let recoveryToken = this.props.recoveryToken;
    this.props.changeRecoveryPassword(formData.newPassword, formData.confirmNewPassword, recoveryToken, this.props.history.push);
  }

  render() {

    if (this.props.isWaitResponse) {
      return <Preloader/>
    }

    if (this.props.isInfoAlert && this.props.pageInfo === "NewPasswordUpdated") {
      return <Redirect to='/signIn'/>
    } else if (!this.props.isRecoveryTokenValid) {
      let alertString = <p>Sorry, but your link is incorrect! &nbsp; Please, <NavLink to='/contact'
                                                                                      className={alertsStyle.alert_navLink}>contact
        us</NavLink> or <NavLink
          to='/signUp' className={alertsStyle.alert_navLink}>sing up</NavLink>
      </p>
      return <MessageAlert messages={alertString}/>
    }

    return (
        <NewPassword onSubmit={this.changeUserNewPassword}/>
    );

  }
}

let mapStateToProps = (state) => {
  return {
    isRecoveryTokenValid: state.newPasswordPage.isRecoveryTokenValid,
    recoveryToken: state.newPasswordPage.recoveryToken,
    isInfoAlert: state.alert.isInfoAlert,
    pageInfo: state.alert.pageInfo,
    isWaitResponse: state.preloader.isWaitResponse
  };
};

export default compose(withRouter, connect(mapStateToProps,
    {checkRecoveryToken, changeRecoveryPassword}))(NewPasswordContainer);