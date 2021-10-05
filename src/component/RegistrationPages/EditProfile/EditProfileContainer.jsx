import EditProfile from "./EditProfile";
import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";
import {withRouter} from "react-router-dom";
import {deleteUserProfile, editUserProfile} from "../../../redux/actions/authActions";
import {activateInfoAlert, activateQuestionAlert} from "../../../redux/actions/alertActions";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {getDiscogsWantlist} from "../../../redux/actions/wantlistActions";

class EditProfileContainer extends React.Component {

  changeProfileData = (formData) => {
    this.props.editUserProfile(formData.email, formData.discogsUserName, this.props.history.push);
  }

  deleteUserProfile = () => {
    this.props.deleteUserProfile(this.props.history.push);
  }

  turnOnDeleteProfileAlert = () => {
    this.props.activateQuestionAlert(true, "EditProfile");
  }

  turnOffAlert = () => {
    this.props.activateInfoAlert(false, "");
    this.props.activateQuestionAlert(false, "");
  }

  getDiscogsWantlist = () => {
    this.props.getDiscogsWantlist(this.props.history.push);
  }

  render() {

    return (
        <EditProfile initialValues={this.props.initialValues}
                     onSubmit={this.changeProfileData}
                     turnOffAlert={this.turnOffAlert}
                     isInfoAlert={this.props.isInfoAlert}
                     isQuestionAlert={this.props.isQuestionAlert}
                     pageInfo={this.props.pageInfo}
                     pageQuestion={this.props.pageQuestion}
                     turnOnDeleteProfileAlert={this.turnOnDeleteProfileAlert}
                     deleteUserProfile={this.deleteUserProfile}
                     getDiscogsWantlist={this.getDiscogsWantlist}
                     isWaitResponse={this.props.isWaitResponse}
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
  pageInfo: state.alert.pageInfo,
  pageQuestion: state.alert.pageQuestion,
  isWaitResponse: state.preloader.isWaitResponse
});

export default compose(withRouter, withAuthRedirect, connect(mapStateToProps, {
  editUserProfile,
  activateInfoAlert,
  activateQuestionAlert,
  deleteUserProfile,
  getDiscogsWantlist
}))(EditProfileContainer);