import HeaderMobile from "./HeaderMobile/Headers/HeaderMobile";
import HeaderLaptop from "./HeaderLaptop/HeaderLaptop";
import HeaderOneVinyl from "./HeaderMobile/HeaderOneVinyl/HeaderOneVinyl";
import headerLaptopStyle from "./HeaderLaptop/HeaderLaptop.module.css";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import React from "react";

const Header = React.memo(    ({
                                 isAuth,
                                 logOut,
                                 headerForRender,
                                 isBurgerActivate,
                                 activateBurger,
                                 turnOffBurger,
                                 isAuthedUserWindow,
                                 switchAuthedUserWindow
                               }) => {

  return (
      <header className={headerLaptopStyle.header}>
        <div className="container">
          {headerForRender === "oneVinylHeader" &&
          <HeaderOneVinyl activateBurger={activateBurger}/>
          }
          {(headerForRender === "headerWithLogo"
              || headerForRender === "registrationHeader"
              || headerForRender === "homeHeader") &&
          <HeaderMobile headerForRender={headerForRender}
                        isAuth={isAuth}
                        logOut={logOut}
                        activateBurger={activateBurger}
                        isAuthedUserWindow={isAuthedUserWindow}
                        switchAuthedUserWindow={switchAuthedUserWindow}
          />
          }
          <HeaderLaptop isAuth={isAuth}
                        logOut={logOut}
                        isAuthedUserWindow={isAuthedUserWindow}
                        switchAuthedUserWindow={switchAuthedUserWindow}
          />
          <BurgerMenu turnOffBurger={turnOffBurger} isBurgerActivate={isBurgerActivate} isAuth={isAuth} logOut={logOut}/>
        </div>
      </header>
  );
})

export default Header;