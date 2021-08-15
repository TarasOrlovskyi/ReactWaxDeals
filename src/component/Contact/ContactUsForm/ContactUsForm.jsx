import userStyle from "../../RegistrationPages/User.module.css";
import contactStyle from "../ContactUs.module.css";
import {Field, formValueSelector, reduxForm} from "redux-form";
import {Input, Textarea} from "../../Common/FormsControl/FormsControl";
import {emailValidation, maxLength, required} from "../../../utils/validators/validators";
import React from "react";
import Recaptcha from 'react-google-invisible-recaptcha';
import {connect} from "react-redux";
import axios from "axios";

const maxLength50 = maxLength(50);
const maxLength300 = maxLength(300);

class ContactUsForm extends React.Component {

  // onResolved = async () => {
  //   const {
  //     name,
  //     email,
  //     contactUsMessage
  //   } = this.props
  //   debugger
  //   alert('Recaptcha resolved with response: ' + this.recaptcha.getResponse());
  //   let recaptchaToken = this.recaptcha.getResponse();
  //   debugger
  //   // let response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=6LdZuvkbAAAAAH4wTQbE5dsdSRfO4giVlnR6l_DY&response=${recaptchaToken}`);
  //   // let localhost = axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe&response=${recaptchaToken}`);
  //   debugger
  //   this.props.handleSubmit(data => {
  //     let newData = {...data, recaptchaToken}
  //     debugger
  //     this.props.onSubmit(newData);
  //   });
  //   // if (name !== undefined && email !== undefined && contactUsMessage !== undefined) {
  //   //   this.props.onSubmit({name, email, contactUsMessage, recaptchaToken});
  //   //   // this.props.send({name, email, contactUsMessage, recaptchaToken});
  //   // } else {
  //   //   this.recaptcha.reset();
  //   // }
  // }

  checkCaptcha = async () => {
    // e.preventDefault();
    alert('Recaptcha resolved with response: ' + this.recaptcha.getResponse());
    debugger
    await this.recaptcha.execute();
    alert('Recaptcha resolved with response: ' + this.recaptcha.getResponse());
  }

  render() {
    return (
      <form>
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
            // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" //localhost
            ref={ref => this.recaptcha = ref}
            // onResolved={this.onResolved}
          />
          {/*secret key - "6LdZuvkbAAAAAH4wTQbE5dsdSRfO4giVlnR6l_DY"*/}
          {/*secret key for localhost - "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"*/}
          <label className={userStyle.user__submitLabel}>
            <button type="button" className={userStyle.user__submitInput}
                    // onClick={this.checkCaptcha}>SEND
                    onClick={this.props.handleSubmit(data => {
                      this.checkCaptcha()
                        .then(response => {
                          let recaptchaToken = this.recaptcha.getResponse();
                          let formData = {...data, recaptchaToken}
                          debugger
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

// const selector = formValueSelector('contactUsForm')
// ContactUsForm = connect(state => {
//   debugger
//   const {
//     name,
//     email,
//     contactUsMessage
//   } = selector(state, 'name', 'email', 'contactUsMessage')
//   return {
//     name,
//     email,
//     contactUsMessage
//   }
// })(ContactUsForm)

export default ContactUsForm;