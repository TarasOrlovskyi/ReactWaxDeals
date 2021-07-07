import s from './RecoveryPassword.module.css';
import userStyle from './../User.module.css';
import UserMessage from "../UserMessage/UserMessage";

const RecoveryPassword = (props) => {
  return (
    <main className="main">

      <div className="container">
        <div className={s.contentRecoveryPassword}>

          <UserMessage message={props.message}/>

          <div className={s.contentRecoveryPassword__column + ' contentColumn'}>

            <div className={userStyle.contentUser__title}>
              <h2>Password recovery</h2>
            </div>

            <form action="/recoveryPassword" method="POST" className={userStyle.user + ' ' + s.recoveryUser} name="form_reg">
              <div className={userStyle.user__fieldsWrapper}>
                <div className={userStyle.user__fields + ' ' + s.recoveryUser__fields}>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="email" name="email" id="email" placeholder="Email"
                           onBlur="checkEmail(this)" value={props.email} required />
                  </label>
                  {/*{
                    function checkEmail(emailInput) {
                      var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                      if (emailInput.value.match(mailformat)) {
                        document.getElementById('user_message').innerHTML = " ";
                        return true;
                      } else {
                        document.getElementById('user_message').innerHTML = "You have entered an invalid email address!";
                        document.form_reg.email.focus();
                        return false;
                      }
                    }
                  }*/}
                </div>
              </div>
              <label className={userStyle.user__submitLabel}>
                <input className={userStyle.user__submitInput} type="submit" value="OK" />
              </label>
            </form>

          </div>

        </div>
      </div>

    </main>
  );
}

export default RecoveryPassword;