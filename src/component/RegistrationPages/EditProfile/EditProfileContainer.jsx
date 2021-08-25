import EditProfile from "./EditProfile";
import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";
import {Redirect} from "react-router-dom";
import {deleteUserProfile, editUserProfile} from "../../../redux/actions/authActions";
import {activateInfoAlert, activateQuestionAlert} from "../../../redux/actions/alertActions";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

class EditProfileContainer extends React.Component {

  changeProfileData = (formData) => {
    this.props.editUserProfile(formData.email, formData.discogsUserName);
  }

  turnOnDeleteProfileAlert = () => {
    this.props.activateQuestionAlert(true, "EditProfile");
  }

  turnOffAlert = () => {
    this.props.activateInfoAlert(false, "");
    this.props.activateQuestionAlert(false, "");
  }

  render() {
    if (this.props.isInfoAlert && this.props.page === "ProfileDeleted") {
      return <Redirect to='/signUp'/>
    }

    return (
      <EditProfile initialValues={this.props.initialValues}
                   onSubmit={this.changeProfileData}
                   turnOffAlert={this.turnOffAlert}
                   isInfoAlert={this.props.isInfoAlert}
                   isQuestionAlert={this.props.isQuestionAlert}
                   page={this.props.page}
                   turnOnDeleteProfileAlert={this.turnOnDeleteProfileAlert}
                   deleteUserProfile={this.props.deleteUserProfile}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  initialValues: {
    email: state.auth.email,
    discogsUserName: state.auth.discogsUserName
  },
  isInfoAlert: state.alert.isInfoAlert,
  isQuestionAlert: state.alert.isQuestionAlert,
  page: state.alert.page
});

export default compose(withAuthRedirect, connect(mapStateToProps, {
  editUserProfile,
  activateInfoAlert,
  activateQuestionAlert,
  deleteUserProfile
}))(EditProfileContainer);

