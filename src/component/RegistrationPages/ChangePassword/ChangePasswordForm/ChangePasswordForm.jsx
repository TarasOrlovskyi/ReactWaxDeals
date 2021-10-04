import userStyle from "../../User.module.css";
import editProfileStyle from "../ChangePassword.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../Common/FormsControl/FormsControl";
import {maxLength, passwordValidation, required} from "../../../../utils/validators/validators";

const maxLength50 = maxLength(50);

const ChangePasswordForm = (props) => {
  return (
    <form className={userStyle.user + ' ' + editProfileStyle.changePasswordUser}
          onSubmit={props.handleSubmit}>
      <div className={userStyle.user__fieldsWrapper}>
        <div className={userStyle.user__fields + ' ' + editProfileStyle.changePasswordUser__fields}>
          <label className={userStyle.user__label}>
            <Field className={userStyle.user__input}
                   type="password"
                   name="oldPassword"
                   placeholder="Old password"
                   component={Input}
                   validate={[required, maxLength50, passwordValidation]}
            />
          </label>
          <div className={editProfileStyle.changePasswordUser__border}></div>
          <label className={userStyle.user__label}>
            <Field className={userStyle.user__input}
                   type="password"
                   name="newPassword"
                   placeholder="New password"
                   component={Input}
                   validate={[required, maxLength50, passwordValidation]}
            />
          </label>
          <label className={userStyle.user__label}>
            <Field className={userStyle.user__input}
                   type="password"
                   name="confirmNewPassword"
                   placeholder="Confirm new password"
                   component={Input}
                   validate={[required, maxLength50, passwordValidation]}
            />
          </label>
        </div>
      </div>
      <div>
        {props.error && <div className={userStyle.summaryError}>{props.error}</div>}
      </div>
      <div className={userStyle.user__submitButtons}>
        <label className={userStyle.user__submitLabel}>
          <button className={userStyle.user__submitInput} disabled={props.isWaitResponse}>SAVE</button>
        </label>
      </div>
    </form>
  );
}

export default reduxForm({form: "changePasswordForm"})(ChangePasswordForm);