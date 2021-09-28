import popUpUserPict from '../../../assets/img/popUpUserPict.png';
import PopUpUserMenuStyle from "./PopUpUserMenu.module.css";
import {NavLink} from "react-router-dom";

const PopUpUserMenu = (props) => {
  return (
      <div className={PopUpUserMenuStyle.popUp__body}>
        <div className={PopUpUserMenuStyle.popUp__image}>
          <img src={popUpUserPict} alt="user pict"/>
        </div>
        <NavLink to="/profile" className={PopUpUserMenuStyle.popUp__row}>
          <button className={PopUpUserMenuStyle.popUp__row__upperButton}>Edit profile</button>
        </NavLink>
        <NavLink to="/" className={PopUpUserMenuStyle.popUp__row}>
          <button className={PopUpUserMenuStyle.popUp__row__lowerButton}
                  onClick={props.logOut}>Logout
          </button>
        </NavLink>
      </div>
  );
}

export default PopUpUserMenu;