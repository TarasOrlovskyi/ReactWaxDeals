import {connect} from "react-redux";
import ChangePassword from "./ChangePassword";
import {compose} from "redux";
import {changePassword, setIsPasswordChanged} from "../../../redux/change-password-reducer";
import React from "react";

class ChangePasswordContainer extends React.Component{

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.isPasswordChanged){
      setTimeout(()=> {
        this.props.setIsPasswordChanged(false);
      }, 10000);
    }
  }

  changeUserPassword = (formData) => {
    this.props.changePassword(formData.oldPassword, formData.newPassword, formData.confirmNewPassword)
  }

  turnOffAlert = () => {
    this.props.setIsPasswordChanged(false);
  }

  render() {
    return (
      <ChangePassword onSubmit={this.changeUserPassword}
                      isPasswordChanged={this.props.isPasswordChanged}
                      turnOffAlert={this.turnOffAlert}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isPasswordChanged: state.changePasswordPage.isPasswordChanged
  };
};

export default compose(connect(mapStateToProps,
  {changePassword, setIsPasswordChanged}))(ChangePasswordContainer);

