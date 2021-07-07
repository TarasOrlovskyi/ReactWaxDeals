import s from './HeaderNav.module.css';
import logo from '../../../img/svg/wax_deals.svg';
import {NavLink} from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav className={s.header__menu} role="navigation">
      <ul className={s.header__menuList}>
        <li>
          <NavLink to="/about" activeClassName={s.header__menuItem_active} className={s.header__menuItem}>about</NavLink>
        </li>
        <li>
          <NavLink to="catalog" activeClassName={s.header__menuItem_active} className={s.header__menuItem}>catalog</NavLink>
        </li>
        <li>
          <a href="/">
            <img src={logo} alt="wax deals logo"/>
          </a>
        </li>
        <li>
          <NavLink to="/stores" activeClassName={s.header__menuItem_active} className={s.header__menuItem}>stores</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName={s.header__menuItem_active} className={s.header__menuItem}>contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;