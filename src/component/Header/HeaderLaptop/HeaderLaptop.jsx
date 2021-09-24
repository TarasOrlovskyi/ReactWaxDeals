import s from "./HeaderLaptop.module.css";
import HeaderNav from "./HeaderNav/HeaderNav";
import RegistrationSigns from "../RegistrationSigns/RegistrationSigns";
import PopUpLoggedInUserMenu from "../PopUpUserMenu/PopUpUserMenu";

const HeaderLaptop = (props) => {
  return (
      <div className={s.header__row}>
        <HeaderNav isAuth={props.isAuth}/>
        <RegistrationSigns isAuth={props.isAuth} logOut={props.logOut}/>
        <PopUpLoggedInUserMenu/>
      </div>
  );
}

export default HeaderLaptop;