import s from "./UserMessage.module.css";

const UserMessage = (props) => {
  return (
    <div className={s.user__message}>
      <div id="user_message">
        <div>{props.message}</div>
      </div>
    </div>
  );
}

export default UserMessage;