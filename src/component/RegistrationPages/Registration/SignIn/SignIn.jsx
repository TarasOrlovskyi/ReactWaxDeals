import React from "react";
import RectangleLine from "./RectangleLine/RectangleLine.jsx";
import SocialNetwork from "./SocialNetwork/SocialNetwork.jsx";
import s from "../../../../../../../Desktop/SignIn/SignIn.module.css";
import userStyle from "../User.module.css";
import UserMessage from "../UserMessage/UserMessage";
import {NavLink} from "react-router-dom";


const SignIn = (props) => {
    return (

        <main className="main">

            <div className="container">

                <div className={s.contentSignIn}>

                    <UserMessage />

                    <div className={s.contentSignIn__column + ' contentColumn'}>

                        <div className={userStyle.contentUser__title}>
                            <h2>Login</h2>
                        </div>

                        <form action="/signIn" method="POST" className={'user' + s.signInUser} name="form_reg">
                            <div className="user__fields-wrapper">
                                <div className={'user__fields' + s.signInUser__fields}>
                                    <label className="user__label">
                                        <input className="user__input" type="email" name="email" placeholder="Email"
                                               value={props.email} onBlur="checkEmail(this)" required/>
                                    </label>


                                    <label className="user__label">
                                        <input className="user__input" type="password" name="password"
                                               placeholder="Password"
                                               required/>
                                    </label>
                                    <NavLink to="/recoveryPassword">Forgot password?</NavLink>
                                </div>
                            </div>

                            <div className={s.user__submit}>
                                <label className="user__submit-label">
                                    <input className="user__submit-input" type="submit" value="OK"/>
                                </label>
                            </div>

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

