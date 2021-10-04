import alertsStyle from "./Alert.module.css";
import closeButton from "../../../assets/img/alertImg/close_button.png";

const MessageAlert = (props) => {
  return (
    <div className={alertsStyle.alertWrapper}>
      <div className={alertsStyle.pageAlert + ' ' + alertsStyle.commonAlert + ' ' + alertsStyle.commonAlert_big}>
        <div className={alertsStyle.pageAlert__message + ' ' + alertsStyle.pageAlert__message_big}>
          {props.letterImage &&
          <div className={alertsStyle.pageAlert__picture}>
            <img src={props.letterImage} alt='letter'/>
          </div>
          }
          {props.messages}
        </div>
        {props.agreeButtons &&
        <div className={alertsStyle.pageAlert__buttonsRow}>
          <div className={alertsStyle.pageAlert__yesNoButtons}>
            <button onClick={props.agreeButtons} className={alertsStyle.pageAlert__answerButton}>Yes</button>
            <button onClick={props.closeButton} className={alertsStyle.pageAlert__answerButton}>No</button>
          </div>
        </div>
        }
        {props.turnOffAlert &&
        <button className={alertsStyle.pageAlert__closeButton} onClick={props.turnOffAlert}>
          <img src={closeButton} alt="close"/>
        </button>
        }
      </div>
    </div>

  );
}

export default MessageAlert;