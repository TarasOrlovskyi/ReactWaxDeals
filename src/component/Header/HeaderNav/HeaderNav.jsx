import s from './HeaderNav.module.css';
import logo from '../../../img/svg/wax_deals.svg';

const HeaderNav = () => {
  return (
    <nav className={s.header__menu} role="navigation">
      <ul className={s.header__menuList}>
        <li>
          <a href="/about" className={s.header__menuItem}>about</a>
        </li>
        <li>
          <a href="catalog" className={s.header__menuItem}>catalog</a>
        </li>
        <li>
          <a href="/">
            <img src={logo} alt="wax deals logo"/>
          </a>
        </li>
        <li>
          <a href="/stores" className={s.header__menuItem}>stores</a>
        </li>
        <li>
          <a href="/contact" className={s.header__menuItem}>contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;