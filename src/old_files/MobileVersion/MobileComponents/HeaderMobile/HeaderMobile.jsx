import mobileStyle from "../../../../index.css";
import {NavLink} from "react-router-dom";
import navImgMobile from "../../../../assets/img/MobileImg/nav_mobile_header.png"
import waxLogoMobile from "../../../../assets/img/MobileImg/wax_deals.png"

const HeaderMobile = () => {
  return (
    <header>
      <div className={mobileStyle.containerMobile}>
        <div className={mobileStyle.header__rowMobile}>

          <nav className="header__navMobile">
            <NavLink className="header__nav-mobile">
              <img src={navImgMobile} alt="navImgMobile"/>
            </NavLink>
          </nav>

          <div className="header__wax-logo">
            <img src={waxLogoMobile} alt="waxLogoMobile"/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderMobile;