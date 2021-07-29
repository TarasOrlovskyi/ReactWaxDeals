import {
  updateConfirmPassword,
  updateDiscogsUsername,
  updateEmail,
  updatePassword
} from "../../../redux/registration-reducer";
import Registration from "./Registration";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    registrationPage: state.registrationPage
  };
};

export default compose(connect(mapStateToProps,
  {updateEmail, updatePassword, updateConfirmPassword, updateDiscogsUsername}))(Registration);