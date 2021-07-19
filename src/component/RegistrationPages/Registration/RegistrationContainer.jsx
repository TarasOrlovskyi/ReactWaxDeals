import {
  updateConfirmPassword,
  updateDiscogsUsername,
  updateEmail,
  updatePassword
} from "../../../redux/registration-reducer";
import Registration from "./Registration";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    registrationPage: state.registrationPage
  };
};

export default connect(mapStateToProps,
  {updateEmail, updatePassword, updateConfirmPassword, updateDiscogsUsername})(Registration);