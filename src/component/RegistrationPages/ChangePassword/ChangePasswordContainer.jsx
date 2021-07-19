import {updateConfirmNewPassword, updateNewPassword, updateOldPassword} from "../../../redux/change-password-reducer";
import {connect} from "react-redux";
import ChangePassword from "./ChangePassword";

let mapStateToProps = (state) => {
  return {
    changePasswordPage: state.changePasswordPage
  };
};

export default connect(mapStateToProps,
  {updateOldPassword, updateNewPassword, updateConfirmNewPassword})(ChangePassword);

