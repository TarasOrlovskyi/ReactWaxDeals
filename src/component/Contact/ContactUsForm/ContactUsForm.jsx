import userStyle from "../../RegistrationPages/User.module.css";
import contactStyle from "../ContactUs.module.css";
import {Field, formValueSelector, reduxForm} from "redux-form";
import {Input, Textarea} from "../../Common/FormsControl/FormsControl";
import {emailValidation, maxLength, required} from "../../../utils/validators/validators";
import React from "react";
import Recaptcha from 'react-google-invisible-recaptcha';
import {connect} from "react-redux";

const maxLength50 = maxLength(50);
const maxLength300 = maxLength(300);

class ContactUsForm extends React.Component {

  onResolved = () => {
    const {
      name,
      email,
      contactUsMessage
    } = this.props
    alert( 'Recaptcha resolved with response: ' + this.recaptcha.getResponse() );
    debugger
    if (name !== undefined && email !== undefined && contactUsMessage !== undefined) {
      this.props.send({name, email, contactUsMessage});
    }
  }

  checkCaptcha = () => {
    debugger
    this.recaptcha.execute();
  }

  render() {
    return (
      <div>
        {/*<form onSubmit={this.sendGoogleRequest}>*/}
        <div className={userStyle.user + ' ' + contactStyle.contactUsPageUser}>
          <div className={userStyle.user__fieldsWrapper}>
            <div className={userStyle.user__fields + ' ' + contactStyle.contactUsPageUser__fields}>
              <label className={userStyle.user__label}>
                <Field className={userStyle.user__input}
                       component={Input}
                       validate={[required, maxLength50]}
                       type="text"
                       name="name"
                       placeholder="Name"
                />
              </label>
              <label className={userStyle.user__label}>
                <Field className={userStyle.user__input}
                       component={Input}
                       validate={[required, maxLength50, emailValidation]}
                       type="email"
                       name="email"
                       placeholder="Email"
                />
              </label>
              <label className={userStyle.user__label}>
                <Field className={userStyle.user__input + ' ' + userStyle.inputMessage}
                       component={Textarea}
                       validate={[required, maxLength300]}
                       name="contactUsMessage"
                       placeholder="Message"
                />
              </label>
            </div>
          </div>
          <div>
            {this.props.error && <div className={userStyle.summaryError}>{this.props.error}</div>}
          </div>
          <Recaptcha
            sitekey="6LdZuvkbAAAAAOM5PMkxEQtNxeMubYwgUtY4LP_h"
            ref={ref => this.recaptcha = ref}
            onResolved={this.onResolved}
          />
          <label className={userStyle.user__submitLabel}>
            <button className={userStyle.user__submitInput} onClick={this.checkCaptcha}>SEND</button>
          </label>
        </div>
      </div>
    );
  }
}

ContactUsForm = reduxForm({form: "contactUsForm"})(ContactUsForm);

const selector = formValueSelector('contactUsForm')
ContactUsForm = connect(state => {
  const { name, email, contactUsMessage } = selector(state, 'name', 'email', 'contactUsMessage')
  return {
    name,
    email,
    contactUsMessage
  }
})(ContactUsForm)

export default ContactUsForm;