import aboutStyle from './About.module.css';
import aboutImage from "../../assets/img/aboutImage.png";
import SearchFieldContainer from "../SearchField/SearchFieldContainer";

const About = () => {
  document.body.style.background = "url(assets/background.jpg) no-repeat fixed center";
  document.body.style.backgroundSize = "cover";
  return (
    <main className="main">
      <div className="container subContainer">

        <div className="searchArea">
          <SearchFieldContainer/>
        </div>

        <div className={aboutStyle.aboutContent}>
          <div className={aboutStyle.aboutBody}>
            <h2 className={aboutStyle.aboutBody__title}>Who we are</h2>
            <p>We created this service together all the popular vinyl record stores</p>
            <p>at one place and make your shopping cheaper.</p>
            <h2 className={aboutStyle.aboutBody__title + ' ' + aboutStyle.aboutBody__secondTitle}>What you can do</h2>
            <p>You can search through various stores, compare prices,</p>
            <p>add records to your wantlist and get notification when the price drops.</p>
            <div className={aboutStyle.aboutBody__image}>
              <img src={aboutImage} alt="vinyl"/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About;