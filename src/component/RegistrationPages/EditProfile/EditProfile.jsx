import editeProfileStyle from './EditProfile.module.css';
import userStyle from '../User.module.css';
import UserMessage from "../UserMessage/UserMessage";
import {NavLink} from "react-router-dom";
import discogsLogo from "../../../assets/img/svg/discogs_logo.svg";

const EditProfile = (props) => {
  document.body.style.background = "url(assets/background.jpg) no-repeat fixed center";
  document.body.style.backgroundSize = "cover";
  return (
    <main>
      <div className="container">
        <div className="searchArea">
        </div>
        <div className={editeProfileStyle.contentEditProfile + ' content'}>
          <UserMessage/>
          <div className={editeProfileStyle.contentEditProfile__column + ' contentColumn'}>
            <div className={userStyle.contentUser__title}>
              <h2>Edit Profile</h2>
            </div>
            <form action="/profile/edit-profile" id="edit-profile-form" method="POST"
                  className={userStyle.user + ' ' + editeProfileStyle.editProfileUser}
                  name="form_edit" onSubmit="return matchPassword();">
              <div className={userStyle.user__fieldsWrapper}>
                <div className={userStyle.user__fields + ' ' + editeProfileStyle.editProfileUser__fields}>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="email" name="email" id="email" placeholder="Email"
                           onBlur="checkEmail(this)" value={props.email} required/>
                  </label>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="text" name="discogsUserName"
                           placeholder="Discogs Username"
                           value={props.discogsUserName}/>
                  </label>
                  <img className={userStyle.discogsLogo}
                       src={discogsLogo}
                       alt="Discogs logo"/>
                </div>
              </div>
              <div className={editeProfileStyle.editProfileUser__nav}>
                <NavLink to="/change-password" className={editeProfileStyle.editProfileUser__changePassword}>Change
                  Password</NavLink>
                <a href="#" className={editeProfileStyle.editProfileUser__deleteProfile}>Delete Profile</a>
              </div>
              <div className={userStyle.user__submitButtons}>
                <label className={userStyle.user__submitLabel}>
                  <input className={userStyle.user__submitInput} type="submit" value="SAVE"/>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EditProfile;