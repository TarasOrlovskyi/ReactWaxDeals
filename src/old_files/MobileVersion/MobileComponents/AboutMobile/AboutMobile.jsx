import AboutContentMobile from "./AboutContentMobile/AboutContentMobile";
import mobileStyle from "../../../../index.css";
import FooterMobile from "../FooterMobile/FooterMobile";
import HeaderMobile from "../HeaderMobile/HeaderMobile";

const AboutMobile = () => {
  return (
    <div className={mobileStyle.wrapperMobile}>
      <HeaderMobile/>
      <AboutContentMobile/>
      <FooterMobile/>
    </div>
  )
}

export default AboutMobile;