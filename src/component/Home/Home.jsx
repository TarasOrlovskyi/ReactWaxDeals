import s from './Home.module.css';
import SearchFieldContainer from "../SearchField/SearchFieldContainer";

const Home = () => {
  document.body.style.background = "url(assets/background_home.jpg) no-repeat fixed center";
  document.body.style.backgroundSize = "cover";
  return (
    <main className="main">
      <div className="container">
        <div className={s.contentHome + ' content'}>
          <div className={s.contentHome__column + ' contentColumn'}>

            <div className={s.contentHome__title}>
              <h1>COMPARE PRICES of VINYL RECORDS</h1>
            </div>

            <SearchFieldContainer/>
            <div>
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