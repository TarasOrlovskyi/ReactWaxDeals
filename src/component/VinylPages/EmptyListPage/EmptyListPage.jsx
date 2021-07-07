import s from './EmptyListPage.module.css';
import vinylStyle from './../Vinyl.module.css'

const EmptyListPage = () => {
  return (
    <main className="main">

      <div className="container sub-container">
        <div className={vinylStyle.vinylsContent}>

          <div>
            <div className={s.searchNone}>
              <p className={s.searchNone__one}>Now your want list is empty.</p>
              <p className={s.searchNone__two}>Useful tips:</p>
              <ul className={s.searchNone__ulSearch}>
                <li>You can <a href="/editProfile" className="underlineLink">add your discogs username</a> and we will
                  show vinyls according to your discogs want list
                </li>
                <li>You can add the record on the website <a href="https://www.discogs.com/" className="underlineLink"
                                                             target="_blank">www.discogs.com</a> to the want list
                </li>
                <li>Or <a href="/catalog?wantlist=empty" className="underlineLink">on our website</a> click the star on
                  the record
                </li>
              </ul>
              <p className={s.searchNone__three}>Thank you.</p>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}

export default EmptyListPage;