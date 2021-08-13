import contactStyle from './ContactUs.module.css';
import userStyle from '../RegistrationPages/User.module.css';
import ContactUsForm from "./ContactUsForm/ContactUsForm";
import UserMessage from "../RegistrationPages/UserMessage/UserMessage";
import React from "react";
import MessageAlert from "../Common/Alert/MessageAlert";
import letterImage from "../../assets/img/alertImg/message_letter.png";

const ContactUs = (props) => {

  let sendContactUsData = (formData) => {
    debugger
    props.sendContactUsForm(formData.name, formData.email, formData.contactUsMessage);
  }

  return (
    <main>
      <div className="container">
        <div className="searchArea">
        </div>
        <div className={contactStyle.contentContactUsPage}>
          {
            props.isContactUsSuccess &&
              <MessageAlert
                turnOffAlert={props.turnOffAlert}
                messages={["Your letter has been sent.","We will contact you as soon as possible."]}
                letterImage={letterImage}
              />
          }
          {/*<UserMessage message={props.message} errorMessage={props.errorMessage}/>*/}
          <div className={contactStyle.contentContactUsPage__column + ' content-column'}>
            <div className={userStyle.contentUser__title}>
              <h2>Contact us</h2>
            </div>
            <ContactUsForm send={sendContactUsData}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactUs;