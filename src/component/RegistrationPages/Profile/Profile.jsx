import s from './Profile.module.css';
import userStyle from '../User.module.css';
import discogsLogo from "../../../assets/img/svg/discogs_logo.svg";

const Profile = (props) => {
  document.body.style.background = "url(assets/background.jpg) no-repeat fixed center";
  document.body.style.backgroundSize = "cover";
  return (
    <main className="main">

      <div className="container">

        <div className="searchArea">
        </div>

        <div className={s.contentProfile + ' content'}>

          <div className={s.contentProfile__column + ' contentColumn'}>

            <div className={userStyle.contentUser__title}>
              <h2>Profile</h2>
            </div>

            <form action="/profile/edit-profile" method="GET" className={userStyle.user + ' ' + s.profileUser}>
              <div className={userStyle.user__fieldsWrapper}>
                <div className={userStyle.user__fields + ' ' + s.profileUser__fields}>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="email" name="email" placeholder="Email"
                           value={props.email}
                           readOnly/>
                  </label>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="text" name="discogsUserName"
                           placeholder="Discogs Username"
                           value={props.discogsUserName} readOnly/>
                  </label>
                  <img className={userStyle.discogsLogo}
                       src={discogsLogo}
                       alt="Discogs logo"/>
                </div>
              </div>
              <label className={userStyle.user__submitLabel}>
                <input className={userStyle.user__submitInput} type="submit" value="EDIT"/>
              </label>
            </form>

          </div>

        </div>
      </div>

    </main>
  );
}

export default Profile;