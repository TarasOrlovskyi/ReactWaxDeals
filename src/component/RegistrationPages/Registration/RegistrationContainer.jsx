import {
  updateEmail,
  updatePassword,
  updateConfirmPassword,
  updateDiscogsUsername
} from "../../../redux/registration-reducer";
import Registration from "./Registration";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    registrationPage: state.registrationPage
  };
};

const RegistrationContainer = connect
(
  mapStateToProps,
  {updateEmail, updatePassword, updateConfirmPassword, updateDiscogsUsername}
)(Registration);

export default RegistrationContainer;