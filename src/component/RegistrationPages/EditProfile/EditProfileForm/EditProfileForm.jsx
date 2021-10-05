import userStyle from "../../User.module.css";
import editProfileStyle from "../EditProfile.module.css";
import discogsLogo from "../../../../assets/img/svg/discogs_logo.svg";
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../Common/FormsControl/FormsControl";
import {emailValidation, maxLength, required} from "../../../../utils/validators/validators";

const maxLength50 = maxLength(50);

let EditProfileForm = ({handleSubmit, isWaitResponse, turnOnDeleteProfileAlert, getDiscogsWantlist}) => {
  return (
      <>
        <form className={userStyle.user + ' ' + editProfileStyle.editProfileUser} onSubmit={handleSubmit}>
          <div className={userStyle.user__fieldsWrapper}>
            <div className={userStyle.user__fields + ' ' + editProfileStyle.editProfileUser__fields}>
              <label className={userStyle.user__label}>
                <Field className={userStyle.user__input}
                       type="email"
                       name="email"
                       placeholder="Email"
                       component={Input}
                       validate={[required, maxLength50, emailValidation]}
                />
              </label>
              <label className={userStyle.user__label}>
                <Field className={userStyle.user__input}
                       name="discogsUserName"
                       placeholder="Discogs Username"
                       component={Input}
                />
              </label>
              <img className={userStyle.discogsLogo}
                   src={discogsLogo}
                   alt="Discogs logo"/>
            </div>
          </div>
          <div className={editProfileStyle.editProfileUser__nav}>
            <NavLink to="/change-password" className={editProfileStyle.editProfileUser__changePassword}>Change
              Password</NavLink>

          </div>
          <div className={userStyle.user__submitButtons}>
            <label className={userStyle.user__submitLabel}>
              <button className={userStyle.user__submitInput} disabled={isWaitResponse}>SAVE</button>
            </label>
          </div>
        </form>
        <button className={editProfileStyle.editProfileUser__deleteProfile}
                onClick={turnOnDeleteProfileAlert}
        >Delete Profile
        </button>
        <button className={editProfileStyle.getDiscogsButton}
                onClick={getDiscogsWantlist}
                disabled={isWaitResponse}>GET DISCOGS WANTLIST
        </button>
      </>
  );
};

export default reduxForm({form: "editProfileForm", enableReinitialize: true})(EditProfileForm)