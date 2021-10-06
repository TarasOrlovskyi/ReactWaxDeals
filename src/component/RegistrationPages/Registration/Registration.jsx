import registrationStyle from './Registration.module.css';
import userStyle from './../User.module.css';
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import MessageAlert from "../../Common/Alert/MessageAlert";
import React from "react";
import letterImage from "../../../assets/img/alertImg/message_letter.png";

const Registration = React.memo(({isInfoAlert, pageInfo, turnOffAlert, onSubmit, isWaitResponse}) => {

  let alertString = <p>Please confirm your registration by clicking the link in the email we've just send you.</p>

  return (
      <main className="main">
        <div className="container">
          <div className="searchArea unsetHeight">
          </div>
          {
            (isInfoAlert && pageInfo === "Registration") &&
            <MessageAlert
                turnOffAlert={turnOffAlert}
                messages={alertString}
                letterImage={letterImage}
            />
          }
          {(isInfoAlert && pageInfo === "ProfileDeleted") &&
          <MessageAlert
              turnOffAlert={turnOffAlert}
              messages="Your profile has been deleted already"
          />
          }
          <div className={registrationStyle.contentRegistrationPage}>
            <div className={registrationStyle.contentRegistrationPage__column + ' contentColumn'}>
              <div className={userStyle.contentUser__title}>
                <h2>Registration</h2>
              </div>
              <RegistrationForm onSubmit={onSubmit} isWaitResponse={isWaitResponse}/>
            </div>
          </div>
        </div>
      </main>
  );
})

export default Registration;