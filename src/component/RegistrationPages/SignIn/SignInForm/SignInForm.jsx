import userStyle from "../../User.module.css";
import signInStyle from "../SignIn.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../Common/FormsControl/FormsControl";
import {emailValidation, maxLength, required} from "../../../../utils/validators/validators";

const maxLength50 = maxLength(50);

const SignInForm = ({handleSubmit, error, isWaitResponse}) => {
  return (
      <form onSubmit={handleSubmit} className={userStyle.user + ' ' + signInStyle.signInUser}>
        <div className={userStyle.user__fieldsWrapper}>
          <div className={userStyle.user__fields + ' ' + signInStyle.signInUser__fields}>
            <label className={userStyle.user__label}>
              <Field className={userStyle.user__input}
                     component={Input}
                     validate={[required, maxLength50, emailValidation]}
                     type="email"
                     name="email"
                     placeholder="Email"/>
            </label>
            <label className={userStyle.user__label}>
              <Field className={userStyle.user__input}
                     component={Input}
                     validate={[required, maxLength50]}
                     type="password"
                     name="password"
                     placeholder="Password"/>
            </label>
            <div>
              {error && <div className={userStyle.summaryError}>{error}</div>}
            </div>
            <NavLink className={userStyle.user__forgotPassword} to="/recovery-password">Forgot password?</NavLink>
          </div>
        </div>
        <label className={userStyle.user__submitLabel}>
          <button className={userStyle.user__submitInput} disabled={isWaitResponse}>OK</button>
        </label>
      </form>
  );
}

export default reduxForm({form: "signInForm"})(SignInForm);