import mobileStyle from "./HeaderMobile.module.css"
import {NavLink} from "react-router-dom";
import navImgMobile from "../../../assets/img/nav_mobile_header.png"
import waxLogoMobile from "../../../assets/img/wax_deals.png"

const HeaderMobile = () => {
  return (
    <header>
      <div className='containerMobile'>
        <div className={mobileStyle.header__rowMobile}>

          <nav>
            <div>
              <img src={navImgMobile} alt="mobile navigation"/>
            </div>
          </nav>

          <NavLink to='/'>
            <img src={waxLogoMobile} alt="mobile logo"/>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default HeaderMobile;