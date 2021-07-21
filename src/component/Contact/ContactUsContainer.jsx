import {
  updateName,
  updateEmail,
  updateMessage
} from "../../redux/contact-us-reducer";
import {connect} from "react-redux";
import ContactUs from "./ContactUs";

let mapStateToProps = (state) => {
  return {
    contactUsPage: state.contactUsPage
  };
};

export default connect(mapStateToProps, {updateName, updateEmail, updateMessage})(ContactUs);
