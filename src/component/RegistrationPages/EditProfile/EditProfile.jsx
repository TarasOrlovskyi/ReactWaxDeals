import editProfileStyle from './EditProfile.module.css';
import userStyle from '../User.module.css';
import EditProfileForm from "./EditProfileForm/EditProfileForm";
import React from "react";
import MessageAlert from "../../Common/Alert/MessageAlert";
import MessageAlertBig from "../../Common/Alert/MessageAlertBig";

const EditProfile = React.memo(
    ({
       isInfoAlert,
       pageInfo,
       turnOffAlert,
       isQuestionAlert,
       pageQuestion,
       deleteUserProfile,
       initialValues,
       onSubmit,
       turnOnDeleteProfileAlert,
       getDiscogsWantlist,
       isWaitResponse
     }) => {

      return (
          <main>
            <div className="container">
              <div className="searchArea">
              </div>
              {
                (isInfoAlert && pageInfo === "EditProfile") &&
                <MessageAlert
                    turnOffAlert={turnOffAlert}
                    messages="Your profile has been edited"
                />
              }
              {
                (isQuestionAlert && pageQuestion === "EditProfile") &&
                <MessageAlertBig
                    messages="Are you sure that you want delete your profile? You will lose all your info (want list, history
    of last viewed vinyls...)"
                    agreeButtons={deleteUserProfile}
                    closeButton={turnOffAlert}
                />
              }
              {
                (isInfoAlert && pageInfo === "DiscogsWantlist") &&
                <MessageAlert
                    turnOffAlert={turnOffAlert}
                    messages="We added your discogs want list"
                />
              }
              {
                (isInfoAlert && pageInfo === "DiscogsWantlistError") &&
                <MessageAlert
                    turnOffAlert={turnOffAlert}
                    messages="We couldn't get your discogs wantlist. Please check your discogs username"
                />
              }
              <div className={editProfileStyle.contentEditProfile + ' content'}>
                <div className={editProfileStyle.contentEditProfile__column + ' contentColumn'}>
                  <div className={userStyle.contentUser__title}>
                    <h2>Edit Profile</h2>
                  </div>
                  <EditProfileForm initialValues={initialValues}
                                   onSubmit={onSubmit}
                                   turnOnDeleteProfileAlert={turnOnDeleteProfileAlert}
                                   getDiscogsWantlist={getDiscogsWantlist}
                                   isWaitResponse={isWaitResponse}
                  />
                </div>
              </div>
            </div>
          </main>
      );
    })

export default EditProfile;