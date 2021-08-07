import alertsStyle from "./Alerts.module.css";
import letterImage from "../../../assets/img/alertImg/message_letter.png";
import closeButton from "../../../assets/img/alertImg/close_button.png";

const RegistrationAlert = (props) => {
  return (
    <div className={alertsStyle.alertWrapper}>
      <div className={alertsStyle.alertRegistration + ' ' + alertsStyle.commonAlert}>
        <div>
          <img src={letterImage} alt='letter'/>
        </div>
        <div className={alertsStyle.alertRegistration}>
          <p>Please confirm your registration</p>
          <p>by cliking the link in the email we've just send you.</p>
        </div>
        <button className={alertsStyle.alertRegistration__closeButton} onClick={props.turnOffAlert}>
          <img src={closeButton} alt="close"/>
        </button>
      </div>
    </div>

  );
}

export default RegistrationAlert;