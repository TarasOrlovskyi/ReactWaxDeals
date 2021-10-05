import popUpUserPict from '../../../assets/img/popUpUserPict.png';
import popUpUserMenuStyle from "./PopUpUserMenu.module.css";
import {NavLink} from "react-router-dom";

const PopUpUserMenu = ({logOut}) => {
  return (
      <div className={popUpUserMenuStyle.popUp__body}>
        <div className={popUpUserMenuStyle.popUp__image}>
          <img src={popUpUserPict} alt="user pict"/>
        </div>
        <NavLink to="/profile" className={popUpUserMenuStyle.popUp__row}>
          <button className={popUpUserMenuStyle.popUp__row__upperButton}>Edit profile</button>
        </NavLink>
        <NavLink to="/" className={popUpUserMenuStyle.popUp__row}>
          <button className={popUpUserMenuStyle.popUp__row__lowerButton}
                  onClick={logOut}>Logout
          </button>
        </NavLink>
      </div>
  );
}

export default PopUpUserMenu;