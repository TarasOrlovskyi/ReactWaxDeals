import {updateConfirmNewPassword, updateNewPassword, updateOldPassword} from "../../../redux/change-password-reducer";
import {connect} from "react-redux";
import ChangePassword from "./ChangePassword";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    changePasswordPage: state.changePasswordPage
  };
};

export default compose(connect(mapStateToProps,
  {updateOldPassword, updateNewPassword, updateConfirmNewPassword}))(ChangePassword);

