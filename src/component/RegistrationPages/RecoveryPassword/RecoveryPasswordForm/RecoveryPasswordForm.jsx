import {Field, reduxForm} from "redux-form";
import userStyle from "../../User.module.css";
import recoveryPasswordStyle from "../RecoveryPassword.module.css";
import React from "react";
import {Input} from "../../../Common/FormsControl/FormsControl";
import {emailValidation, maxLength, required} from "../../../../utils/validators/validators";

const maxLength50 = maxLength(50);

const RecoveryPasswordForm = ({handleSubmit, error}) => {
  return (
      <form className={userStyle.user + ' ' + recoveryPasswordStyle.recoveryUser} onSubmit={handleSubmit}>
        <div className={userStyle.user__fieldsWrapper}>
          <div className={userStyle.user__fields + ' ' + recoveryPasswordStyle.recoveryUser__fields}>
            <label className={userStyle.user__label}>
              <Field className={userStyle.user__input}
                     type="email"
                     name="email"
                     placeholder="Email"
                     component={Input}
                     validate={[required, maxLength50, emailValidation]}
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

export default reduxForm({form: "recoveryPasswordForm"})(RecoveryPasswordForm)