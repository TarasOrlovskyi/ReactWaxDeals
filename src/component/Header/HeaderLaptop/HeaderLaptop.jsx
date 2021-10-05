import s from "./HeaderLaptop.module.css";
import HeaderNav from "./HeaderNav/HeaderNav";
import RegistrationSigns from "../RegistrationSigns/RegistrationSigns";

const HeaderLaptop = ({isAuth, logOut, isAuthedUserWindow, switchAuthedUserWindow}) => {
  return (
      <div className={s.header__row}>
        <HeaderNav isAuth={isAuth}/>
        <RegistrationSigns isAuth={isAuth}
                           logOut={logOut}
                           isAuthedUserWindow={isAuthedUserWindow}
                           switchAuthedUserWindow={switchAuthedUserWindow}
        />
      </div>
  );
}

export default HeaderLaptop;