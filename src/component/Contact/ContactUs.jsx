import contactStyle from 'src/component/Contact/ContactUs.module.css';
import userStyle from '../User.module.css';

const ContactUs = (props) => {
  let onChangeContactUsText = (event) => {
    let nameText = event.target.value;
    props.updateContactUsName(nameText);
  };

  let onChangeContactUsEmailText = (event) => {
    let emailText = event.target.value;
    props.updateContactUsEmail(emailText);
  };

  let onChangeContactUsMessageText = (event) => {
    let messageText = event.target.value;
    props.updateContactUsMessage(messageText);
  };
  document.body.style.background = "url(assets/background.jpg) no-repeat fixed center";
  document.body.style.backgroundSize = "cover";
  return (
    <main>
      <div className="container">
        <div className={contactStyle.contentContactUsPage}>
          <div className={userStyle.user__message}>
            <div id={userStyle.userMessage}>
              <div th:if="${message != null}" th:text="${message}"></div>
            </div>
          </div>
          <div className={contactStyle.contentContactUsPage__column + ' content-column'}>
            <div className={contactStyle.contentUser__title}>
              <h2>Contact us</h2>
            </div>
            <div className={userStyle.user + ' ' + contactStyle.contactUsPageUser}>
              <div className={userStyle.user__fieldsWrapper}>
                <div className={userStyle.user__fields + ' ' + contactStyle.contactUsPageUser__fields}>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} id="name" type="text" name="name" placeholder="Name"
                           required/>
                  </label>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} id="email" type="email" name="email" placeholder="Email"
                           onBlur="checkEmail(this)" required/>
                  </label>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} id="subject" type="text" name="subject"
                           placeholder="Subject" required/>
                  </label>
                  <label className={userStyle.user__label}>
                <textarea className={userStyle.user__input + ' ' + contactStyle.inputMessage} id="message"
                          name="messageContactUs"
                          placeholder="Message" required></textarea>
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