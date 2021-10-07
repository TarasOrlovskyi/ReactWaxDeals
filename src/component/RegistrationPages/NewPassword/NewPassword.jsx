import newPasswordStyle from "./NewPassword.module.css";
import userStyle from "../User.module.css";
import NewPasswordForm from "./NewPasswordForm/NewPasswordForm";
import React from "react";

const NewPassword = React.memo(({onSubmit}) => {
  return (
      <main className="main">
        <div className="container">
          <div className={newPasswordStyle.contentNewPassword + ' content'}>
            <div className={newPasswordStyle.contentNewPassword__column + ' contentColumn'}>
              <div className={userStyle.contentUser__title}>
                <h2>New password</h2>
              </div>
              <NewPasswordForm onSubmit={onSubmit}/>
            </div>
          </div>
        </div>
      </main>
  );
})

export default NewPassword;