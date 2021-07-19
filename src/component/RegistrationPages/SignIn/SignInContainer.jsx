import {updateSignInEmail, updateSignInPassword} from "../../../redux/sign-in-reducer";
import SignIn from "./SignIn";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    signInPage: state.signInPage
  };
};

export default connect(mapStateToProps, {updateSignInEmail, updateSignInPassword})(SignIn);