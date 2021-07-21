import {updateEmail} from "../../../redux/recovery-password-reducer";
import RecoveryPassword from "./RecoveryPassword";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    recoveryPasswordPage: state.recoveryPasswordPage
  };
};

export default connect(mapStateToProps, {updateEmail})(RecoveryPassword);