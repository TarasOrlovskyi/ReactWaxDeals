import {
  updateName,
  updateEmail,
  updateMessage
} from "../../redux/contact-us-reducer";
import {connect} from "react-redux";
import ContactUs from "./ContactUs";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    contactUsPage: state.contactUsPage
  };
};

export default compose(connect(mapStateToProps, {updateName, updateEmail, updateMessage}))(ContactUs);
