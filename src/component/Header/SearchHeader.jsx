import s from './Header.module.css';
import HeaderNav from "./HeaderNav/HeaderNav";
import RegistrationSigns from "./RegistrationSigns/RegistrationSigns";
import SearchFieldContainer from "../SearchField/SearchFieldContainer";

const SearchHeader = () => {
  return (
    <header className={s.header}>
      <div className="container">

        <div className={s.header__row}>
          <HeaderNav/>
          <RegistrationSigns/>
        </div>

        <div className={s.header__search}>
          <SearchFieldContainer/>
        </div>

      </div>
    </header>
  );
}

export default SearchHeader;