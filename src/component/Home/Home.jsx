import homeStyle from './Home.module.css';
import SearchFieldContainer from "../SearchField/SearchFieldContainer";
import waxDealsLogo from "../../assets/img/Wax_Deals_logo_mobile.png";
import React from "react";

const Home = React.memo(() => {
  return (
      <main className="main">
        <div className="container">
          <div className="searchArea">
          </div>
          <div className={homeStyle.contentHome + ' content'}>
            <div className={homeStyle.contentHome__logo}>
              <img src={waxDealsLogo} alt="Wax Deals logo"/>
            </div>
            <div className={homeStyle.contentHome__column + ' contentColumn'}>
              <div className={homeStyle.contentHome__title}>
                <h1 className={homeStyle.contentHome__title_titleRow}>
                  <p>ENHANCE YOUR VINYL SHOPPING</p>
                  <p>and SAVE MONEY</p>
                </h1>
              </div>
              <SearchFieldContainer/>
              <div className={homeStyle.contentHome__subtitle}>
                <h2 className={homeStyle.contentHome__subtitle_rows}>
                  Here you can easily find the best price of a record
                  you looking for and get notified when it drops
                  or a record gets back in stock
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
})

export default Home;