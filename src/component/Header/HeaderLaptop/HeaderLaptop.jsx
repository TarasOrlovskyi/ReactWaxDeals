import s from "./HeaderLaptop.module.css";
import HeaderNav from "./HeaderNav/HeaderNav";
import RegistrationSigns from "../RegistrationSigns/RegistrationSigns";

const HeaderLaptop = (props) => {
  return (
    <div className={s.header__row}>
      <HeaderNav/>
      <RegistrationSigns isAuth={props.isAuth} logOut={props.logOut}/>
    </div>
  );
}

export default HeaderLaptop;