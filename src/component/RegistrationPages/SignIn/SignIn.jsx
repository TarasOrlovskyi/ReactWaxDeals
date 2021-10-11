import React from "react";
import RectangleLine from "./RectangleLine/RectangleLine.jsx";
import SocialNetwork from "./SocialNetwork/SocialNetwork.jsx";
import signInStyle from "./SignIn.module.css";
import userStyle from "../User.module.css";
import SignInForm from "./SignInForm/SignInForm";
import {NavLink, Redirect} from "react-router-dom";
import MessageAlert from "../../Common/Alert/MessageAlert";

const SignIn = ({isAuth, onSubmit, isInfoAlert, pageInfo, turnOffAlert, doGoogleLogIn, doFacebookLogIn, isWaitResponse}) => {

  if (isAuth) {
    return <Redirect to={"/profile"}/>
  }

  return (
      <main className="main">
        <div className="container">
          <div className="searchArea unsetHeight">
          </div>
          <div className={signInStyle.contentSignIn}>
            {
              (isInfoAlert && pageInfo === "ConfirmEmail") &&
              <MessageAlert turnOffAlert={turnOffAlert}
                            messages={"Your email is verified. You can log in now."}
              />
            }
            {
              (isInfoAlert && pageInfo === "NewPasswordUpdated") &&
              <MessageAlert turnOffAlert={turnOffAlert}
                            messages={"Your password has been changed."}
              />
            }
            {(isInfoAlert && pageInfo === "ChangePassword") &&
            <MessageAlert turnOffAlert={turnOffAlert}
                          messages={"Your password has been changed. Please, login with new password"}
            />
            }
            <div className={signInStyle.contentSignIn__column + ' contentColumn'}>
              <div className={userStyle.contentUser__title}>
                <h2>Login</h2>
              </div>
              <SignInForm onSubmit={onSubmit} isWaitResponse={isWaitResponse}/>
            </div>
            <RectangleLine/>
            <SocialNetwork doGoogleLogIn={doGoogleLogIn} doFacebookLogIn={doFacebookLogIn}/>
            <NavLink className={signInStyle.signInUser__register} to="/signUp">Register by email</NavLink>

          </div>
        </div>
      </main>
  );

}

export default SignIn;