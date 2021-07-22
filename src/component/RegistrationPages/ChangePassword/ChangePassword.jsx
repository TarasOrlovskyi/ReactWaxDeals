import editProfileStyle from './ChangePassword.module.css';
import userStyle from '../User.module.css';
import UserMessage from "../UserMessage/UserMessage";

const ChangePassword = (props) => {

  let onChangeOldPasswordText = (event) => {
    props.updateOldPassword(event.target.value);
  };

  let onChangeNewPasswordText = (event) => {
    props.updateNewPassword(event.target.value);
  };

  let onChangeConfirmNewPasswordText = (event) => {
    props.updateConfirmNewPassword(event.target.value);
  };

  return (
    <main>
      <div className="container">
        <div className="searchArea">
        </div>
        <div className={editProfileStyle.contentChangePassword + ' content'}>
          <UserMessage message={props.message} errorMessage={props.errorMessage}/>
          <div className={editProfileStyle.contentChangePassword__column + ' contentColumn'}>
            <div className={userStyle.contentUser__title}>
              <h2>Change Password</h2>
            </div>
            <form action="/password/changePassword" id="changePassword-form" method="POST"
                  className={userStyle.user + ' ' + editProfileStyle.changePasswordUser} name="form_edit"
                  onSubmit="return matchPassword();">
              <div className={userStyle.user__fieldsWrapper}>
                <div className={userStyle.user__fields + ' ' + editProfileStyle.changePasswordUser__fields}>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="password" name="oldPassword"
                           placeholder="Old password"
                           onChange={onChangeOldPasswordText} value={props.changePasswordPage.oldPassword} required/>
                  </label>
                  <div className={editProfileStyle.changePasswordUser__border}></div>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="password" name="newPassword" id="newPassword"
                           placeholder="New password"
                           onChange={onChangeNewPasswordText} value={props.changePasswordPage.newPassword}/>
                  </label>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="password" name="confirmNewPassword"
                           placeholder="Confirm new password" id="confirmNewPassword"
                           onChange={onChangeConfirmNewPasswordText}
                           value={props.changePasswordPage.confirmNewPassword}/>
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
