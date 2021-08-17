import EditProfile from "./EditProfile";
import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";
import {deleteUserProfile, editUserProfile, setIsProfileEdited} from "../../../redux/auth-reducer";
import {setIsDeleteProfileQuestion} from "../../../redux/edit-profile-reducer";
import {Redirect} from "react-router-dom";

class EditProfileContainer extends React.Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.isProfileEdited || this.props.isDeleteProfileQuestion){
      setTimeout(()=> {
        this.props.setIsProfileEdited(false);
        this.props.setIsDeleteProfileQuestion(false);
      }, 10000);
    }
  }

  changeProfileData = (formData) => {
    debugger
    this.props.editUserProfile(formData.email, formData.discogsUserName);
  }

  turnOnDeleteProfileAlert = () => {
    this.props.setIsDeleteProfileQuestion(true);
  }

  turnOffAlert = () => {
    this.props.setIsProfileEdited(false);
    this.props.setIsDeleteProfileQuestion(false);
  }

  render() {

    if (this.props.isProfileDeleted){
      return <Redirect to='/signUp'/>
    }

    return (
      <EditProfile initialValues={this.props.initialValues}
                   onSubmit={this.changeProfileData}
                   isProfileEdited={this.props.isProfileEdited}
                   turnOffAlert={this.turnOffAlert}
                   isDeleteProfileQuestion={this.props.isDeleteProfileQuestion}
                   turnOnDeleteProfileAlert={this.turnOnDeleteProfileAlert}
                   deleteUserProfile={this.props.deleteUserProfile}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  initialValues:{
    email: state.auth.email,
    discogsUserName: state.auth.discogsUserName
  },
  isProfileEdited: state.auth.isProfileEdited,
  isProfileDeleted: state.auth.isProfileDeleted,
  isDeleteProfileQuestion: state.editProfilePage.isDeleteProfileQuestion
});

export default compose(connect(mapStateToProps, {editUserProfile, setIsProfileEdited, setIsDeleteProfileQuestion, deleteUserProfile}))(EditProfileContainer);

