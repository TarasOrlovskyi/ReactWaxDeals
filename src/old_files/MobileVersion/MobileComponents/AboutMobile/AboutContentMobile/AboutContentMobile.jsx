import aboutContentMobileStyle from './AboutContentMobile.module.css';
import aboutMobileImage from "../../../../../assets/img/MobileImg/about_image.png";
import mobileStyle from "../../../../../index.css";

const AboutContentMobile = () => {
  return (

    <main>
      <div className={mobileStyle.containerMobile}>
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
  );
}

export default AboutContentMobile;