import editProfileStyle from './ChangePassword.module.css';
import userStyle from '../User.module.css';
import React from "react";
import ChangePasswordForm from "./ChangePasswordForm/ChangePasswordForm";
import MessageAlert from "../../Common/Alert/MessageAlert";

const ChangePassword = (props) => {

  return (
    <main>
      <div className="container">
        <div className="searchArea">
        </div>
        <div className={editProfileStyle.contentChangePassword + ' content'}>
          {props.isPasswordChanged &&
          <MessageAlert
            turnOffAlert={props.turnOffAlert}
            messages={"Your password has been changed"}
          />
          }
          <div className={editProfileStyle.contentChangePassword__column + ' contentColumn'}>
            <div className={userStyle.contentUser__title}>
              <h2>Change Password</h2>
            </div>
            <ChangePasswordForm onSubmit={props.onSubmit}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ChangePassword;