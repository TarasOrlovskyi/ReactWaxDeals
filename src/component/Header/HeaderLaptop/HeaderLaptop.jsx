import s from "./HeaderLaptop.module.css";
import HeaderNav from "./HeaderNav/HeaderNav";
import RegistrationSigns from "../RegistrationSigns/RegistrationSigns";

const HeaderLaptop = (props) => {
  return(
    <header className={s.header}>
      <div className="container">
        <div className={s.header__row}>
          <HeaderNav/>
          <RegistrationSigns isAuth={props.isAuth} logOut={props.logOut}/>
        </div>
      </div>
    </header>
  );
}

export default HeaderLaptop;