import headerBurgerStyle from "../HeaderMobile.module.css";
import burger from "../../../../assets/img/nav_mobile_header.png"
import logo from "../../../../assets/img/wax_deals.png"
import closeButton from "../../../../assets/img/close_header.png"
import {NavLink} from "react-router-dom";
import RegistrationSigns from "../../RegistrationSigns/RegistrationSigns";

const HeaderMobile = (props) => {
  return (
    <header>
      <div className='container'>
        <div className={headerBurgerStyle.header__mobile}>
          <div>
            <img src={burger} alt="burger menu"/>
          </div>
          <NavLink to="/">
            {
              props.headerForRender === "headerWithLogo" &&
              <img src={logo} alt="logo"/>
            }
            {
              props.headerForRender === "registrationHeader" &&
              <img src={closeButton} alt="close button"/>
            }
            {
              props.headerForRender === "homeHeader" &&
              <RegistrationSigns isAuth={props.isAuth} logOut={props.logOut}/>
            }
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default HeaderMobile;