import {updateConfirmNewPassword, updateNewPassword,} from "../../../redux/new-password-reducer";
import {connect} from "react-redux";
import NewPassword from "./NewPassword";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    newPasswordPage: state.newPasswordPage
  };
};

export default compose(connect(mapStateToProps,
  {updateNewPassword, updateConfirmNewPassword}))(NewPassword);