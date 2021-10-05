import alertsStyle from "./Alert.module.css";
import closeButtonImage from "../../../assets/img/alertImg/close_button.png";

const MessageAlert = ({letterImage, messages, agreeButtons, closeButton, turnOffAlert}) => {
  return (
      <div className={alertsStyle.alertWrapper}>
        <div className={alertsStyle.pageAlert + ' ' + alertsStyle.commonAlert + ' ' + alertsStyle.commonAlert_big}>
          <div className={alertsStyle.pageAlert__message + ' ' + alertsStyle.pageAlert__message_big}>
            {letterImage &&
            <div className={alertsStyle.pageAlert__picture}>
              <img src={letterImage} alt='letter'/>
            </div>
            }
            {messages}
          </div>
          {agreeButtons &&
          <div className={alertsStyle.pageAlert__buttonsRow}>
            <div className={alertsStyle.pageAlert__yesNoButtons}>
              <button onClick={agreeButtons} className={alertsStyle.pageAlert__answerButton}>Yes</button>
              <button onClick={closeButton} className={alertsStyle.pageAlert__answerButton}>No</button>
            </div>
          </div>
          }
          {turnOffAlert &&
          <button className={alertsStyle.pageAlert__closeButton} onClick={turnOffAlert}>
            <img src={closeButtonImage} alt="close"/>
          </button>
          }
        </div>
      </div>
  );
}

export default MessageAlert;