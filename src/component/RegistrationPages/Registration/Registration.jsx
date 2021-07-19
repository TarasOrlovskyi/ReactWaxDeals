import s from './Registration.module.css';
import userStyle from './../User.module.css';
import UserMessage from "../UserMessage/UserMessage";
import discogsLogo from "../../../assets/img/svg/discogs_logo.svg";
import {updateConfirmPassword} from "../../../redux/registration-reducer";

const Registration = (props) => {

  let onChangeEmailText = (event) => {
    props.updateEmail(event.target.value);
  };

  let onChangePasswordText = (event) => {
    props.updatePassword(event.target.value);
  };

  let onChangeConfirmPasswordText = (event) => {
    props.updateConfirmPassword(event.target.value);
  };

  let onChangeDiscogsUsernameText = (event) => {
    props.updateDiscogsUsername(event.target.value);
  };

  document.body.style.background = "url(assets/background.jpg) no-repeat fixed center";
  document.body.style.backgroundSize = "cover";
  return (
    <main className="main">
      <div className="container">

        <div className="searchArea">
        </div>

        <div className={s.contentRegistrationPage}>

          <UserMessage/>

          <div className={s.contentRegistrationPage__column + ' contentColumn'}>

            <div className={userStyle.contentUser__title}>
              <h2>Registration</h2>
            </div>

            <form action="/signUp" method="POST" className={userStyle.user + ' ' + s.registrationPageUser}
                  name="form_reg"
                  onSubmit="return matchPassword();">
              <div className={userStyle.user__fieldsWrapper}>
                <div className={userStyle.user__fields + ' ' + s.registrationPageUser__fields}>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="email" name="email" id="email" placeholder="Email"
                           onChange={onChangeEmailText} value={props.registrationPage.email}
                           required/>
                  </label>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="password" name="password" placeholder="Password"
                           onChange={onChangePasswordText} value={props.registrationPage.password} id="password"
                           required/>
                  </label>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="password" name="confirmPassword" id="confirmPassword"
                           onChange={onChangeConfirmPasswordText} value={props.registrationPage.confirmPassword}
                           placeholder="Confirm password" required/>
                  </label>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="text" name="discogsUserName"
                           value={props.registrationPage.discogsUsername}
                           onChange={onChangeDiscogsUsernameText} placeholder="Discogs Username"/>
                  </label>
                  <img className={userStyle.discogsLogo}
                       src={discogsLogo}
                       alt="Discogs logo"/>
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

export default Registration;