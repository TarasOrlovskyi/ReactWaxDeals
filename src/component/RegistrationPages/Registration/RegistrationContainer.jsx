import {
  changeConfirmPasswordActionCreator,
  changeDiscogsUsernameActionCreator,
  changeEmailActionCreator,
  changePasswordActionCreator
} from "../../../redux/registration-reducer";
import Registration from "./Registration";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    registrationPage: state.registrationPage
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateRegistrationEmail: (emailText) => {
      dispatch(changeEmailActionCreator(emailText));
    },
    updateRegistrationPassword: (passwordText) => {
      dispatch(changePasswordActionCreator(passwordText));
    },
    updateRegistrationConfirmPassword: (confirmPasswordText) => {
      dispatch(changeConfirmPasswordActionCreator(confirmPasswordText));
    },
    updateRegistrationDiscogsUsername: (discogsUsernameText) => {
      dispatch(changeDiscogsUsernameActionCreator(discogsUsernameText));
    },

  };
};

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);

export default RegistrationContainer;