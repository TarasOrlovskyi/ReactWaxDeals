import userStyle from "../../RegistrationPages/User.module.css";
import contactStyle from "../ContactUs.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../Common/FormsControl/FormsControl";
import {emailValidation, maxLength, required} from "../../../utils/validators/validators";
import React from "react";
import Recaptcha from 'react-google-invisible-recaptcha';

const maxLength50 = maxLength(50);
const maxLength300 = maxLength(300);

class ContactUsForm extends React.Component {

  checkCaptcha = async () => {
    await this.recaptcha.execute();
  }

  render() {
    return (
      <form>
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
          />
          {/*secret key - "6LdZuvkbAAAAAH4wTQbE5dsdSRfO4giVlnR6l_DY"*/}
          <label className={userStyle.user__submitLabel}>
            <button type="button" className={userStyle.user__submitInput}
                    onClick={this.props.handleSubmit(data => {
                      this.checkCaptcha()
                        .then(response => {
                          let recaptchaToken = this.recaptcha.getResponse();
                          let formData = {...data, recaptchaToken}
                          this.recaptcha.reset();
                          this.props.onSubmit(formData);
                        })
                    })}>SEND
            </button>
          </label>
        </div>
      </form>
    );
  }
}

ContactUsForm = reduxForm({form: "contactUsForm"})(ContactUsForm);

export default ContactUsForm;