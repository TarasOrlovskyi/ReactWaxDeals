import editProfileStyle from './EditProfile.module.css';
import userStyle from '../User.module.css';
import EditProfileForm from "./EditProfileForm/EditProfileForm";
import React from "react";
import MessageAlert from "../../Common/Alert/MessageAlert";

const EditProfile = (props) => {
  let firstAlertString = <p>Are you sure that you want delete your profile?</p>
  let secondAlertString = <p>You will lose all your info (want list, history of last viewed vinyls...)</p>
  return (
    <main>
      <div className="container">
        <div className="searchArea">
        </div>
        {
          (props.isInfoAlert && props.pageInfo === "EditProfile") &&
          <MessageAlert
            turnOffAlert={props.turnOffAlert}
            messages="Your profile has been edited"
          />
        }
        {
          (props.isQuestionAlert && props.pageQuestion === "EditProfile") &&
          <MessageAlert
            messages={[firstAlertString, secondAlertString]}
            agreeButtons={props.deleteUserProfile}
            closeButton={props.turnOffAlert}
          />
        }
        <div className={editProfileStyle.contentEditProfile + ' content'}>
          {/*<UserMessage message={props.message} errorMessage={props.errorMessage}/>*/}
          <div className={editProfileStyle.contentEditProfile__column + ' contentColumn'}>
            <div className={userStyle.contentUser__title}>
              <h2>Edit Profile</h2>
            </div>
            <EditProfileForm initialValues={props.initialValues}
                             onSubmit={props.onSubmit}
                             turnOnDeleteProfileAlert={props.turnOnDeleteProfileAlert}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default EditProfile;