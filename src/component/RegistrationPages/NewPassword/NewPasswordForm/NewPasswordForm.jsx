import userStyle from "../../User.module.css";
import newPasswordStyle from "../NewPassword.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../Common/FormsControl/FormsControl";
import {maxLength, passwordValidation, required} from "../../../../utils/validators/validators";

let maxLength50 = maxLength(50);

const NewPasswordForm = ({handleSubmit, error}) => {
  return (
      <form className={userStyle.user + ' ' + newPasswordStyle.newPasswordUser} onSubmit={handleSubmit}>
        <div className={userStyle.user__fieldsWrapper}>
          <div className={userStyle.user__fields + ' ' + newPasswordStyle.newPasswordUser__fields}>
            <label className={userStyle.user__label}>
              <Field className={userStyle.user__input}
                     type="password"
                     name="newPassword"
                     placeholder="Password"
                     component={Input}
                     validate={[required, maxLength50, passwordValidation]}
              />
            </label>
            <label className={userStyle.user__label}>
              <Field className={userStyle.user__input}
                     type="password"
                     name="confirmNewPassword"
                     placeholder="Confirm password"
                     component={Input}
                     validate={[required]}
              />
            </label>
          </div>
        </div>
        <div>
          {error && <div className={userStyle.summaryError}>{error}</div>}
        </div>
        <label className={userStyle.user__submitLabel}>
          <button className={userStyle.user__submitInput}>OK</button>
        </label>
      </form>
  );
}

export default reduxForm({form: "newPasswordForm"})(NewPasswordForm);