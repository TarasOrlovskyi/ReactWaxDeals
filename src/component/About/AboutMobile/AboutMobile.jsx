import mobileStyle from "../../../index.css";
import aboutContentMobileStyle from "./AboutMobile.module.css";
import aboutMobileImage from "../../../assets/img/aboutImage.png";

const AboutMobile = () => {
  return (
      <main>
        <div className='containerMobile'>
          <div className={aboutContentMobileStyle.aboutContentMobile}>

            <div className={aboutContentMobileStyle.about__titleMobile}>
              <h2>About</h2>
            </div>
            <div className={aboutContentMobileStyle.about__textMobile}>
              <p>We created this service together all the popular</p>
              <p>vinyl record stores at one place and make your</p>
              <p> shopping cheaper.</p>
              <br/>
              <br/>
              <p>Search through various stores, compare prices,</p>
              <p>add records to your wantlist and get notification</p>
              <p>when the price drops.</p>
            </div>
            <div className={aboutContentMobileStyle.about__imageMobile}>
              <img src={aboutMobileImage} alt="aboutMobileImage"/>
            </div>
          </div>
        </div>
      </main>
  )
}

export default AboutMobile;