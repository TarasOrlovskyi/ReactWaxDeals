import {
  changeConfirmPasswordActionCreator,
  changeDiscogsUsernameActionCreator,
  changeEmailActionCreator,
  changePasswordActionCreator
} from "../../../redux/registration-reducer";
import Registration from "./Registration";

const RegistrationContainer = (props) => {

  let updateRegistrationEmail = (emailText) => {
    props.dispatch(changeEmailActionCreator(emailText));
  };

  let updateRegistrationPassword = (passwordText) => {
    props.dispatch(changePasswordActionCreator(passwordText));
  };

  let updateRegistrationConfirmPassword = (confirmPasswordText) => {
    props.dispatch(changeConfirmPasswordActionCreator(confirmPasswordText));
  };

  let updateRegistrationDiscogsUsername = (discogsUsernameText) => {
    props.dispatch(changeDiscogsUsernameActionCreator(discogsUsernameText));
  };

  return (<Registration
    updateRegistrationEmail={updateRegistrationEmail}
    updateRegistrationPassword={updateRegistrationPassword}
    updateRegistrationConfirmPassword={updateRegistrationConfirmPassword}
    updateRegistrationDiscogsUsername={updateRegistrationDiscogsUsername}
    email={props.state.email}
    password={props.state.password}
    confirmPassword={props.state.confirmPassword}
    discogsUsername={props.state.discogsUsername}
  />);
};

export default RegistrationContainer;