import registrationSignsStyle from "../RegistrationSigns.module.css";
import loggedInIcon from '../../../../assets/img/loggedInIcon.png';
import PopUpLoggedInUserMenu from "../../PopUpUserMenu/PopUpUserMenu";

const AuthedSigns = (props) => {
  return (
      <div className={registrationSignsStyle.header__loginSigns}>
        <div className={registrationSignsStyle.header__userIcon}
             onClick={props.switchAuthedUserWindow}>
          <img src={loggedInIcon} alt="logged in user icon"/>
        </div>

        {
          props.isAuthedUserWindow &&
          <PopUpLoggedInUserMenu logOut={props.logOut}/>
        }

      </div>
  );
}

export default AuthedSigns;