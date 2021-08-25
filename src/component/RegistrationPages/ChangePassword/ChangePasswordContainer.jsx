import {connect} from "react-redux";
import ChangePassword from "./ChangePassword";
import {compose} from "redux";
import React from "react";
import {changePassword, setIsPasswordChanged} from "../../../redux/actions/changePasswordActions";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

class ChangePasswordContainer extends React.Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.isPasswordChanged) {
      setTimeout(() => {
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

export default compose(withAuthRedirect, connect(mapStateToProps,
  {changePassword, setIsPasswordChanged}))(ChangePasswordContainer);

