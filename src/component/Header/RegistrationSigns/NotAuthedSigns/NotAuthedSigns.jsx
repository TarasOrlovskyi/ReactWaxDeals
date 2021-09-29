import {NavLink} from "react-router-dom";
import registrationSignsStyle from "../RegistrationSigns.module.css";

const NotAuthedSigns = () => {
  return (
      <div className={registrationSignsStyle.header__loginSigns}>
        <NavLink to="/signIn" className={registrationSignsStyle.header__loginButtons}>
          <button className={registrationSignsStyle.header__loginButtons__button}><span>Log in</span></button>
        </NavLink>
        <NavLink to="/signUp" className={registrationSignsStyle.header__loginButtons}>
          <button
              className={registrationSignsStyle.header__loginButtons__button + ' ' + registrationSignsStyle.header__loginButtons__button_signUpButton}>Sign
            up
          </button>
        </NavLink>
      </div>
  );
}

export default NotAuthedSigns;