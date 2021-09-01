import HeaderMobile from "./HeaderMobile/Headers/HeaderMobile";
import HeaderLaptop from "./HeaderLaptop/HeaderLaptop";
import HeaderOneVinyl from "./HeaderMobile/HeaderOneVinyl/HeaderOneVinyl";
import s from "./HeaderLaptop/HeaderLaptop.module.css";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className="container">
        {props.headerForRender === "oneVinylHeader" &&
        <HeaderOneVinyl activateBurger={props.activateBurger}/>
        }
        {(props.headerForRender === "headerWithLogo"
          || props.headerForRender === "registrationHeader"
          || props.headerForRender === "homeHeader") &&
        <HeaderMobile headerForRender={props.headerForRender}
                      isAuth={props.isAuth}
                      logOut={props.logOut}
                      activateBurger={props.activateBurger}
        />
        }
        <HeaderLaptop isAuth={props.isAuth} logOut={props.logOut}/>
        <BurgerMenu turnOffBurger={props.turnOffBurger} isBurgerActivate={props.isBurgerActivate}/>
      </div>
    </header>
  );
}

export default Header;