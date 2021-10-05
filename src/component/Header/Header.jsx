import HeaderMobile from "./HeaderMobile/Headers/HeaderMobile";
import HeaderLaptop from "./HeaderLaptop/HeaderLaptop";
import HeaderOneVinyl from "./HeaderMobile/HeaderOneVinyl/HeaderOneVinyl";
import s from "./HeaderLaptop/HeaderLaptop.module.css";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header = ({
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
      <header className={s.header}>
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
          <BurgerMenu turnOffBurger={turnOffBurger} isBurgerActivate={isBurgerActivate}/>
        </div>
      </header>
  );
}

export default Header;