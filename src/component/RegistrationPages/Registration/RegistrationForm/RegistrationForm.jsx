import userStyle from "../../User.module.css";
import registrationStyle from "../Registration.module.css";
import discogsLogo from "../../../../assets/img/svg/discogs_logo.svg";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../Common/FormsControl/FormsControl";
import {emailValidation, maxLength, passwordValidation, required} from "../../../../utils/validators/validators";
import React from "react";
import {NavLink} from "react-router-dom";

const maxLength50 = maxLength(50);

const RegistrationForm = (props) => {
  return (
    <form className={userStyle.user + ' ' + registrationStyle.registrationPageUser}
          onSubmit={props.handleSubmit}>
      <div className={userStyle.user__fieldsWrapper}>
        <div className={userStyle.user__fields + ' ' + registrationStyle.registrationPageUser__fields}>
          <label className={userStyle.user__label}>
            <Field component={Input}
                   validate={[required, maxLength50, emailValidation]}
                   className={userStyle.user__input}
                   type="email"
                   name="email"
                   placeholder="Email"/>
          </label>
          <label className={userStyle.user__label}>
            <Field component={Input}
                   validate={[required, maxLength50, passwordValidation]}
                   className={userStyle.user__input}
                   type="password"
                   name="password"
                   placeholder="Password"/>
          </label>
          <label className={userStyle.user__label}>
            <Field component={Input}
                   validate={[required]}
                   className={userStyle.user__input}
                   type="password"
                   name="confirmPassword"
                   placeholder="Confirm password"/>
          </label>
          <label className={userStyle.user__label}>
            <Field component={Input}
                   className={userStyle.user__input}
                   type="text"
                   name="discogsUserName"
                   placeholder="Discogs Username"/>
          </label>
          <img className={userStyle.discogsLogo}
               src={discogsLogo}
               alt="Discogs logo"/>
        </div>
      </div>
      <NavLink className={registrationStyle.user__account} to="/signIn">I already have an account</NavLink>
      <div>
        {props.error && <div className={userStyle.summaryError}>{props.error}</div>}
      </div>
      <label className={userStyle.user__submitLabel}>
        <button className={userStyle.user__submitInput} disabled={props.isWaitResponse}>OK</button>
      </label>
    </form>
  );
}

export default reduxForm({form: "registrationForm"})(RegistrationForm);