import s from "./NewPassword.module.css";
import userStyle from "../User.module.css";
import NewPasswordForm from "./NewPasswordForm/NewPasswordForm";
import React from "react";

const NewPassword = (props) => {
  return (
    <main className="main">
      <div className="container">
        <div className={s.contentNewPassword + ' content'}>
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