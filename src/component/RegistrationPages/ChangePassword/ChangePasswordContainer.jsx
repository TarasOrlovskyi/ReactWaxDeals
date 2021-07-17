import {
  changeConfirmNewPasswordActionCreator,
  changeNewPasswordActionCreator,
  changeOldPasswordActionCreator
} from "../../../redux/change-password-reducer";
import {connect} from "react-redux";
import ChangePassword from "./ChangePassword";

let mapStateToProps = (state) => {
  return {
    changePasswordPage: state.changePasswordPage
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateChangePasswordOldPassword: (oldPasswordText) => {
      dispatch(changeOldPasswordActionCreator(oldPasswordText));
    },
    updateChangePasswordNewPassword: (newPasswordText) => {
      dispatch(changeNewPasswordActionCreator(newPasswordText));
    },
    updateChangePasswordConfirmNewPassword: (confirmNewPasswordText) => {
      dispatch(changeConfirmNewPasswordActionCreator(confirmNewPasswordText));
    },
  };
};

const ChangePasswordContainer = connect(mapStateToProps, mapDispatchToProps)(ChangePassword);

export default ChangePasswordContainer;