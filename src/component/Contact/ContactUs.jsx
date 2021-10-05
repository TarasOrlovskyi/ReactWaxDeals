import contactStyle from './ContactUs.module.css';
import userStyle from '../RegistrationPages/User.module.css';
import ContactUsForm from "./ContactUsForm/ContactUsForm";
import React from "react";
import MessageAlert from "../Common/Alert/MessageAlert";
import letterImage from "../../assets/img/alertImg/message_letter.png";

const ContactUs = ({onSubmit, turnOffAlert, isInfoAlert, pageInfo, isWaitResponse}) => {

  let alertString = <p>Your letter has been sent.&nbsp; We will contact you as soon as possible.</p>

  return (
      <main>
        <div className="container">
          <div className="searchArea">
          </div>
          <div className={contactStyle.contentContactUsPage}>
            {
              (isInfoAlert && pageInfo === "ContactUs") &&
              <MessageAlert
                  turnOffAlert={turnOffAlert}
                  messages={alertString}
                  letterImage={letterImage}
              />
            }
            <div className={contactStyle.contentContactUsPage__column + ' content-column'}>
              <div className={userStyle.contentUser__title}>
                <h2>Contact us</h2>
              </div>
              <ContactUsForm onSubmit={onSubmit} isWaitResponse={isWaitResponse}/>
            </div>
          </div>
        </div>
      </main>
  );
}

export default ContactUs;