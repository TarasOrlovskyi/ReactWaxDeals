import {connect} from "react-redux";
import ChangePassword from "./ChangePassword";
import {compose} from "redux";
import React from "react";
import {changePassword} from "../../../redux/actions/changePasswordActions";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {Redirect, withRouter} from "react-router-dom";
import {activateInfoAlert} from "../../../redux/actions/alertActions";

class ChangePasswordContainer extends React.Component {

  changeUserPassword = (formData) => {
    this.props.changePassword(formData.oldPassword, formData.newPassword, formData.confirmNewPassword, this.props.history.push)
  }

  render() {
    if (this.props.isInfoAlert && this.props.pageInfo === "ChangePassword") {
      return <Redirect to='/signIn'/>
    }
    return (
        <ChangePassword onSubmit={this.changeUserPassword}
                        isWaitResponse={this.props.isWaitResponse}
        />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isInfoAlert: state.alert.isInfoAlert,
    pageInfo: state.alert.pageInfo,
    isWaitResponse: state.preloader.isWaitResponse
  };
};

export default compose(withRouter, withAuthRedirect, connect(mapStateToProps,
    {changePassword, activateInfoAlert}))(ChangePasswordContainer);

