import {
  changeConfirmPasswordActionCreator,
  changeDiscogsUsernameActionCreator,
  changeEmailActionCreator,
  changePasswordActionCreator
} from "../../../redux/registration-reducer";
import Registration from "./Registration";

const RegistrationContainer = (props) => {
  let state = props.store.getState().registrationPage;

  let updateRegistrationEmail = (emailText) => {
    props.store.dispatch(changeEmailActionCreator(emailText));
  };

  let updateRegistrationPassword = (passwordText) => {
    props.store.dispatch(changePasswordActionCreator(passwordText));
  };

  let updateRegistrationConfirmPassword = (confirmPasswordText) => {
    props.store.dispatch(changeConfirmPasswordActionCreator(confirmPasswordText));
  };

  let updateRegistrationDiscogsUsername = (discogsUsernameText) => {
    props.store.dispatch(changeDiscogsUsernameActionCreator(discogsUsernameText));
  };

  return (<Registration
    updateRegistrationEmail={updateRegistrationEmail}
    updateRegistrationPassword={updateRegistrationPassword}
    updateRegistrationConfirmPassword={updateRegistrationConfirmPassword}
    updateRegistrationDiscogsUsername={updateRegistrationDiscogsUsername}
    registrationPage={state}
  />);
};

export default RegistrationContainer;