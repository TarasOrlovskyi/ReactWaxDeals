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
              <p className={aboutStyle.aboutBody__text + ' ' + aboutStyle.aboutBody__text_intro}>We created this service
                to make your (and our) shopping
                experience easier and cheaper.
                Thousands of records aggregated from the most popular vinyl record stores for you
                to compare prices, add records to your wantlist and get notified when:</p>
              <ul className={aboutStyle.aboutBody__list}>
                <li>the price drops*</li>
                <li>the record is back in stock</li>
                <li>your favourite artist has a new release available for order*</li>
              </ul>
              <p className={aboutStyle.aboutBody__text + ' ' + aboutStyle.aboutBody__text_discogs}>If you are a Discogs
                user you can import your Discogs wantlist
                here and compare prices between the marketplace, record stores and directly from artist via Bandcamp.
                Sometimes considering the shipping price and occasional discounts it may be cheaper to buy a brand new
                record rather than a used one from Discogs.</p>
              <ul className={aboutStyle.aboutBody__list}>
                <span>* - coming soon</span>
              </ul>
              <ul className={aboutStyle.aboutBody__list + ' ' + aboutStyle.aboutBody__list_features}>More features to
                come:
                <li>import your favourite artists from facebook and spotify</li>
                <li>compare prices including shipping</li>
              </ul>
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