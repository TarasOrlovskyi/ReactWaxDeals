import {connect} from "react-redux";
import ChangePassword from "./ChangePassword";
import {compose} from "redux";
import React from "react";
import {changePassword} from "../../../redux/actions/changePasswordActions";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {Redirect, withRouter} from "react-router-dom";
import {activateInfoAlert} from "../../../redux/actions/alertActions";
import Registration from "../Registration/Registration";

class ChangePasswordContainer extends React.Component {

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (this.props.isPasswordChanged) {
  //     setTimeout(() => {
  //       this.props.setIsPasswordChanged(false);
  //     }, 10000);
  //   }
  // }

  changeUserPassword = (formData) => {
    this.props.changePassword(formData.oldPassword, formData.newPassword, formData.confirmNewPassword, this.props.history.push)
  }

  // turnOffAlert = () => {
  //   this.props.activateInfoAlert(false, "");
  //   // this.props.setIsPasswordChanged(false);
  // }

  render() {
    if (this.props.isInfoAlert && this.props.pageInfo === "ChangePassword"){
      return <Redirect to='/signIn'/>
    }
    return (
        <ChangePassword onSubmit={this.changeUserPassword}
                        // isInfoAlert={this.props.isInfoAlert}
                        // pageInfo={this.props.pageInfo}
                        // turnOffAlert={this.turnOffAlert}
        />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isInfoAlert: state.alert.isInfoAlert,
    pageInfo: state.alert.pageInfo
  };
};

export default compose(withRouter, withAuthRedirect, connect(mapStateToProps,
    {changePassword, activateInfoAlert}))(ChangePasswordContainer);

