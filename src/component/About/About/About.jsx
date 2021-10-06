import aboutStyle from './About.module.css';
import aboutImage from "../../../assets/img/aboutImage.png";
import SearchFieldContainer from "../../SearchField/SearchFieldContainer";
import React from "react";

const About = React.memo(() => {
  return (
      <main className="main">
        <div className="container subContainer">

          <div className={aboutStyle.searchAreaContainer}>
            <SearchFieldContainer/>
          </div>

          <div className={aboutStyle.aboutContent}>
            <div className={aboutStyle.aboutBody}>
              <h2 className={aboutStyle.aboutBody__title}>About</h2>
              <p className={aboutStyle.aboutBody__text}>We created this service
                together all the popular vinyl record stores
                at one place and make your shopping cheaper.</p>
              <p className={aboutStyle.aboutBody__text}>You can search through various stores, compare prices,
                add records to your wantlist and get notification when the price drops.</p>
              <div className={aboutStyle.aboutBody__image}>
                <img src={aboutImage} alt="vinyl"/>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
})

export default About;