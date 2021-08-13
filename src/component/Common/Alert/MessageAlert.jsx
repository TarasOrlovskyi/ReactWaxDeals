import alertsStyle from "./Alert.module.css";
import closeButton from "../../../assets/img/alertImg/close_button.png";

const MessageAlert = (props) => {
  return (
    <div className={alertsStyle.alertWrapper}>
      <div className={alertsStyle.alertRegistration + ' ' + alertsStyle.commonAlert}>

        {props.letterImage &&
          <div>
            <img src={props.letterImage} alt='letter'/>
          </div>
        }
        <div className={alertsStyle.alertRegistration}>
          {props.messages}
        </div>
        {props.turnOffAlert &&
        <button className={alertsStyle.alertRegistration__closeButton} onClick={props.turnOffAlert}>
          <img src={closeButton} alt="close"/>
        </button>
        }
      </div>
    </div>

  );
}

export default MessageAlert;