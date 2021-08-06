import userStyle from "../../User.module.css";
import signInStyle from "../SignIn.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../Common/FormsControl/FormsControl";
import {emailValidation, maxLength, passwordValidation, required} from "../../../../utils/validators/validators";

const maxLength35 = maxLength(35);

const SignInForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={userStyle.user + ' ' + signInStyle.signInUser}>
      <div className={userStyle.user__fieldsWrapper}>
        <div className={userStyle.user__fields + ' ' + signInStyle.signInUser__fields}>
          <label className={userStyle.user__label}>
            <Field className={userStyle.user__input}
                   component={Input}
                   validate={[required, maxLength35, emailValidation]}
                   type="email"
                   name="email"
                   placeholder="Email"/>
          </label>
          <label className={userStyle.user__label}>
            <Field className={userStyle.user__input}
                   component={Input}
                   validate={[required, maxLength35, passwordValidation]}
                   type="password"
                   name="password"
                   placeholder="Password"/>
          </label>
          <div>
            {props.error && <div className={signInStyle.summaryError}>{props.error}</div>}
          </div>
          <NavLink to="/recovery-password">Forgot password?</NavLink>
        </div>
      </div>
      <label className={userStyle.user__submitLabel}>
        <button className={userStyle.user__submitInput}>OK</button>
        {/*<Field component="input" className={userStyle.user__submitInput} type="submit" value="OK"/>*/}
      </label>
    </form>
  );
}

export default reduxForm({form: "signInForm"})(SignInForm);