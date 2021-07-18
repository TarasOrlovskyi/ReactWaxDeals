import {
  changeEmailActionCreator,
  changePasswordActionCreator,
} from "../../../redux/SignInReducer/sign-in-reducer";
import SignIn from "./SignIn";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    registrationPage: state.registrationPage
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateSignInEmail: (emailText) => {
      dispatch(changeEmailActionCreator(emailText));
    },
    updateSignInPassword: (passwordText) => {
      dispatch(changePasswordActionCreator(passwordText));
    },

  };
};

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default SignInContainer;