import userStyle from "../../User.module.css";
import s from "../NewPassword.module.css";
import React from "react";

const NewPasswordForm = (props) => {

  let onChangeNewPasswordText = (event) => {
    props.updateNewPassword(event.target.value);
  };
  let onChangeConfirmNewPasswordText = (event) => {
    props.updateConfirmNewPassword(event.target.value);
  };

  return (
    <form action="/new-password/new-password" method="POST" name="form_reg"
          className={userStyle.user + ' ' + s.newPasswordUser}
          onSubmit="return matchPassword();">
      <div className={userStyle.user__fieldsWrapper}>
        <div className={userStyle.user__fields + ' ' + s.newPasswordUser__fields}>
          <label className={userStyle.user__label}>
            <input className={userStyle.user__input} type="password" name="password" placeholder="Password"
                   onChange={onChangeNewPasswordText} value={props.newPasswordPage.newPassword}
                   id="password" onBlur="checkRegex(this)" required/>
          </label>
          <label className={userStyle.user__label}>
            <input className={userStyle.user__input} type="password" name="confirmPassword" id="confirmPassword"
                   placeholder="Confirm password" required
                   onChange={onChangeConfirmNewPasswordText}
                   value={props.newPasswordPage.confirmNewPassword}/>
          </label>
        </div>
      </div>
      <input type="hidden" name="recoveryToken" value="${recovery Token}"/>
    </form>
  );
}

export default NewPasswordForm;