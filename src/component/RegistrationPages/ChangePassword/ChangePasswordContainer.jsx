import {
  changeConfirmNewPassword,
  changeNewPassword,
  changeOldPassword
} from "../../../redux/change-password-reducer";
import {connect} from "react-redux";
import ChangePassword from "./ChangePassword";

let mapStateToProps = (state) => {
  return {
    changePasswordPage: state.changePasswordPage
  };
};

export default connect(mapStateToProps,
  {changeConfirmNewPassword, changeNewPassword, changeOldPassword})(ChangePassword);

