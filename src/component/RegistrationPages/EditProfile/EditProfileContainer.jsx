import {changeDiscogsUsernameActionCreator, changeEmailActionCreator} from "../../../redux/edit-profile-reducer";
import EditProfile from "./EditProfile";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    editProfilePage: state.editProfilePage
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateEditProfileEmail: (emailText) => {
      dispatch(changeEmailActionCreator(emailText));
    },
    updateEditProfileDiscogsUsername: (discogsUsernameText) => {
      dispatch(changeDiscogsUsernameActionCreator(discogsUsernameText));
    },

  };
};

const EditProfileContainer = connect(mapStateToProps, mapDispatchToProps)(EditProfile);

export default EditProfileContainer;