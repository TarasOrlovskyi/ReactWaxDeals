import s from './RecoveryPassword.module.css';
import userStyle from './../User.module.css';
import UserMessage from "../UserMessage/UserMessage";

const RecoveryPassword = (props) => {

  let onChangeEmailText = (event) => {
    props.updateEmail(event.target.value);
  };

  // document.body.style.background = "url(assets/background.jpg) no-repeat fixed center";
  // document.body.style.backgroundSize = "cover";
  return (

    <main className="main">
      <div className="container">

        <div className="searchArea">
        </div>

        <div className={s.contentRecoveryPassword}>

          <UserMessage message={props.message}/>

          <div className={s.contentRecoveryPassword__column + ' contentColumn'}>

            <div className={userStyle.contentUser__title}>
              <h2>Password recovery</h2>
            </div>

            <form action="/recoveryPassword" method="POST" className={userStyle.user + ' ' + s.recoveryUser}
                  name="form_reg">
              <div className={userStyle.user__fieldsWrapper}>
                <div className={userStyle.user__fields + ' ' + s.recoveryUser__fields}>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="email" name="email" id="email" placeholder="Email"
                           onChange={onChangeEmailText} onBlur="checkEmail(this)"
                           value={props.recoveryPasswordPage.email} required/>
                  </label>
                </div>
              </div>
              <label className={userStyle.user__submitLabel}>
                <input className={userStyle.user__submitInput} type="submit" value="OK"/>
              </label>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RecoveryPassword;