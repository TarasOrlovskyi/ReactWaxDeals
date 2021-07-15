import React from "react";
import RectangleLine from "./RectangleLine/RectangleLine.jsx";
import SocialNetwork from "./SocialNetwork/SocialNetwork.jsx";
import s from "./SignIn.module.css";
import userStyle from "../User.module.css";
import {NavLink} from "react-router-dom";
import UserMessage from "../UserMessage/UserMessage.jsx";

const SignIn = (props) => {
  document.body.style.background = "url(assets/background.jpg) no-repeat fixed center";
  document.body.style.backgroundSize = "cover";
  return (
    <main className="main">
      <div className="container">

        <div className="searchArea">
        </div>

        <div className={s.contentSignIn}>
          <UserMessage/>
          <div className={s.contentSignIn__column + ' contentColumn'}>
            <div className={userStyle.contentUser__title}>
              <h2>Login</h2>
            </div>
            <form action="/signIn" method="POST" className={userStyle.user + ' ' + s.signInUser} name="form_reg">
              <div className={userStyle.user__fieldsWrapper}>
                <div className={userStyle.user__fields + ' ' + s.signInUser__fields}>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="email" name="email" placeholder="Email"
                           value={props.email} onBlur="checkEmail(this)" required/>
                  </label>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="password" name="password"
                           placeholder="Password"
                           required/>
                  </label>
                  <NavLink to="/recoveryPassword">Forgot password?</NavLink>
                </div>
              </div>
              <label className={userStyle.user__submitLabel}>
                <input className={userStyle.user__submitInput} type="submit" value="OK"/>
              </label>
            </form>
            <RectangleLine/>
            <SocialNetwork/>
          </div>
        </div>
      </div>
    </main>
  );
}
export default SignIn;

