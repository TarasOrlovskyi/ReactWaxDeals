import editProfileStyle from './ChangePassword.module.css';
import userStyle from '../User.module.css';
import React from "react";
import ChangePasswordForm from "./ChangePasswordForm/ChangePasswordForm";

const ChangePassword = React.memo(({onSubmit, isWaitResponse}) => {

  return (
      <main>
        <div className="container">
          <div className="searchArea">
          </div>
          <div className={editProfileStyle.contentChangePassword + ' content'}>
            <div className={editProfileStyle.contentChangePassword__column + ' contentColumn'}>
              <div className={userStyle.contentUser__title}>
                <h2>Change Password</h2>
              </div>
              <ChangePasswordForm onSubmit={onSubmit} isWaitResponse={isWaitResponse}/>
            </div>
          </div>
        </div>
      </main>
  );
})

export default ChangePassword;