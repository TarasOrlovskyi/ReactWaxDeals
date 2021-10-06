import headerBurgerStyle from "../HeaderMobile.module.css";
import burger from "../../../../assets/img/nav_mobile_header.png"
import logo from "../../../../assets/img/wax_deals.png"
import closeButton from "../../../../assets/img/close_header.png"
import {NavLink} from "react-router-dom";
import RegistrationSigns from "../../RegistrationSigns/RegistrationSigns";
import React from "react";

const HeaderMobile = React.memo( ({
                                    headerForRender,
                                    isAuth,
                                    logOut,
                                    activateBurger,
                                    isAuthedUserWindow,
                                    switchAuthedUserWindow
                                  }) => {

  return (
      <div className={headerBurgerStyle.header__mobile}>
        <div onClick={activateBurger}>
          <img src={burger} alt="burger menu" onClick={activateBurger}/>
        </div>
        <NavLink to="/">
          {
            headerForRender === "headerWithLogo" &&
            <img src={logo} alt="logo"/>
          }
          {
            headerForRender === "registrationHeader" &&
            <img src={closeButton} alt="close button"/>
          }
        </NavLink>
        {
          headerForRender === "homeHeader" &&
          <RegistrationSigns
              isAuth={isAuth}
              logOut={logOut}
              isAuthedUserWindow={isAuthedUserWindow}
              switchAuthedUserWindow={switchAuthedUserWindow}/>
        }
      </div>
  )
})


export default HeaderMobile;