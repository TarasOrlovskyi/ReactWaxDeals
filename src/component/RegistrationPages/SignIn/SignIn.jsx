import React from "react";
import RectangleLine from "./RectangleLine/RectangleLine.jsx";
import SocialNetwork from "./SocialNetwork/SocialNetwork.jsx";
import signInStyle from "./SignIn.module.css";
import userStyle from "../User.module.css";
import UserMessage from "../UserMessage/UserMessage.jsx";
import SignInForm from "./SignInForm/SignInForm";
import {Redirect} from "react-router-dom";
import MessageAlert from "../../Common/Alert/MessageAlert";

const SignIn = (props) => {

  if (props.isAuth) {
    return <Redirect to={"/profile"}/>
  }

  let sendSignInCredentials = (formData) => {
    props.doLogIn(formData.email, formData.password);
  }

  return (
    <main className="main">
      <div className="container">
        <div className="searchArea">
        </div>
        <div className={signInStyle.contentSignIn}>
          {/*<UserMessage message={props.message} errorMessage={props.errorMessage}/>*/}
          {
            props.isMailConfirm &&
              <MessageAlert turnOffAlert={props.turnOffAlert}
                            messages={"Your email is verified. You can log in now."}
              />
          }
          <div className={signInStyle.contentSignIn__column + ' contentColumn'}>
            <div className={userStyle.contentUser__title}>
              <h2>Login</h2>
            </div>
            <SignInForm onSubmit={sendSignInCredentials}/>
            <RectangleLine/>
            <SocialNetwork/>
          </div>
        </div>
      </div>
    </main>
  );

}

export default SignIn;

