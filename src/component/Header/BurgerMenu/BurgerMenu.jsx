import burgerMenuStyle from "./BurgerMenu.module.css";
import waxDealsLogo from "../../../assets/img/Wax_Deals_logo_mobile.png";
import closeButton from "../../../assets/img/close_header.png";
import Footer from "../../Footer/Footer";
import {NavLink} from "react-router-dom";
import SocialNav from "../../Footer/SocialNav/SocialNav";
import React from "react";

const BurgerMenu = React.memo(({isBurgerActivate, turnOffBurger}) => {
  return (
      <div className={
        isBurgerActivate ? burgerMenuStyle.burger + ' ' + burgerMenuStyle.burger_active : burgerMenuStyle.burger
      }>
        <div className={burgerMenuStyle.burgerBody}>
          <div className={burgerMenuStyle.burgerBody__header} onClick={turnOffBurger}>
            <img src={closeButton} alt="close"/>
          </div>
          <div className={burgerMenuStyle.burgerBody__column}>
            <NavLink to="/" className={burgerMenuStyle.burgerBody__columnItem} onClick={turnOffBurger}>
              <img src={waxDealsLogo} alt="logo"/>
            </NavLink>
            <NavLink to="/about" className={burgerMenuStyle.burgerBody__columnItem}
                     onClick={turnOffBurger}>ABOUT</NavLink>
            <NavLink to="/catalog" className={burgerMenuStyle.burgerBody__columnItem}
                     onClick={turnOffBurger}>CATALOG</NavLink>
            <NavLink to="/stores" className={burgerMenuStyle.burgerBody__columnItem}
                     onClick={turnOffBurger}>STORES</NavLink>
            <NavLink to="/contact" className={burgerMenuStyle.burgerBody__columnItem}
                     onClick={turnOffBurger}>CONTACT</NavLink>
          </div>
          <div className={burgerMenuStyle.burgerBody__row}>
            <NavLink to="/signIn" onClick={turnOffBurger}>LOG IN</NavLink>
            <NavLink to="/signUp" className={burgerMenuStyle.burgerBody__rowItemColor} onClick={turnOffBurger}>SIGN
              UP</NavLink>
          </div>
          <SocialNav/>
          <Footer/>
        </div>

      </div>
  )
})

export default BurgerMenu;