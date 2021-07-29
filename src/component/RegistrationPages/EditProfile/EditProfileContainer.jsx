import {updateDiscogsUsername, updateEmail} from "../../../redux/edit-profile-reducer";
import EditProfile from "./EditProfile";
import {connect} from "react-redux";
import {compose} from "redux";


let mapStateToProps = (state) => {
  return {
    editProfilePage: state.editProfilePage
  };
};

export default compose(connect(mapStateToProps, {updateDiscogsUsername, updateEmail}))(EditProfile);

