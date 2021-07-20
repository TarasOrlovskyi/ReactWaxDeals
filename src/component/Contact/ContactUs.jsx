import contactStyle from './ContactUs.module.css';
import userStyle from '../RegistrationPages/User.module.css';
import UserMessage from "../RegistrationPages/UserMessage/UserMessage";

const ContactUs = (props) => {
  let onChangeNameText = (event) => {
    props.updateName(event.target.value);
  };

  let onChangeEmailText = (event) => {
    props.updateEmail(event.target.value);
  };

  let onChangeMessageText = (event) => {
    props.updateMessage(event.target.value);
  };
  document.body.style.background = "url(assets/background.jpg) no-repeat fixed center";
  document.body.style.backgroundSize = "cover";
  return (
    <main>
      <div className="container">
        <div className={contactStyle.contentContactUsPage}>
          <UserMessage/>
          <div className={contactStyle.contentContactUsPage__column + ' content-column'}>
            <div className={userStyle.contentUser__title}>
              <h2>Contact us</h2>
            </div>
            <div className={userStyle.user + ' ' + contactStyle.contactUsPageUser}>
              <div className={userStyle.user__fieldsWrapper}>
                <div className={userStyle.user__fields + ' ' + contactStyle.contactUsPageUser__fields}>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} id="name" type="text" name="name" placeholder="Name"
                           onChange={onChangeNameText} value={props.contactUsPage.name} required/>
                  </label>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} id="email" type="email" name="email" placeholder="Email"
                           onBlur="checkEmail(this)" onChange={onChangeEmailText} value={props.contactUsPage.email}
                           required/>
                  </label>
                  <label className={userStyle.user__label}>
                    <textarea className={userStyle.user__input + ' ' + contactStyle.inputMessage} id="message"
                              name="messageContactUs" onChange={onChangeMessageText} value={props.contactUsPage.message}
                              placeholder="Message" required/>
                  </label>
                </div>
              </div>
              <label className={userStyle.user__submitLabel}>
                <input className={userStyle.user__submitInput} id="button" type="submit" value="SEND"/>
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactUs;