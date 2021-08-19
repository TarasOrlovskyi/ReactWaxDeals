import s from "./NewPassword.module.css";
import UserMessage from "../UserMessage/UserMessage";
import userStyle from "../User.module.css";
import NewPasswordForm from "./NewPasswordForm/NewPasswordForm";
import React from "react";

const NewPassword = (props) => {
  return (
    <main className="main">
      <div className="container">
        <div className={s.contentNewPassword + ' content'}>
          <UserMessage message={props.message} errorMessage={props.errorMessage}/>
          <div className={s.contentNewPassword__column + ' contentColumn'}>
            <div className={userStyle.contentUser__title}>
              <h2>New password</h2>
            </div>
            <NewPasswordForm onSubmit={props.onSubmit}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NewPassword;