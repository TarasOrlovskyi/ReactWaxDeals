import headerBurgerStyle from "../HeaderMobile.module.css";
import burger from "../../../../assets/img/nav_mobile_header.png";
import {NavLink} from "react-router-dom";
import logo from "../../../../assets/img/wax_deals.png";
import backButton from "../../../../assets/img/back_button.png";

const HeaderOneVinyl = ({activateBurger}) => {
  return (
      <div className={headerBurgerStyle.header__mobile}>
        <NavLink to='/catalog'>
          <img src={backButton} alt="burger menu"/>
        </NavLink>
        <NavLink to="/">
          <img src={logo} alt="logo"/>
        </NavLink>
        <div onClick={activateBurger}>
          <img src={burger} alt="burger menu"/>
        </div>
      </div>
  )
}

export default HeaderOneVinyl;