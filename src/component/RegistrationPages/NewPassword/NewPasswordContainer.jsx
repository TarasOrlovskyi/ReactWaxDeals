import {updateConfirmNewPassword, updateNewPassword,} from "../../../redux/new-password-reducer";
import {connect} from "react-redux";
import NewPassword from "./NewPassword";

let mapStateToProps = (state) => {
  return {
    newPasswordPage: state.newPasswordPage
  };
};

export default connect(mapStateToProps,
  {updateNewPassword, updateConfirmNewPassword})(NewPassword);