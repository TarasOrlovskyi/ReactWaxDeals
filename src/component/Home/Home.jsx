import s from './Home.module.css';
import SearchFieldContainer from "../SearchField/SearchFieldContainer";
import waxDealsLogo from "../../assets/img/Wax_Deals_logo_mobile.png";

const Home = () => {
  return (
      <main className="main">
        <div className="container">
          <div className="searchArea">
          </div>
          <div className={s.contentHome + ' content'}>
            <div className={s.contentHome__logo}>
              <img src={waxDealsLogo} alt="Wax Deals logo"/>
            </div>
            <div className={s.contentHome__column + ' contentColumn'}>
              <div className={s.contentHome__title}>
                <h1>COMPARE PRICES of VINYL RECORDS</h1>
              </div>
              <SearchFieldContainer/>
              <div className={s.contentHome__subtitle}>
                <h2>
                  You can find here a huge number of records from<br/>
                  trusted stores, so you can find the best price<br/>
                  Welcome!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}

export default Home;