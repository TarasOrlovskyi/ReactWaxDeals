import s from './Registration.module.css';
import userStyle from './../User.module.css';
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import {useAlert} from 'react-alert';
import RegistrationAlert from "../../Common/Alerts/RegistrationAlert";

const Registration = (props) => {

  // const alert = useAlert();

  let sendSignUpCredentials = (formData) => {
    debugger;
    props.registerUser(formData.email, formData.password, formData.confirmPassword, formData.discogsUserName);
  }

  // if (!props.message.length > 0) {
  //   return <RegistrationAlert message={props.message} cleanMessage={props.cleanMessage}/>
  // }
  // props.message.length > 0 && alert.show(<RegistrationAlert message={props.message}/>, {
  //   onClose: props.cleanMessage
  // });

  return (
    <main className="main">
      <div className="container">
        <div className="searchArea">
        </div>
        {
          props.isRegistrationAlert &&
          <RegistrationAlert isRegistrationAlert={props.isRegistrationAlert} turnOffAlert={props.turnOffAlert}/>
        }
        <div className={s.contentRegistrationPage}>
          {/*<UserMessage message={props.message} errorMessage={props.errorMessage}/>*/}
          <div className={s.contentRegistrationPage__column + ' contentColumn'}>
            <div className={userStyle.contentUser__title}>
              <h2>Registration</h2>
            </div>
            <RegistrationForm onSubmit={sendSignUpCredentials}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Registration;