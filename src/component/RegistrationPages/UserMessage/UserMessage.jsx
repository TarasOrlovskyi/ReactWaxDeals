import s from "./UserMessage.module.css";

const UserMessage = (props) => {
  return (
    <div className={s.user__message}>
      <div id="user_message">
        <div>{!(props.message + '').includes('undefined') && props.message}</div>
        <div>{!(props.errorMessage + '').includes('undefined') && props.errorMessage}</div>
      </div>
    </div>
  );
}

export default UserMessage;