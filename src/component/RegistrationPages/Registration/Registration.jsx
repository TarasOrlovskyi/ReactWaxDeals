import s from './Registration.module.css';
import userStyle from './../User.module.css';
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import {useAlert} from 'react-alert';
import MessageAlert from "../../Common/Alert/MessageAlert";
import React from "react";
import letterImage from "../../../assets/img/alertImg/message_letter.png";
import UserMessage from "../UserMessage/UserMessage";

const Registration = (props) => {

  // const alert = useAlert();

  let sendSignUpCredentials = (formData) => {
    props.registerUser(formData.email, formData.password, formData.confirmPassword, formData.discogsUserName);
  }

  // if (!props.message.length > 0) {
  //   return <MessageAlert message={props.message} cleanMessage={props.cleanMessage}/>
  // }
  // props.message.length > 0 && alert.show(<MessageAlert message={props.message}/>, {
  //   onClose: props.cleanMessage
  // });

  let firstAlertString = <p>Please confirm your registration</p>
  let secondAlertString = <p>by cliking the link in the email we've just send you.</p>

  return (
    <main className="main">
      <div className="container">
        <div className="searchArea">
        </div>
        {
          props.isRegistrationSuccess &&
          <MessageAlert
            turnOffAlert={props.turnOffAlert}
            messages={[firstAlertString, secondAlertString]}
            letterImage={letterImage}
          />
        }
        <div className={s.contentRegistrationPage}>
          <UserMessage message={props.message} errorMessage={props.errorMessage}/>
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