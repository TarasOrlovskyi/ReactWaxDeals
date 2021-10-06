import registrationSignsStyle from "../RegistrationSigns.module.css";
import loggedInIcon from '../../../../assets/img/loggedInIcon.png';
import PopUpLoggedInUserMenu from "../../PopUpUserMenu/PopUpUserMenu";
import React from "react";

const AuthedSigns = React.memo(({logOut, isAuthedUserWindow, switchAuthedUserWindow}) => {

  return (
      <div className={registrationSignsStyle.header__loginSigns}>
        <div className={registrationSignsStyle.header__userIcon}
             onClick={switchAuthedUserWindow}>
          <img src={loggedInIcon} alt="logged in user icon"/>
        </div>

        {
          isAuthedUserWindow &&
          <PopUpLoggedInUserMenu logOut={logOut}/>
        }

      </div>
  );
})

export default AuthedSigns;