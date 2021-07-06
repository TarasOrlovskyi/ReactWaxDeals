import s from './Home.module.css';
import cs from '../../Common.module.css'

const Home = () => {
  return(
    <main className={cs.main}>

      {/*content of main*/}

      <div className={cs.container}>
        <div className={s.contentHome + ' ' + cs.content}>

          <div className={s.contentHome__column + ' ' + cs.contentColumn}>

            <div className={s.contentHome__title}>
              <h1>COMPARE PRICES of VINYL RECORDS</h1>
            </div>

            <form action="search" method="GET">
              <label className={cs.search}>
                <input className={cs.search__input} type="text" name="matcher"
                       placeholder="Search by artist or title..."
                       required/>
                <input type="submit" value="" className={cs.search__button}/>
              </label>
            </form>

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