import s from './Profile.module.css';
import userStyle from '../User.module.css';
import discogsLogo from "../../../assets/img/svg/discogs_logo.svg";
import {NavLink} from "react-router-dom";

const Profile = (props) => {

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
            <div className={userStyle.user + ' ' + s.profileUser}>
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
              <div className={userStyle.user__submitLabel}>
                <NavLink to="/edit-profile">
                  <button className={userStyle.user__submitInput}>EDIT</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;