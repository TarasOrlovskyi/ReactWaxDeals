import headerNavStyle from './HeaderNav.module.css';
import logo from '../../../../assets/img/svg/wax_deals.svg';
import {NavLink} from "react-router-dom";
import React from "react";

const HeaderNav = React.memo(({isAuth}) => {
  return (
      <nav className={headerNavStyle.header__menu} role="navigation">
        <ul className={headerNavStyle.header__menuList}>
          <li>
            <NavLink to="/about" activeClassName={headerNavStyle.header__menuItem_active}
                     className={headerNavStyle.header__menuItem}>about</NavLink>
          </li>
          <li>
            <NavLink exact to="/catalog" activeClassName={headerNavStyle.header__menuItem_active}
                     className={headerNavStyle.header__menuItem}>
              {isAuth
                  ? "wantlist"
                  : "catalog"
              }
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src={logo} alt="wax deals logo"/>
            </NavLink>
          </li>
          <li>
            <NavLink to="/stores" activeClassName={headerNavStyle.header__menuItem_active}
                     className={headerNavStyle.header__menuItem}>stores</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName={headerNavStyle.header__menuItem_active}
                     className={headerNavStyle.header__menuItem}>contact</NavLink>
          </li>
        </ul>
      </nav>
  );
})

export default HeaderNav;