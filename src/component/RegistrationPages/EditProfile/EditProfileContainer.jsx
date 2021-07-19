import {updateDiscogsUsername, updateEmail} from "../../../redux/edit-profile-reducer";
import EditProfile from "./EditProfile";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    editProfilePage: state.editProfilePage
  };
};

export default connect(mapStateToProps, {updateDiscogsUsername, updateEmail})(EditProfile);

