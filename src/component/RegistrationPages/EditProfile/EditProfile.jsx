import editProfileStyle from './EditProfile.module.css';
import userStyle from '../User.module.css';
import UserMessage from "../UserMessage/UserMessage";
import {NavLink} from "react-router-dom";
import discogsLogo from "../../../assets/img/svg/discogs_logo.svg";

const EditProfile = (props) => {

  let onChangeEmailText = (event) => {
    props.updateEmail(event.target.value);
  };

  let onChangeDiscogsUsernameText = (event) => {
    props.updateDiscogsUsername(event.target.value);
  };

  document.body.style.background = "url(assets/background.jpg) no-repeat fixed center";
  document.body.style.backgroundSize = "cover";
  return (
    <main>
      <div className="container">
        <div className="searchArea">
        </div>
        <div className={editProfileStyle.contentEditProfile + ' content'}>
          <UserMessage/>
          <div className={editProfileStyle.contentEditProfile__column + ' contentColumn'}>
            <div className={userStyle.contentUser__title}>
              <h2>Edit Profile</h2>
            </div>
            <form action="/profile/edit-profile" id="edit-profile-form" method="POST"
                  className={userStyle.user + ' ' + editProfileStyle.editProfileUser}
                  name="form_edit" onSubmit="return matchPassword();">
              <div className={userStyle.user__fieldsWrapper}>
                <div className={userStyle.user__fields + ' ' + editProfileStyle.editProfileUser__fields}>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="email" name="email" id="email" placeholder="Email"
                           onChange={onChangeEmailText} value={props.editProfilePage.email} required/>
                  </label>
                  <label className={userStyle.user__label}>
                    <input className={userStyle.user__input} type="text" name="discogsUserName"
                           onChange={onChangeDiscogsUsernameText} placeholder="Discogs Username"
                           value={props.editProfilePage.discogsUsername}/>
                  </label>
                  <img className={userStyle.discogsLogo}
                       src={discogsLogo}
                       alt="Discogs logo"/>
                </div>
              </div>
              <div className={editProfileStyle.editProfileUser__nav}>
                <NavLink to="/change-password" className={editProfileStyle.editProfileUser__changePassword}>Change
                  Password</NavLink>
                <a href="#" className={editProfileStyle.editProfileUser__deleteProfile}>Delete Profile</a>
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