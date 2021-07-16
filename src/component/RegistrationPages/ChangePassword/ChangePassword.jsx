import editeProfileStyle from './ChangePassword.module.css';
import userStyle from '../User.module.css';
import UserMessage from "../UserMessage/UserMessage";

const ChangePassword = (props) => {
  document.body.style.background = "url(assets/background.jpg) no-repeat fixed center";
  document.body.style.backgroundSize = "cover";
  return (
    <main>
      <div className="container">
        <div className="searchArea">
        </div>
        <div className={editeProfileStyle.contentChangePassword + ' content'}>
          <UserMessage/>
          <div className={editeProfileStyle.contentChangePassword__column + ' contentColumn'}>
            <div className={userStyle.contentUser__title}>
              <h2>Change Password</h2>
            </div>
            <form action="/password/changePassword" id="changePassword-form" method="POST"
                  className={userStyle.user + ' ' + editeProfileStyle.changePasswordUser} name="form_edit"
                  onSubmit="return matchPassword();">
              <div className={userStyle.user__fieldsWrapper}>
                <div className={userStyle.user__fields + ' ' + editeProfileStyle.changePasswordUser__fields}>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="password" name="oldPassword"
                           placeholder="Old password"
                           required/>
                  </label>
                  <div className={editeProfileStyle.changePasswordUser__border}></div>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="password" name="newPassword"
                           placeholder="New password"
                           id="newPassword" onBlur="checkRegex(this)"/>
                  </label>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="password" name="confirmNewPassword"
                           id="confirmNewPassword"
                           placeholder="Confirm new password"/>
                  </label>
                </div>
              </div>
              <div className={userStyle.user__submitButtons}>
                <label className={userStyle.user__submitLabel}>
                  <input className={userStyle.user__submitInput} type="submit" value="SAVE"/>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ChangePassword;
