import s from './Registration.module.css';
import userStyle from './../User.module.css';
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import MessageAlert from "../../Common/Alert/MessageAlert";
import React from "react";
import letterImage from "../../../assets/img/alertImg/message_letter.png";
import UserMessage from "../UserMessage/UserMessage";

const Registration = (props) => {

  let firstAlertString = <p>Please confirm your registration</p>
  let secondAlertString = <p>by clicking the link in the email we've just send you.</p>

  return (
    <main className="main">
      <div className="container">
        <div className="searchArea unsetHeight">
        </div>
        {
          (props.isInfoAlert && props.pageInfo === "Registration") &&
          <MessageAlert
            turnOffAlert={props.turnOffAlert}
            messages={[firstAlertString, secondAlertString]}
            letterImage={letterImage}
          />
        }
        {(props.isInfoAlert && props.pageInfo === "ProfileDeleted") &&
        <MessageAlert
          turnOffAlert={props.turnOffAlert}
          messages="Your profile has been deleted already"
        />
        }
        <div className={s.contentRegistrationPage}>
          <UserMessage message={props.message} errorMessage={props.errorMessage}/>
          <div className={s.contentRegistrationPage__column + ' contentColumn'}>
            <div className={userStyle.contentUser__title}>
              <h2>Registration</h2>
            </div>
            <RegistrationForm onSubmit={props.onSubmit}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Registration;