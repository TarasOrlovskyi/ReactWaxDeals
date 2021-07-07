import s from './Header.module.css';
import HeaderNav from "./HeaderNav/HeaderNav";
import RegistrationSigns from "./RegistrationSigns/RegistrationSigns";

const SimpleHeader = () => {
  return (
    <header className={s.header}>
      <div className="container">

        <div className={s.header__row}>
          <HeaderNav />
          <RegistrationSigns />
        </div>

      </div>
    </header>
  );
}

export default SimpleHeader;