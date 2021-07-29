import {updateEmail} from "../../../redux/recovery-password-reducer";
import RecoveryPassword from "./RecoveryPassword";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    recoveryPasswordPage: state.recoveryPasswordPage
  };
};

export default compose(connect(mapStateToProps, {updateEmail}))(RecoveryPassword);