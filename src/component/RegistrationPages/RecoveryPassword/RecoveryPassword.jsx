import s from './RecoveryPassword.module.css';
import userStyle from './../User.module.css';
import MessageAlert from "../../Common/Alert/MessageAlert";
import letterImage from "../../../assets/img/alertImg/message_letter.png";
import React from "react";
import RecoveryPasswordForm from "./RecoveryPasswordForm/RecoveryPasswordForm";

const RecoveryPassword = (props) => {

  let alertString = <p>In order to recovery your password click the link in the email we've just send you.</p>

  return (
    <main className="main">
      <div className="container">
        <div className="searchArea">
        </div>
        <div className={s.contentRecoveryPassword}>
          {(props.isInfoAlert && props.pageInfo === "RecoveryPassword") &&
          <MessageAlert
            turnOffAlert={props.turnOffAlert}
            messages={alertString}
            letterImage={letterImage}
          />
          }
          <div className={s.contentRecoveryPassword__column + ' contentColumn'}>
            <div className={userStyle.contentUser__title}>
              <h2>Password recovery</h2>
            </div>
            <RecoveryPasswordForm onSubmit={props.onSubmit}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RecoveryPassword;